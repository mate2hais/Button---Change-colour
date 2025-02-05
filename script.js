function changeColour() {
  let colors = ['yellow', 'green', 'red'];
  document.getElementById('myButton').onclick = function() {
    let color = colors.shift();
    colors.push(color);
    document.getElementById('myButton').style.backgroundColor = color;
  }
}
