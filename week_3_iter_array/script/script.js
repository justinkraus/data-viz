//fetch the data from the data folder (original quotes dataset here: https://www.kaggle.com/fantop/wikiquote-short-english-quotes)
//load the response as json
//push the json into the quoteArray array
//used help from: https://stackoverflow.com/questions/48474970/saving-fetched-json-into-variable
//to refresh on using push to save json array into array variable

var quoteArray = [];

var getData = fetch("./data/quotes-100-en.json")
.then((response)=>{
    return response.json()
})
.then((json)=> quoteArray.push(json.Aesop));
//.then((json)=> console.log(Object.keys(json).length));


//button that on click event performs the render function on the quoteArray
var button = document.querySelector('#getQuote')
button.addEventListener('click', ()=>{
    render(quoteArray)
})

function render(arr){
    //select the container div within the HTML document and pass this to the container variable
    var container = document.querySelector('#container')
    //random function found here: https://www.w3schools.com/jsref/jsref_random.asp
    var rando = Math.floor((Math.random() * 28));
    //use the value for random
    var keyArray = Object.keys(arr)
    //question for Zach - why are two index positions needed to access the value
    //var quoteIndex = keyArray;
    var quoteIndex = arr[0][rando];
    //within the container variable, set the innterHTML property to
    //take the value from the Aesop array and map it into a list item
    //this is returned to innerhtml
    container.innerHTML = `<div>${quoteIndex}<div>`
}

//future extensions of the project:
//1. change the eventlistener to be on refresh to add random quotes to footer of profile page
//2. add variable input to select from other quote authors. 
//This would need an additional condition to determine if the index position selected in 'rando' existed for that author 
//(ie not all authors in dataset have 28 quotes)
