//shortkeys
document.addEventListener("keydown", function(e) {
  const cmdOrCtrl = e.ctrlKey || e.metaKey
  
  //ctrl + enter
  if(cmdOrCtrl && e.keyCode == 13) {
    format()
  }
  //ctrl + '
  if(cmdOrCtrl && e.keyCode == 222) {
    copyText()
  }
})

function format() {
  let inputVal = document.getElementById("input").value;

  inputVal = inputVal.replace(/aq/g,"â");
  inputVal = inputVal.replace(/Aq/g,"Â");
  inputVal = inputVal.replace(/eq/g,"ê");
  inputVal = inputVal.replace(/Eq/g,"Ê");
  inputVal = inputVal.replace(/iq/g,"î");
  inputVal = inputVal.replace(/Iq/g,"Î");
  inputVal = inputVal.replace(/uq/g,"û");
  inputVal = inputVal.replace(/Uq/g,"Û");
  inputVal = inputVal.replace(/oq/g,"ô");
  inputVal = inputVal.replace(/Oq/g,"Ô");
  inputVal = inputVal.replace(/j/g,"·");

  document.getElementById("output").innerHTML = inputVal
}

function copyText() {
  //create temporary textarea element
  const text = document.getElementById("output").innerHTML
  const temporaryInput = document.createElement('textarea'); 
  temporaryInput.value = text

  //hide this temporary element from user
  temporaryInput.setAttribute('readonly', '');
  temporaryInput.style.position = 'absolute';                 
  temporaryInput.style.left = '-9999px';
  document.body.appendChild(temporaryInput); 

  //select and copy
  temporaryInput.select()
  document.execCommand('copy'); 

  //cleanup
  document.body.removeChild(temporaryInput); 
}
