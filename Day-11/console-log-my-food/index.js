const axios = require("axios");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "enter command > ",
});

readline.prompt();
readline.on("line", async (line) => {
  switch (line.trim()) {
    case "list vegan foods":
      {
        axios.get(`http://localhost:3001/food`).then(({ data }) => {
          let idx = 0;
          const veganOnly = data.filter((food) => {
            return food.dietary_preferences.includes("vegan");
          });
          const veganIterable = {
            [Symbol.iterator]() {
              return {
                [Symbol.iterator]() {
                  return this;
                },
                next() {
                  const current = veganOnly[idx];
                  idx++;
                  if (current) {
                    return { value: current, done: false };
                  } else {
                    return { value: current, done: true };
                  }
                },
              };
            },
          };
          for (let val of veganIterable) {
            console.log(val.name);
          }
          readline.prompt();
        });
      }
      break;
    case "log": {
      const { data } = await axios.get("http://localhost:3001/food");
      const it = data[Symbol.iterator]();
      let actionIt;
      const actionIterator = {
        [Symbol.iterator]() {
          let positions = [...this.actions]; // making copy of actions array by spreading the content of actions array into new array
          return {
            [Symbol.iterator]() {
              this; // return itself
            },
            // need to return the Iterator Result Interface
            next(...args) {
              // check the positions array to make sure we are not finished
              if (positions.length > 0) {
                const position = positions.shift();
                const result = position(...args); // passing the arguments to next call
                return { value: result, done: false }; // if position is not 0 return done as true
              } else {
                return { done: true };
              }
            },
            return () {
                positions = [];
                return { done: true };
            },
            throw (error) {
                console.log(error);
                return {value: undefined, done: true};
            }
          };
        },
        // defining sequence of actions that will iterate through
        // to do that we will create an array to hold these actions
        actions: [askForServingSize, displayCalories],
      };

      // prompt the user asking them about info
      function askForServingSize(food) {
        readline.question(
          `How many servings did you eat? (as decimal: 1, 0.5, 1.25)`,
          (servingSize) => {
              if (servingSize === 'nevermind' || servingSize === 'n'){
                  actionIt.return();
              } else {
            actionIt.next(servingSize, food);
        }
          }
        );
      }

      async function displayCalories(servingSize, food) {
        const calories = food.calories;
        console.log(
          `${
            food.name
          } with a serving size of ${servingSize} has a ${Number.parseFloat(
            calories * parseInt(servingSize, 10)
          ).toFixed()} calories. `
        );

        const {data} = await axios.get("http://localhost:3001/users/1");
        const usersLog = data.log || [];
        const putBody = {
            ...data,
            log: [
                ...usersLog,
                {
                    [Date.now()]: {
                        food: food.name,
                        servingSize,
                        calories: calories * parseInt(servingSize, 10),
                    }
                }
            ]
        }

        // axios put request on same url
        await axios.put("http://localhost:3001/users/1", putBody,{
            headers: { 'Content-Type': 'application/json'}
        });

        actionIt.next();
        readline.prompt();
      }

      readline.question(`What would you like to log today? `, async item => {
        let position = it.next(); // return an object with value and done property
        while (!position.done) {
          const food = position.value.name;
          if (food === item) {
            console.log(`${item} has ${position.value.calories} calories`);
            actionIt = actionIterator[Symbol.iterator]();
            actionIt.next(position.value);
          }
          position = it.next();
        }
        // console.log(item);
        readline.prompt();
      });
      break;
    }
  }
});

// using fake rest-api (json-server)
// npm install -g json-server
// create a file db.json and some data JSON format
// npx json-server --watch ./db.json --port 3001
// installing get request client
// npm i --save axios
