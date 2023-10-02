function insert(num) {


    var numero = document.querySelector("p#resultado").innerHTML // armazenas o valor que sera inserido 
    document.querySelector("p#resultado").innerHTML = numero + num // aqui estamos concatenando o valor existente com o novo valor
}

function clean() {
    document.querySelector("p#resultado").innerHTML = ""
}

function backspace() {
    document.querySelector("p#resultado").innerHTML
    document.querySelector("p#resultado").innerHTML = resultado.substring(0, resultado.lenght - 1) //aqui estou utulizando o metodo substring para pegar uma parte do conteugo html e apagar 1 cararcter apartir da posição 0
}

    function calcular() {

        if (resultado) { //se tiver conteudo em resultado 

            document.querySelector("p#resultado").innerHTML = eval(resultado) // eval executa a expressão contida no campo resultado 
        } else {
            document.querySelector("p#resultado").innerHTML = "tente novamente"
        }

    }