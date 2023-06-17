    function fazerCalculo() {
        var altura = document.getElementById("altura").value;
        var peso = document.getElementById("peso").value;

        var imc = peso / (altura * altura);
        var resultado = document.getElementById("resultado");

        if (isNaN(imc)) {
            resultado.innerHTML = "Preencha os valores corretamente.";
        } else {
            resultado.innerHTML = "Seu IMC é: " + imc.toFixed(2);
        }
    }
