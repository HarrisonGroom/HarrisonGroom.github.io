function change() // no ';' here
{
    var elem = document.getElementById("myButton1");
    if (elem.value=="hello") elem.value = "goodbye";
    else elem.value = "hello";
}




//button 3
function myFunction() {
    var x = document.getElementById("myInput");
    document.getElementById("demo").innerHTML = "searching for: " + x.value;
}