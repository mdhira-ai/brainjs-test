import { train } from "./training"


let btn = document.getElementById('run')

btn.addEventListener('click', () => {
  let input = document.getElementById('input')


  train(input.value)

})