const btn = document.querySelector('#btn-1')
var boxa = document.getElementById('grid-container').querySelectorAll('.grid-item')
var boxb = document.getElementById('grid-container-2').querySelectorAll('.grid-item')
var container = document.getElementById('grid-container-2')
var winn = document.querySelector('.win')
var scoree = document.querySelector('.score')
var ccc = document.querySelector('.cnt')
var counter = 0
boxa = Array.from(boxa);
boxb = Array.from(boxb);
let running = true
function getRandomColor() {
   let colours = ["#E5E28B", "#A7DB8C", "#B4A7EB", "#F3A5BC", "#A0D8E9", "#ffffff", "#696969"]
  var clr
  var c = [0,0,0,0,0,0,0]
  var fl = [4,4,4,4,4,4,1]
  for(let i = 0; i < boxb.length; i++) {
  running = true
  while (running){
    var x = Math.floor(Math.random() * 7)
    if(c[x] < fl[x]) {
      clr = colours[x]
      c[x]++
   boxb[i].style.backgroundColor = clr
      running = false
      }
    }
  }
  c = [0,0,0,0,0,0]
  fl = [4,4,4,4,4,4]
  for(let i = 0; i < boxa.length; i++) {
    running = true
  while (running){
    var x = Math.floor(Math.random() * 6)
    if(c[x] < fl[x]) {
      clr = colours[x]
      c[x]++
   boxa[i].style.backgroundColor = clr
   running = false
      }
    }
  }
}
let flag = false

function switchh(divObj, v)
{
  v.style.background = window.getComputedStyle(divObj, null).getPropertyValue("background-color")
  divObj.style.background = "rgb(105, 105, 105)"
  counter++
  ccc.innerHTML = counter
  flag = true
  win(flag)
}

function checkColr(divObj, a)
{
  if(window.getComputedStyle(a, null).getPropertyValue("background-color") === "rgb(105, 105, 105)")
  {
    switchh(divObj, a)
  }
}

function changeColr(divObj, x)
{
  if(window.getComputedStyle(divObj, null).getPropertyValue("background-color") !== "rgb(105, 105, 105)")
  {
    if(x===6||x===7||x===8||x===11||x===12||x===13||x===16||x===17||x===18)
    {
      checkColr(divObj,boxb[x-1])
      checkColr(divObj,boxb[x+1])
      checkColr(divObj,boxb[x+5])
      checkColr(divObj,boxb[x-5])
    }
    else if(x===1||x===2||x===3)
    {
      checkColr(divObj,boxb[x-1])
      checkColr(divObj,boxb[x+1])
      checkColr(divObj,boxb[x+5])
    }
    else if(x===21||x===22||x===23)
    {
      checkColr(divObj,boxb[x-1])
      checkColr(divObj,boxb[x+1])
      checkColr(divObj,boxb[x-5])
    }
    else if(x===5||x===10||x===15)
    {
      checkColr(divObj,boxb[x+1])
      checkColr(divObj,boxb[x+5])
      checkColr(divObj,boxb[x-5])
    }
    else if(x===9||x===14||x===19)
    {
      checkColr(divObj,boxb[x-1])
      checkColr(divObj,boxb[x+5])
      checkColr(divObj,boxb[x-5])
    }
    else if(x===0)
    {
      checkColr(divObj,boxb[x+1])
      checkColr(divObj,boxb[x+5])
    }
    else if(x===4)
    {
      checkColr(divObj,boxb[x-1])
      checkColr(divObj,boxb[x+5])
    }
    else if(x===20)
    {
      checkColr(divObj,boxb[x+1])
      checkColr(divObj,boxb[x-5])
    }
    else if(x===24)
    {
      checkColr(divObj,boxb[x-1])
      checkColr(divObj,boxb[x-5])
    }
  }
}
var score = 70000
function win(flag)
{
  if(flag===true)
  {
    if(window.getComputedStyle(boxa[0], null).getPropertyValue("background-color")===window.getComputedStyle(boxb[6], null).getPropertyValue("background-color") && window.getComputedStyle(boxa[1], null).getPropertyValue("background-color")===window.getComputedStyle(boxb[7], null).getPropertyValue("background-color") && window.getComputedStyle(boxa[2], null).getPropertyValue("background-color")===window.getComputedStyle(boxb[8], null).getPropertyValue("background-color") && window.getComputedStyle(boxa[3], null).getPropertyValue("background-color")===window.getComputedStyle(boxb[11], null).getPropertyValue("background-color") && window.getComputedStyle(boxa[4], null).getPropertyValue("background-color")===window.getComputedStyle(boxb[12], null).getPropertyValue("background-color") && window.getComputedStyle(boxa[5], null).getPropertyValue("background-color")===window.getComputedStyle(boxb[13], null).getPropertyValue("background-color") && window.getComputedStyle(boxa[6], null).getPropertyValue("background-color")===window.getComputedStyle(boxb[16], null).getPropertyValue("background-color") && window.getComputedStyle(boxa[7], null).getPropertyValue("background-color")===window.getComputedStyle(boxb[17], null).getPropertyValue("background-color") && window.getComputedStyle(boxa[8], null).getPropertyValue("background-color")===window.getComputedStyle(boxb[18], null).getPropertyValue("background-color"))
    {
      winn.innerHTML = "WIN!"
      clearInterval(myTimer)
      score = score - (counter*100)
      if(counter >= 500)
      score = 10000
      if(minutesC === 0)
      score = score + 10000
      else if(minutesC === 1)
      score = score + 8000
      else if(minutesC === 2)
      score = score + 6000
      else if(minutesC === 3)
      score = score + 4000
      scoree.innerHTML = "Score = " + score.toString(10)
    }
    flag = false
  }
}

var mins
var sec
var time
function timeSet()
{
  mins=0
  sec=0
  time = 0
  minutesC = document.querySelector('.minutesC')
  secondsC = document.querySelector('.secondsC')
  //clearInterval(updateCounter,1000)
  myTimer = setInterval(updateCounter, 1000)
}
function updateCounter()
{
    time++
    mins = Math.floor(time/60);
    sec = time % 60
    sec = sec < 10 ? "0" + sec : sec;
    mins = mins < 10 ? "0" + mins : mins;
    minutesC.innerHTML = "Timer: " + mins
    secondsC.innerHTML = sec
 }

function reset()
{
  ccc.innerHTML = 0
  if (winn.innerHTML === "WIN!")
  {
    winn.innerHTML = ""
    scoree.innerHTML = ""
  }
  clearInterval(myTimer)
  minutesC.innerHTML = "Timer: 00"
  secondsC.innerHTML = "00"
  timeSet()
}
