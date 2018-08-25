// creates the HTML & CSS for a single hexagon.
function createSingleHexagon(hexAttr, positionInRow) {

}

// responsible for assembling html output and assigning styles
function constructHexagonRow(rowAttributes) {
  var singleHexWidth = rowAttributes.singleWidth;
  var hexCount = rowAttributes.hexCount;
  var markupToInsert = '';
  var hexRows = document.getElementsByClassName("hex-row");
  var totalRequestedWidth = hexCount * singleHexWidth;
  console.log("the totalRequestedWidth is: " + totalRequestedWidth);
  if (totalRequestedWidth < window.innerWidth) {
    console.log("this is a reasonable request");
  } else {
    console.log("If I render this, you won't be able to see the whole thing!");
  }
  //  return markupToInsert;
} // constructHexagonRow()

// Example: constructHexagonRow({
//   singleWidth: 200
//   hexCount: 5
//   align: center
// });



// Do this after document loads
$(document).ready(function(){
  console.log('jQuery loaded');
});
