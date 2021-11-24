function simpleSwitch(productId) {
  switch (productId) {
    case 1:
      console.log("Product 1");
      break;
    case 2:
      console.log("Product 2");
      break;
    default:
      // can be put anywhere
      console.log("Unknown Product");
      break;
  }
}

console.log("======== Switch Statements ===========");
simpleSwitch(2);
simpleSwitch(1);
simpleSwitch(5);

// Multiple Case Statements
console.log("============== Multiple Case Statements ===============");
function multipleCase(color) {
  switch (color) {
    case "Red":
    case "Pink":
      console.log("The color belong to Red family");
      break;
    case "Blue":
    case "Light Blue":
    case "Dark Blue":
      console.log("The color belong to Blue family");
      break;
    case "Grey":
    case "Gray":
      console.log("The color belong to Black family");
      break;
    default:
      console.log("Unknown Color");
      break;
  }
}

multipleCase("Red");
multipleCase("Black");

// forget Break in switch statements
console.log("========== Switch without break =========");
function forgetBreak(pId) {
  let productId = pId;

  switch (productId) {
    case 1:
      console.log("HL Road Frame - Black, 58");
      break;
    case 2:
      console.log("Sport-100 Helmet, Red");
    case 3:
      console.log("Mountain Bike Socks, M");
      break;
    default:
      console.log("Unknown Product");
      break;
  }
}

forgetBreak(2);

// Strict Comparison
console.log("======== Strict Comparison =======");
function strictComparison(pId) {
  let productId = pId;

  switch (productId) {
    case 1:
      console.log("HL Road Frame - Black, 58");
      break;
    case 2:
      console.log("Sport-100 Helmet, Red");
      break;
    case 3:
      console.log("Mountain Bike Socks, M");
      break;
    default:
      console.log(" Case Not Matched");
      break;
  }
}

strictComparison("2");

// Block Scope Problem with Switch
console.log("========== Block Scope Problem =================");
function blockScopeProblem(pId) {
  let productId = pId;

  switch (productId) {
    case 1: {
      let message = "HL Road Frame - Black, 58";
      console.log(message);
      break;
    }
    case 2: {
      let message = "Sport-100 Helmet, Red";
      console.log(message);
      break;
    }
    case 3: {
      let message = "Mountain Bike Socks, M";
      console.log(message);
      break;
    }
    default: {
      let message = "Unknown Product";
      console.log(message);
      break;
    }
  }
}

blockScopeProblem(2); // without curly brackets
// use braces to fix the scope problem
