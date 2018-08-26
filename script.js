// creates the HTML & CSS for a single hexagon.
function createSingleHexagon(innerBoxWidth, elongationRatio, hexTopType, styles) {
  var hexWidth = innerBoxWidth;
  var hexHeight = (hexWidth * Math.sqrt(3)) / 2;
  console.log('hexHeight: '+hexHeight);
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
    if (rowAttributes.align == "center") {
      var centerAlignMargin = (window.innerWidth - totalRequestedWidth) / 2;
      console.log("The centerAlignMargin is: " + centerAlignMargin);
      $(".hex-row").css("margin-left", centerAlignMargin+"px").css("margin-right", centerAlignMargin+"px").css("width", totalRequestedWidth+"px");
    } else if (rowAttributes.align == "left" || rowAttributes.align == "right") {

    }
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
