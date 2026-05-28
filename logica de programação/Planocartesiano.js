const form = document.querySelector('form');
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            var x = parseFloat(document.getElementById('x').value);
            var y = parseFloat(document.getElementById('y').value);
            var quadrante = "";

            if (isNaN(x) || isNaN(y)) {
                alert("Por favor, insira valores numéricos válidos para X e Y.");
                return;
        } else if (x > 0 && y > 0) {
                quadrante = "Primeiro quadrante";
            } else if (x < 0 && y > 0) {
                quadrante = "Segundo quadrante";
            } else if (x < 0 && y < 0) {
                quadrante = "Terceiro quadrante";
            } else if (x > 0 && y < 0) {
                quadrante = "Quarto quadrante";
            } else if (x === 0 && y === 0) {
                quadrante = "Ponto origem";
            } else if (x === 0) {
                quadrante = "Ponto no eixo Y";
            } else if (y === 0) {
                quadrante = "Ponto no eixo X";
            } else {
                quadrante = "Ponto desconhecido...? que?";
            }
            alert("O ponto (" + x + ", " + y + ") está no " + quadrante);
        });