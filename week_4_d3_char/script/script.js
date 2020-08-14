//Width and height
var w = 1200;
var h = 200;

var primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

//added linear scale to fit into y-axis
var yScale = d3.scaleLinear()
    .domain([0, d3.max(primeNumbers)])
    .range([0, h]);

//Create SVG element
var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

//populate the svg element with shapes
//select rect elements (currently empty)
svg.selectAll("rect")
//use the dataset array
   .data(primeNumbers)
   .enter()
//append the dataset to selected rect elements
   .append('rect')
//for the x-axis values create a function that takes in the dataset and an iterator
//return for each dataset value an appropriate placement within the svg 
//by dividing amongst the total size of the dataset
   .attr("x", function(d, i){
       return i * (w / primeNumbers.length) + primeNumbers.length;
   })
//for the y-axis values create a function that takes the dataset values and 
//subtract this value from the total height of the SVG element ("h")
   .attr("y", function(d) {
       return h - yScale(d);
   }
   )
//this sets the size of the bars (rects)
   .attr("width", 20)
   .attr("height", function(d) {
    return yScale(d);
})
//add fill by rgb with formula that adds numbers to values based on data values
.attr("fill", function(d){
    return "rgb(0, 0, " + Math.round(d*20) + ")";
});

//add data labels
svg.selectAll("text")
    .data(primeNumbers)
    .enter()
    //append the dataset to selected rect elements
    .append('text')
    .text(function(d){
        return d;
    })
    .attr("x", function(d, i){
        return i * (w / primeNumbers.length) + primeNumbers.length;
    })
    .attr("y", function(d) {
        if (d < 10){
            return (h - yScale(d)) - 2;
        }
        else {
        return (h - yScale(d)) + 10;}
    })
    .attr("fill", "orange" )
    .style("font-size", "13px")
    .style("font-weight", "600");
    