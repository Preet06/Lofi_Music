var x_1 = document.getElementById("audio_1");

function playAudio_1() {
  x_1.play();
  btn1.style.display = "none";
  btn2.style.display = "block";
  //bor.style.display = "block";
  document.getElementById("img_1").style.boxShadow = "15px 15px 15px";
}

function pauseAudio_1() {
  x_1.pause();
  btn2.style.display = "none";
  btn1.style.display = "block";
  //bor.style.display = "none";
  document.getElementById("img_1").style.boxShadow = "0 0 0";
}

function SetVolume_1(val) {
  var player = document.getElementById("audio_1");
  console.log("Before: " + player.volume);
  player.volume = val / 100;
  console.log("After: " + player.volume);
}

// second music
var x_2 = document.getElementById("audio_2");

function playAudio_2() {
  x_2.play();
  btn3.style.display = "none";
  btn4.style.display = "block";
  //bor.style.display = "block";
  document.getElementById("img_2").style.boxShadow = "15px 15px 15px";
}

function pauseAudio_2() {
  x_2.pause();
  btn4.style.display = "none";
  btn3.style.display = "block";
  document.getElementById("img_2").style.boxShadow = "0 0 0";
  //bor.style.display = "none";
}

function SetVolume_2(val) {
  var player = document.getElementById("audio_2");
  console.log("Before: " + player.volume);
  player.volume = val / 100;
  console.log("After: " + player.volume);
}

// third music
var x_3 = document.getElementById("audio_3");

function playAudio_3() {
  x_3.play();
  btn5.style.display = "none";
  btn6.style.display = "block";
  //bor.style.display = "block";
  document.getElementById("img_3").style.boxShadow = "15px 15px 15px";
}

function pauseAudio_3() {
  x_3.pause();
  btn6.style.display = "none";
  btn5.style.display = "block";
  //bor.style.display = "none";
  document.getElementById("img_3").style.boxShadow = "0 0 0";
}

function SetVolume_3(val) {
  var player = document.getElementById("audio_3");
  console.log("Before: " + player.volume);
  player.volume = val / 100;
  console.log("After: " + player.volume);
}

// four music
var x_4 = document.getElementById("audio_4");

function playAudio_4() {
  x_4.play();
  btn7.style.display = "none";
  btn8.style.display = "block";
  //bor.style.display = "block";
  document.getElementById("img_4").style.boxShadow = "15px 15px 15px";
}

function pauseAudio_4() {
  x_4.pause();
  btn8.style.display = "none";
  btn7.style.display = "block";
  document.getElementById("img_4").style.boxShadow = "0 0 0";
  //bor.style.display = "none";
}

function SetVolume_4(val) {
  var player = document.getElementById("audio_4");
  console.log("Before: " + player.volume);
  player.volume = val / 100;
  console.log("After: " + player.volume);
}

// five music
var x_5 = document.getElementById("audio_5");

function playAudio_5() {
  x_5.play();
  btn9.style.display = "none";
  btn10.style.display = "block";
  document.getElementById("img_5").style.boxShadow = "15px 15px 15px";
  //bor.style.display = "block";
}

function pauseAudio_5() {
  x_5.pause();
  btn10.style.display = "none";
  btn9.style.display = "block";
  document.getElementById("img_5").style.boxShadow = "0 0 0";
  //bor.style.display = "none";
}

function SetVolume_5(val) {
  var player = document.getElementById("audio_5");
  console.log("Before: " + player.volume);
  player.volume = val / 100;
  console.log("After: " + player.volume);
}

// six music
var x_6 = document.getElementById("audio_6");

function playAudio_6() {
  x_6.play();
  btn11.style.display = "none";
  btn12.style.display = "block";
  document.getElementById("img_6").style.boxShadow = "15px 15px 15px";
  //bor.style.display = "block";
}

function pauseAudio_6() {
  x_6.pause();
  btn12.style.display = "none";
  btn11.style.display = "block";
  document.getElementById("img_6").style.boxShadow = "0 0 0";
  //bor.style.display = "none";
}

function SetVolume_6(val) {
  var player = document.getElementById("audio_6");
  console.log("Before: " + player.volume);
  player.volume = val / 100;
  console.log("After: " + player.volume);
}
