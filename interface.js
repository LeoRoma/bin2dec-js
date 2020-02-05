document.addEventListener("DOMContentLoaded", function (event) {
  let binaryconverter = new BinaryConverter();

  document.getElementById("submit").addEventListener('click', function (event) {
    event.preventDefault();
    // get text input, create note and add to list
    let getBinary = document.getElementById("binary")
    let binary = getBinary.value;


    // binaryconverter.input(binary);
    binaryconverter.convert(binary);
    console.log(binaryconverter.decimal)

    // // create new `li` HTMLElement and insert
    // // innerHTML with note content and id
    // // if you want a link instead of heading, change h2 to <a>


    document.getElementById("myText").innerHTML = binaryconverter.decimal;




  });
});