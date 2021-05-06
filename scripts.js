const password = document.getElementById('passGen')
const size6 = document.getElementById('6')
const size8 = document.getElementById('8')
const size10 = document.getElementById('10')
const typeNum = document.getElementById('numeric')
const typeAlfb = document.getElementById('alphabetic')
const typeAlfn = document.getElementById('alpha-numeric')

typeNum.addEventListener('click', e => {
    const digit = new Array(6)
    for (let i = 0; i < 6; i++) {
        digit.push((Math.floor(Math.random() * 10)))
        password.innerHTML = digit.join(' ')
    }
})

typeAlfb.addEventListener('click', e => {
    const digit = new Array(6)
    for (let i = 0; i < 1; i++) {
        digit.push(Math.random().toString(36).replace(/[^a-z]+/g, ''))
        password.innerHTML = digit.join(' ')
    }
})

typeAlfn.addEventListener('click', e => {
    const digit = new Array(6)
    for (let i = 0; i < 1; i++) {
        digit.push(Math.random().toString(36).replace(/[^A-Za-z0-9]+/g, ''))
        password.innerHTML = digit.join(' ')
    }
})
