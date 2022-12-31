// VARIAVEIS
const buttonPlay = document.querySelector(".play")
const buttonPause = document.querySelector(".pause")
const buttonSetTime = document.querySelector(".set-time")
const buttonStop = document.querySelector(".stop")
const buttonPlus = document.querySelector(".plus")
const buttonMinus = document.querySelector(".minus")

const buttonForest = document.querySelector(".forest")
const buttonRain = document.querySelector(".rain")
const buttonCoffeeShop = document.querySelector(".coffee-shop")
const buttonFireplace = document.querySelector(".fireplace")

const buttonForestSelected = document.querySelector(".forest-selected")
const buttonRainSelected = document.querySelector(".rain-selected")
const buttonCoffeeShopSelected = document.querySelector(".coffee-shop-selected")
const buttonFireplaceSelected = document.querySelector(".fireplace-selected")

const buttonSun = document.querySelector(".sun")
const buttonMoon = document.querySelector(".moon")

const body = document.querySelector("body")

const displayTimer = document.querySelector("#timer")

const forestAudio = new Audio("./Sounds/Forest.mp3")
const rainAudio = new Audio("./Sounds/Rain.mp3")
const coffeeShopAudio = new Audio("/Sounds/CoffeeShop.mp3")
const fireplaceAudio = new Audio("./Sounds/Fireplace.mp3")
const buttonPressAudio = new Audio("./Sounds/ButtonPress.mp3")
const KichenTimerAudio = new Audio("./Sounds/KichenTimer.mp3")

forestAudio.loop = true
rainAudio.loop = true
coffeeShopAudio.loop = true
fireplaceAudio.loop = true

let timerID
let timeCount = 0

// FUNÇÕES
function updateScreenTime() {
  displayTimer.textContent = getTimeString()
}

function countdown() {
  timerID = setTimeout(function(){
    if (timeCount > 0) {
      --timeCount
    }
    else {
      resetScreen()
      KichenTimerAudio.play()
      return
    }
    updateScreenTime()
    countdown()

  }, 1000)
}

function getTimeString() {
  minutes = String(Math.floor(timeCount / 60)).padStart(2, "0")
  secounds = String(timeCount % 60).padStart(2, "0")
  return `${String(minutes)}:${String(secounds)}`
}

function resetScreen () {
  buttonStop.classList.add("hide")
  buttonSetTime.classList.remove("hide")
  buttonPause.classList.add("hide")
  buttonPlay.classList.remove("hide")
}

function clickPlay() {
  buttonPressAudio.play()
  countdown()
  buttonPlay.classList.add("hide")
  buttonPause.classList.remove("hide")
  buttonSetTime.classList.add("hide")
  buttonStop.classList.remove("hide")
  updateScreenTime()
}

function clickPause() {
  buttonPressAudio.play()
  buttonPause.classList.add("hide")
  buttonPlay.classList.remove("hide")
  clearTimeout(timerID) // Interrompe o time out
  updateScreenTime()
}

function verifyMinutes(minutes) {
  minutes = Number(minutes);
  if (minutes) {
    minutes = Math.floor(minutes)

    if (minutes > 99) {
      minutes = 99
    }

    if (minutes < 0) {
      minutes = 0
    }
  }
  else {minutes = 0}

  return minutes
}

function clickSetTime() {
  buttonPressAudio.play()
  minutes = prompt('Timer de quantos minutos?')
  minutes = verifyMinutes(minutes)
  timeCount = 60 * minutes
  displayTimer.textContent = getTimeString()
}

function clickStop() {
  buttonPressAudio.play()
  timeCount = 0
  updateScreenTime()
  resetScreen()
  clearTimeout(timerID) // Interrompe o time out
}

function clickPlus() {
  buttonPressAudio.play()
  timeCount += 300
  updateScreenTime()
}

function clickMinus() {
  buttonPressAudio.play()
  timeCount -= 300

  if (timeCount < 0) {
    timeCount = 0
  }

  updateScreenTime()
}

function stopAllMusic() {
  forestAudio.pause()
  rainAudio.pause()
  coffeeShopAudio.pause()
  fireplaceAudio.pause()

  forestAudio.currentTime = 0
  rainAudio.currentTime = 0
  coffeeShopAudio.currentTime = 0
  fireplaceAudio.currentTime = 0
}

function resetMusicButtons() {
  buttonForest.classList.remove("hide")
  buttonForestSelected.classList.add("hide")
  buttonRain.classList.remove("hide")
  buttonRainSelected.classList.add("hide")
  buttonCoffeeShop.classList.remove("hide")
  buttonCoffeeShopSelected.classList.add("hide")
  buttonFireplace.classList.remove("hide")
  buttonFireplaceSelected.classList.add("hide")
}

function resetRightWrapper() {
  buttonPressAudio.play()
  resetMusicButtons()
  stopAllMusic()
}

function clickForest() {
  resetRightWrapper()
  forestAudio.play()
  buttonPressAudio.volume = 0.5
  buttonForest.classList.add("hide")
  buttonForestSelected.classList.remove("hide")
}

function clickRain() {
  resetRightWrapper()
  rainAudio.play()
  buttonPressAudio.volume = 0.5
  buttonRain.classList.add("hide")
  buttonRainSelected.classList.remove("hide")
}

function clickCoffeeShop() {
  resetRightWrapper()
  coffeeShopAudio.play()
  buttonPressAudio.volume = 0.5
  buttonCoffeeShop.classList.add("hide")
  buttonCoffeeShopSelected.classList.remove("hide")
}

function clickFireplace() {
  resetRightWrapper()
  fireplaceAudio.play()
  buttonPressAudio.volume = 0.5
  buttonFireplace.classList.add("hide")
  buttonFireplaceSelected.classList.remove("hide")
}

function clickForestSelected() {
  resetRightWrapper()
}

function clickRainSelected() {
  resetRightWrapper()
}

function clickCoffeeShopSelected() {
  resetRightWrapper()
}

function clickFireplaceSelected() {
  resetRightWrapper()
}

function clickSun() {
  body.classList.add("dark")
  buttonSun.classList.add("hide")
  buttonMoon.classList.remove("hide")
}

function clickMoon() {
  body.classList.remove("dark")
  buttonMoon.classList.add("hide")
  buttonSun.classList.remove("hide")
}

// EVENTOS
buttonPlay.addEventListener('click', clickPlay)
buttonPause.addEventListener('click', clickPause)
buttonSetTime.addEventListener('click', clickSetTime)
buttonStop.addEventListener('click', clickStop)
buttonPlus.addEventListener('click', clickPlus)
buttonMinus.addEventListener('click', clickMinus)

buttonForest.addEventListener('click', clickForest)
buttonRain.addEventListener('click', clickRain)
buttonCoffeeShop.addEventListener('click', clickCoffeeShop)
buttonFireplace.addEventListener('click', clickFireplace)

buttonForestSelected.addEventListener('click', clickForestSelected)
buttonRainSelected.addEventListener('click', clickForestSelected)
buttonCoffeeShopSelected.addEventListener('click', clickForestSelected)
buttonFireplaceSelected.addEventListener('click', clickForestSelected)

buttonSun.addEventListener('click', clickSun)
buttonMoon.addEventListener('click', clickMoon)