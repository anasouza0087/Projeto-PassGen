const password = document.getElementById('passGen')
const size6 = document.getElementById('6')
const size8 = document.getElementById('8')
const size10 = document.getElementById('10')
const typeNum = document.getElementById('numeric')
const typeAlfb = document.getElementById('alphabetic')
const typeAlfn = document.getElementById('alpha-numeric')
const btnGerarSenha = document.getElementById('gerarSenha')
const reset = document.getElementById('apagar')

//Senha tamanho 6
size6.addEventListener('click', e => {
    typeNum.addEventListener('click', e => {
        const digit = new Array(6)
        for (let i = 0; i < 6; i++) {
            digit.push((Math.floor(Math.random() * 10)))
            btnGerarSenha.addEventListener('click', e => {
                password.innerHTML = digit.join(' ')
            })
        }
    })

    typeAlfb.addEventListener('click', e => {
        const digit = 'abcdefghijqlmnopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVXZ'
        let randomDigits = ''
        for (let i = 0; i < 6; i++) {
            randomDigits += digit.charAt(Math.floor(Math.random() * digit.length))

            btnGerarSenha.addEventListener('click', e => {
                password.innerHTML = randomDigits
            })
        }
    })

    typeAlfn.addEventListener('click', e => {
        const digit = 'abcdefghijqlmnopqrstuvxyz123456789ABCDEFGHIJKLMNOPQRSTUVXZ'
        let randomDigits = ''
        for (let i = 0; i < 6; i++) {
            randomDigits += digit.charAt(Math.floor(Math.random() * digit.length))

            btnGerarSenha.addEventListener('click', e => {
                password.innerHTML = randomDigits
            })
        }
    })
})

//Senha tamanho 8
size8.addEventListener('click', e => {
    typeNum.addEventListener('click', e => {
        const digit = new Array(8)
        for (let i = 0; i < 8; i++) {
            digit.push((Math.floor(Math.random() * 10)))
            btnGerarSenha.addEventListener('click', e => {
                password.innerHTML = digit.join(' ')
            })
        }
    })

    typeAlfb.addEventListener('click', e => {
        const digit = 'abcdefghijqlmnopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVXZ'
        let randomDigits = ''
        for (let i = 0; i < 8; i++) {
            randomDigits += digit.charAt(Math.floor(Math.random() * digit.length))

            btnGerarSenha.addEventListener('click', e => {
                password.innerHTML = randomDigits
            })
        }
    })

    typeAlfn.addEventListener('click', e => {
        const digit = 'abcdefghijqlmnopqrstuvxyz123456789ABCDEFGHIJKLMNOPQRSTUVXZ'
        let randomDigits = ''
        for (let i = 0; i < 8; i++) {
            randomDigits += digit.charAt(Math.floor(Math.random() * digit.length))
            btnGerarSenha.addEventListener('click', e => {
                password.innerHTML = randomDigits
            })
        }
    })
})

//Senha tamanho 10
size10.addEventListener('click', e => {
    typeNum.addEventListener('click', e => {
        const digit = new Array(10)
        for (let i = 0; i < 10; i++) {
            digit.push((Math.floor(Math.random() * 10)))
            btnGerarSenha.addEventListener('click', e => {
                password.innerHTML = digit.join(' ')
            })
        }
    })

    typeAlfb.addEventListener('click', e => {
        const digit = 'abcdefghijqlmnopqrstuvxyzABCDEFGHIJKLMNOPQRSTUVXZ'
        let randomDigits = ''
        for (let i = 0; i < 10; i++) {
            randomDigits += digit.charAt(Math.floor(Math.random() * digit.length))
            btnGerarSenha.addEventListener('click', e => {
                password.innerHTML = randomDigits
            })
        }
    })

    typeAlfn.addEventListener('click', e => {
        const digit = 'abcdefghijqlmnopqrstuvxyz123456789ABCDEFGHIJKLMNOPQRSTUVXZ'
        let randomDigits = ''
        for (let i = 0; i < 10; i++) {
            randomDigits += digit.charAt(Math.floor(Math.random() * digit.length))

            btnGerarSenha.addEventListener('click', e => {
                password.innerHTML = randomDigits
            })
        }
    })
})

//Reset de dados
reset.addEventListener('click', e => {
    location.reload()
})
