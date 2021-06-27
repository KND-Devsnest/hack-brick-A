var player = {
  name: 'CoolDigger2608',
  gender: '👷‍♂️'
};
function toggleVisibility(elem1, elem2) {
  elem1.classList.toggle('hidden');
  elem2.classList.toggle('hidden');
}

function toggleVol() {
  let volOn = document.getElementById("volOn");
  let volOff = document.getElementById("volOff");
  toggleVisibility(volOn, volOff);
}

function selectGender(gender) {
  let manSelect = document.getElementById('manSelect');
  let womanSelect = document.getElementById('womanSelect');
  if(gender === 'female'){
    player.gender = '👷‍♂️';
    womanSelect.classList.add('selected');
    manSelect.classList.remove('selected');
  } else {
    player.gender = '👷‍♀️';
    manSelect.classList.add('selected');
    womanSelect.classList.remove('selected');
  }
}

function startGame() {
  player.name = document.getElementById('playerNameInput').value;
  document.getElementById('playerNameInput').value = "";
  document.querySelector('.content').style.display = "none";
  document.querySelector('#canvas-container').style.display = "block";
}