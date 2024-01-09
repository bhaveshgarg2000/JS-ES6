function Welcome(name) {
    var greetingInfo = function (message) {
        console.log(message + " " + name);
    };
    return greetingInfo;
}
console.clear()
var names = Welcome("John");
names("Welcome "); //Output: Welcome John
names("Hello Mr."); //output: Hello Mr.John