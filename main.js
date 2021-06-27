function toggleVisibility(elem1, elem2) {
  elem1.classList.toggle('hidden');
  elem2.classList.toggle('hidden');
}

function toggleVol() {
  let volOn = document.getElementById("volOn");
  let volOff = document.getElementById("volOff");
  toggleVisibility(volOn, volOff);
}

function toggleGenderSelect() {
  let manSelect = document.getElementById('manSelect');
  let womanSelect = document.getElementById('womanSelect');
  toggleVisibility(manSelect, womanSelect)
}