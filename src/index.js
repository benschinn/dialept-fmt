document.addEventListener("keydown", function(e) {
  const cmdOrCtrl = e.ctrlKey || e.metaKey

  if(cmdOrCtrl && e.keyCode == 13) {
    format()
  }
  if(cmdOrCtrl && e.keyCode == 222) {
    copyText()
  }
})

function format() {
  var inputVal = document.getElementById("input").value;
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
  const text = document.getElementById("output").innerHTML
  const temporaryInput = document.createElement('textarea'); 
  temporaryInput.value = text
  temporaryInput.setAttribute('readonly', '');
  temporaryInput.setAttribute('readonly', '');
  temporaryInput.style.position = 'absolute';                 
  temporaryInput.style.left = '-9999px';
  document.body.appendChild(temporaryInput); 
  temporaryInput.select()
  document.execCommand('copy'); 
  document.body.removeChild(temporaryInput); 
}
