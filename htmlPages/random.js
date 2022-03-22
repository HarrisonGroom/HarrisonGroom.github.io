function change() // no ';' here
{
    var elem = document.getElementById("myButton1");
    if (elem.value=="hello") elem.value = "goodbye";
    else elem.value = "hello";
}