//  Select data
var ufo = data;

// Get reference for HTML body
var tbody = d3.select("tbody");

console.log(ufo);
// la respuesta es 1 array de 111 objetos --> [{},{},...,{}]

// append rows and data info
ufo.forEach((ufoCase) => {
    // console.log(ufoCase)
    var row = tbody.append("tr");
    Object.entries(ufoCase).forEach(([key,value]) => {
        console.log(key,value)
        var cell = row.append("td");
        cell.text(value);
    });
});


















// // select the button
// var button = d3.select("#filter-btn");

// // Event handler
// button.on("click",filterdate);

// //  Filterdate function

