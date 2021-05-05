const password = document.getElementById('passGen')

//Tamanho deverá ser dinamico - Tamanho da senha
const digit = new Array(8)

//Função para senhas numéricas
for (let i=0; i < 8; i++){
    digit.push((Math.floor(Math.random() * 10)))
    password.innerHTML = digit.join(' ')
}

//Função para senhas alfabéticas
/*for (let i=0; i < 1; i++){
    digit.push(Math.random().toString(36).replace(/[^a-z]+/g, ''))
    password.innerHTML = digit.join(' ')
}*/

