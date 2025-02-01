let clickcounter = 0;
function changeColour() {
  console.log(document.getElementById('myButton').innerHTML);
    document.getElementById('myButton').innerHTML
      ++clickcounter; 
    if(clickcounter == 1) {
      document.getElementById('myButton').style.backgroundColor="yellow";
    } else if (clickcounter == 2) {
      document.getElementById('myButton').style.backgroundColor="green";
    } else {
      clickcounter = 0;
      document.getElementById('myButton').style.backgroundColor="red";
    }
}
