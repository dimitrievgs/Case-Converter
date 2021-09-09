let plates = [ "red", "orange", "yellow", "green", "blue", "indigo", "violet"] ;
let rainbowParty = [];

plates.forEach(function (value) {
    rainbowParty.push(value);
});
plates.forEach(function() {
    console.log(rainbowParty.pop());
});