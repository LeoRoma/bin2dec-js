document.addEventListener("DOMContentLoaded", function(event) {
  let binaryconverter = new BinaryConverter();

  document.getElementById("submit").addEventListener('click', function(event) {
    event.preventDefault();
    // get text input, create note and add to list
    var binary = document.getElementById("binary")
    binary = binary.value;
    
    binaryconverter.input(binary);

    // create new `li` HTMLElement and insert
    // innerHTML with note content and id
    // if you want a link instead of heading, change h2 to <a>
    var li = document.createElement("li");
    li.innerHTML = "<h2>" + binaryconverter.decimal + "</h2>";

    var ul = document.getElement("result-decimal");
    ul.appendChild(li)
    
   

  });
});