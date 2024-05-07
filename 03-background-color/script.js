const inputs = document.querySelectorAll('input')

const colorBodyChange = () => {
  let rgb = [...inputs].reduce((acc, curr) => {
    return [...acc, localStorage.getItem(curr.id) || curr.value]
  }, [])
  document.body.style.backgroundColor = `rgb(${rgb.join(',')})`
}

inputs.forEach((input) => {
  input.value = localStorage.getItem(input.id) || input.value
  input.nextElementSibling.innerText = input.value
  input.addEventListener('input', () => {
    localStorage.setItem(input.id, input.value)
    input.nextElementSibling.innerText = input.value
    colorBodyChange()
  })
})

colorBodyChange()
