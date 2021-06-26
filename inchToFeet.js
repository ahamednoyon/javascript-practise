function inchToFeet(inch){
    var feet = inch / 12;
    return feet;
}

var seniorPerson = [134, 123, 164, 183];
var singlePerson = seniorPerson.indexOf(164);
console.log("Senior Person position", singlePerson);

var nanaFeet = inchToFeet(180);
console.log("Nana Height", nanaFeet);

var naniFeet = inchToFeet(200);
console.log("Nani Height", naniFeet);

var dadaFeet = inchToFeet(220);
console.log("Dada Height", dadaFeet)