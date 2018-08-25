
function constructHexagonRow() {
    var markupToInsert = '';
    var hexRows = document.getElementsByClassName("hex-row");
    var windowWidth = window.innerWidth;
    console.log("The window width is: "+windowWidth);
    return markupToInsert;
}
constructHexagonRow();
// document.getElementById("first-row").innerHTML = constructHexagonRow();

// Do this after document loads
$(document).ready(function(){
  console.log('jQuery loaded');
});
