function converter(moeda) {

    const valorReais = parseFloat(document.getElementById('valorReais').value);

    const resultadoDiv = document.getElementById('resultado');

    if (isNaN(valorReais) || valorReais <= 0){
        resultadoDiv.innerText = "Por favor, digite valores válidos e REAIS.";
        resultadoDiv.style.display = "block";
        return;
    }

    const taxaDolar = {
        'USD': 0.19
    };

    const valorConvertido = (valorReais * taxaDolar[moeda]).toFixed(2);
    resultadoDiv.innerText = `O valor convertido é de ${valorConvertido} ${moeda}.`;
    resultadoDiv.style.display = "block";

}