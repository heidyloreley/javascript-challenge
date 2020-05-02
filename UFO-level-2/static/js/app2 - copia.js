
var ufo = data;
var tbody = d3.select("tbody");


//  FILTER INFORMATION 
// select the button
var button = d3.select("#filter-btn");
button.on("click",filterdata);

// select el form  //  -->>  HERE IS NOT WORKING THE  ENTER BUTTON
var form = d3.select("form");
form.on("submit",filterdata);

//  Filterdate function
function filterdata() {
//Prevent the page from refreshing
  event.preventDefault();

  // Select the input element id and its value
  var dateValue = d3.select("#datetime").property("value");
  var cityValue = d3.select("#city").property("value");
  var stateValue = d3.select("#state").property("value");
  var countryValue = d3.select("#country").property("value");
  var shapeValue = d3.select("#shape").property("value");

  console.log(dateValue, cityValue, stateValue, countryValue, shapeValue);  


//   Use the form input to filter the data by INPUT TYPE DATA
  var filterData = ufo.filter(ufoCase => 
        ufoCase.datetime=== dateValue ||  // operator OR
        ufoCase.city === cityValue ||
        ufoCase.state === stateValue ||
        ufoCase.country === countryValue ||
        ufoCase.shape === shapeValue 
  );
    console.log(filterData);

    // // Clear filter values - HOW??
    // d3.select("#datetime").property("value") = "";



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