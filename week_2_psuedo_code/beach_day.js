//going to the beach

//Define argument inputs
//what to wear?
var outfit = ["swimsuit", "flip-flops", "t-shirt"]
// what to pack?
var bag_content = ["sunglasses", "phone", "keys", "sunscreen"]
// how much money to bring?
var dollars = 20
// how will I get there? 
// string choices: drive, walk, bum-ride, bus, free-text input
var get_there = "airplane"

// First get dressed
// Description: this argument is a list of items as an array
function getDressed(clothes){
    return "First I'll get dressed, here's what I'm wearing to the beach: " + clothes.join(', ')
}

// Second pack a bag and bring money
// Description: this function requires two arguments 1. an array 2. a number
// Future improvement: break-out the money argument into seperate function that allows for further calculations
function packBag(stuff, money){
    return "Next let me pack a bag, here's what I'm bringing to the beach: " + stuff.join(', ') + " and $" + money
}

// Third go to the beach
// Description: a set of conditional if/else statements depending on the choice of transporation
// Future improvement: add input prompts that allows the user to type or select a choice
function gotoBeach(transportation){
    if (transportation == "drive"){
        transport_mode = "drive and bring car keys and figure out parking"
    } else if (transportation == "walk"){
        transport_mode = "walk, I think I'll switch into sneakers"
    } else if (transportation == "bum-ride"){
        transport_mode = "call a friend to bum a ride"
    } else if (transportation == "bus"){
        transport_mode = "take the bus, will bring a metrocard too"
    } else {
        transport_mode = "figure-out a way to get there by " + transportation
    }
    return "How should I get to the beach? I will " + transport_mode
}

//console log the functions
console.log(getDressed(outfit))
console.log(packBag(bag_content, dollars))
console.log(gotoBeach(get_there))
console.log("OK lets go, time to enjoy the beach!")