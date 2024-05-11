const form1 = document.getElementById('form1')

// elemanların doğruluğunu izle
form1.watchValidate()

form1.addEventListener('submit', function (e) {
  e.preventDefault()
  //tüm elemanları kontrol et
  this.validate()

  //formu gönder
  this.sendIfIsValid()
})
