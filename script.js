function createSingleHexagon(hexAttr, positionInRow) {

}
function constructHexagonRow(rowAttributes) {
  var singleHexWidth = rowAttributes.singleWidth;
  var hexCount = rowAttributes.hexCount;
  var markupToInsert = '';
  var hexRows = document.getElementsByClassName("hex-row");
  var totalRequestedWidth = hexCount * singleWidth;
  if (totalRequestedWidth < window.innerWidth;) {
    console.log("this is a reasonable request");
  } else {
    console.log("If I render this, you won't be able to see the whole thing!");
  }
  //  return markupToInsert;
}
/*
Example: constructHexagonRow({
  singleWidth: 200
  hexCount: 5
  align: center
});



// Do this after document loads
$(document).ready(function(){
  console.log('jQuery loaded');
});
