function changeColour() {
  var button = document.getElementById('myButton'),
    colors = ['yellow', 'green', 'red'];
    button.onclick = function () {
    let  color = colors.shift();
    colors.push(color);
    button.style.backgroundColor = color;
};
