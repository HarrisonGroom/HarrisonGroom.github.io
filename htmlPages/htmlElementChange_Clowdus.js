function changeHtmlElement() {
  var currentResume = document.getElementById('elementToChange');
  if (currentResume.innerHTML.match("<p>[My resume here.]</p>")){
    currentResume.innerHTML = "<p>[My updated resume here.]</p>";
      currentResume/*.innerHTML*/.style.color = "red";
  }
