// let hours=document.querySelector(".hours")
// let minutes=document.querySelector(".minutes")
// let seconds=document.querySelector(".seconds")


// function watch(){
// let date=new Date()

// hours.innerHTML=(date.getHours())
// minutes.innerHTML=(date.getMinutes())
// seconds.innerHTML=(date.getSeconds())

// }

// setInterval(() => {
//     watch()
// },1000);


let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");

function formatTime(value) {
  return value < 10 ? "0" + value : value;
}

function watch() {
  let date = new Date();

  let hformet = date.getHours();
  let mformet = date.getMinutes();
  let sformet = date.getSeconds();

  // 12-hour korar jonno
  hformet = hformet % 12;
  hformet = hformet === 0 ? 12 : hformet; // 0 hole 12 dekanur jonno

  hours.innerHTML = formatTime(hformet);
  minutes.innerHTML = formatTime(mformet);
  seconds.innerHTML = formatTime(sformet);
}

setInterval(watch, 1000);
