//Question_01:
var studentNames = [];

//Question_02:
var studentNames = new Array();

//Question_03:
var fruitNames = ["Apples", "Mango", "Banana" , "Orange" , "Grapes"];

//Question_04:
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Question_05:
var booleanArray = [true, false, true, false, true];

//Question_06:
var x = ["fiza", 40, "Sahar", 25, true, false, ];

//Question_07:
var qualificationsArray = ["SSC", "BSSE", "BSCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("Qualifications in Pakistan: <br>");
for (var i = 0; i < qualificationsArray.length; i++) {
  document.write((i + 1) + ") " + qualificationsArray[i] + "<br>");
}

//Question_08:
var studentNames = ["ALi", "Ahmed", "Ayesha" , "Subhan" , "Khasaf"];
var Scores = [320, 430, 480, 300, 400];

for (var i = 0; i < studentNames.length; i++) {
  var percentage = (Scores[i] / 500) * 100;
  document.write("Score of " + studentNames[i] + ": " + Scores[i] + " = Percentage: " + percentage + "%<br>");
}

//Question_10:
var scores = [34, 56, 100, 82, 90, 68, 94];
document.write("Original Array: " + scores + "<br>");

scores.sort(function(a, b) {
  return a - b;
});

document.write("Sorted Array in Ascending Order : " + scores + "<br>");


//Question_11;
var cities = ["Karachi", "Lahore", "Islamabad", "Peshawar", "Quetta" , "Pindi" , "Hyderabad"];
var selectedCities = cities.slice(2, 5);
document.write("Selected Cities: " + selectedCities);

//Question_12:
var arr = ["This", "is", "my", "cat"];
var String_Arr = arr.join(" ");
document.write("String Array: " + arr + "<br>")
document.write("String: " + String_Arr);

//Question_13:
var fifoArray = [];
fifoArray.push("Keyboard");
fifoArray.push("Mouse");
fifoArray.push("Printer");
fifoArray.push("Monitor");
document.write("FIFO Array: " + fifoArray.join(", "));

//Question_14:
var lifoArray = [];
lifoArray.push("Keyboard");
lifoArray.push("Mouse");
lifoArray.push("Printer");
lifoArray.push("Monitor");
document.write("LIFO Array: " + lifoArray.reverse().join(", "));

//Question_15:
var VehiclesManufacturers = ["Corolla", "Volvo", "Audi", "Changan"];
document.write("<select>");
for (var i = 0; i < VehiclesManufacturers.length; i++) {
  document.write("<option>" + VehiclesManufacturers[i] + "</option>");
}
document.write("</select>");
