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

  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  // 12-hour korar jonno
  h = h % 12;
  h = h === 0 ? 12 : h; // 0 hole 12 dekanur jonno

  hours.innerHTML = formatTime(h);
  minutes.innerHTML = formatTime(m);
  seconds.innerHTML = formatTime(s);
}

setInterval(watch, 1000);
