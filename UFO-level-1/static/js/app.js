
var ufo = data;
var tbody = d3.select("tbody");


//  FILTER INFORMATION 
// select the button
var button = d3.select("#filter-btn");
// Event handler
button.on("click",filterdate);

// select el form
var form = d3.select("form");
form.on("submit",filterdate);

//  Filterdate function
function filterdate() {
//Prevent the page from refreshing
  event.preventDefault();

  // Select the input element id and its value
  var input = d3.select("#datetime");
  var inputValue = input.property("value");
  console.log(input);  //  porque no aparece la fecha??

//   Use the form input to filter the data by DATE
  var filterData = ufo.filter(ufoCase => ufoCase.datetime=== inputValue);
  console.log(filterData);


// Show information filtered in Web Table
  tbody.html("");
  // append rows and data info
  filterData.forEach((ufoCase) => {
    // console.log(ufoCase)
    var row = tbody.append("tr");
    Object.entries(ufoCase).forEach(([key,value]) => {
        // console.log(key,value)
        var cell = row.append("td");
        cell.text(value);
        });
    });

};