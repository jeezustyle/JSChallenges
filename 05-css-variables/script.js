const inputs = document.querySelectorAll('.controls input')

function handleUpdate() {
  const suffix = this.dataset.sizing || ''
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  )
}

inputs.forEach((input) => {
  ;['mousemove', 'change'].forEach((method) => {
    input.addEventListener(method, handleUpdate)
  })
})
