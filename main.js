const textArea = document.querySelector('.conversion__textarea')
const btn = document.querySelector('.conversion__btn')
const textAreaResult = document.querySelector('.conversion__textarea-result')
const radioCase = document.querySelectorAll('.conversion__buttons-div')
const clearBtn = document.querySelector('.conversion__clear-btn')

const upVtn = document.querySelector('.conversion__up')
const lowVtn = document.querySelector('.conversion__low')


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

btn.addEventListener('click', (e) => {

})

clearBtn.addEventListener('click', () => {
  textAreaResult.value = ''
})


upVtn.addEventListener('click', () => {
  let val = textArea.value
  textArea.value = ''
  textAreaResult.append(val.toUpperCase())
})

lowVtn.addEventListener('click', () =>{
  let val = textArea.value
  textArea.value = ''
  textAreaResult.append(val.toLowerCase())
})

// function textUpper () {
//   let val = textArea.value
//   textArea.value = ''
//   textAreaResult.append(val.toUpperCase())
// }
// textUpper()

// function textLower () {
//   let val = textArea.value
//   textArea.value = ''
//   textAreaResult.append(val.toLowerCase())
// }
// textLower()






