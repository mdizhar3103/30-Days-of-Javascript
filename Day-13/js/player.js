// Singleton Module Pattern

var player = function() {

    // private members
    var playerName = '';

    function logPlayer() {
        console.log('The current player is ' + playerName + '.');
    }

    function setName(newName) {
        playerName = newName;
    }

    function getName() {
        return playerName;
    }

    // exposing to public API - add the return statement
    return {
        logPlayer: logPlayer,
        setName: setName,
        getName: getName
    };

}();