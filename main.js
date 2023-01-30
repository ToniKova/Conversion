const textArea = document.querySelector('.conversion__textarea')
const btn = document.querySelector('.conversion__btn')
const textAreaResult = document.querySelector('.conversion__textarea-result')
const radioCase = document.querySelectorAll('.conversion__buttons-div')
const clearBtn = document.querySelector('.conversion__clear-btn')


const btnUp = document.querySelector('#up')
const btnLow = document.querySelector('#low')

// btnUp.addEventListener('click', () => {
//   btnUp.classList.toggle('active')
//   if (btnLow.classList.contains('active')) {
//     btnLow.classList.remove('active')
//   }
// })
// btnLow.addEventListener('click', () => {
//   btnLow.classList.toggle('active')
//   if (btnUp.classList.contains('active')) {
//     btnUp.classList.remove('active')
//   }
// })
 
function addClass () {
  radioCase.forEach(item => {
    item.addEventListener('click', () => {
      
      radioCase.forEach(item => {
        item.classList.remove('active')
      })

      item.classList.add('active')
    })
  })
}
addClass()

/*================================*/

btn.addEventListener('click', () => {
  if (btnUp.classList.contains('active')) {
    textUpper()
  } else if (btnLow.classList.contains('active')){
    textLower()
  } else {
    
  }
})

clearBtn.addEventListener('click', () => {
  textAreaResult.textContent = ''
})

function textUpper () {
  let val = textArea.value
  textArea.value = ''
  textAreaResult.append(val.toUpperCase())
}
// textUpper()

function textLower () {
  let val = textArea.value
  textArea.value = ''
  textAreaResult.append(val.toLowerCase())
}
// textLower()






