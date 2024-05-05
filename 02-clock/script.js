const secondHand = document.querySelector('.second-hand')
const minsHand = document.querySelector('.min-hand')
const hoursHand = document.querySelector('.hour-hand')
const hands = document.querySelectorAll('.hand')

function setDate() {
  const now = new Date()
  const seconds = now.getSeconds()
  const secondsDegrees = (seconds / 60) * 360 + 90
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`
  console.log(seconds)
  const mins = now.getMinutes()
  const minsDegrees = (mins / 60) * 360 + 90
  minsHand.style.transform = `rotate(${minsDegrees}deg)`
  const hours = now.getHours()
  const hoursDegrees = (hours / 12) * 360 + 90
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`
  const resetClock = () => {
    if (seconds == 0) {
      ;[...hands].map((hand) => {
        console.log(hand)
        hand.style.transition = 'none'
      })
    }
  }
  resetClock()
}

setInterval(setDate, 1000)
