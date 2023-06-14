// capiturar o evento de submit do formulário, para não enviar:

// OBS.: Olhar o envio no console do navegador

const form = document.querySelector("#formulario");

form.addEventListener("submit", function (event) { // posso colocar e ou evento também é a mesma coisa
    event.preventDefault();
    const inputPeso = event.target.querySelector("#peso");  // pegando o input inteiro
    const inputAltura = event.target.querySelector("#altura"); // pegando o input inteiro

    const peso = Number(inputPeso.value);     // pegando apenas o valor (e realizando converção para Number)
    const altura = Number(inputAltura.value); // pegando apenas o valor (e realizando converção para Number)
    
    if (!peso) {
        setResultado("Peso inválido!", false);
        return;
    }

    if (!altura) {
        setResultado("Altura inválida!", false);
        return;
    }

    const imc = getImc(peso, altura); // essa função não existe, tive que criar abaixo
    const nivelImc = getNivelIMC(imc);

    const mensagem = `Seu IMC é: <b>${imc}</b> (${nivelImc}).`;

    setResultado(mensagem, true);

    // coloquei o RETURN acima, pois se aqui eu tivesse mais algum código não seria executado. É apenas um exemplo!
});

// criando a função:

function getNivelIMC(imc) {
    const nivel = ["Abaixo do peso", "Peso Normal", "Sobrepeso", "Obesidade grau 1", "Obesidade grau 2", "Obesidade grau 3"];

    if (imc >= 39.9) {
        return nivel[5];

    } if (imc >= 34.9) {
        return nivel[4];

    } if (imc >= 29.9) {
        return nivel[3];
        
    } if (imc >= 24.9) {
        return nivel[2]
        
    } if (imc >= 18.5) {
        return nivel[1];

    } if (imc < 18.5) {
        return nivel[0];
    }
}

// como eu estou usando o RETURN, não preciso colocar o ELSE ou ELSE IF, pois o returno já para ao achar a condição VERDADEIRA

// OBS: Poderia ter colocado apenas em um linha minhas condições acima, tirando as CHAVES, e ficariam:

/* 
if (imc >= 39.9) return nivel[5];
if (imc >= 34.9) return nivel[4];
if (imc >= 29.9) return nivel[3];
if (imc >= 24.9) return nivel[2]
if (imc >= 18.5) return nivel[1];
if (imc < 18.5) return nivel[0];

*/


function getImc (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2); // meu IMC apenas com duas casas decimais
}

function criaParagrafo () {
    const p = document.createElement("p");
    return p;
}

// selecionando minha div com ID="resultado", para mostrar o resultado nela
function setResultado(mensagem, isValid) {
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = "";
    
    const p = criaParagrafo();

    if (isValid) {
        p.classList.add("paragrafo-resultado");
    } else {
        p.classList.add("bad");
    }

    p.innerHTML = mensagem;
    resultado.appendChild(p);
}

