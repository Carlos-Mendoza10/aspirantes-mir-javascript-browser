const input = document.querySelector('#texto');
        const resultado = document.querySelector('#resultado');
        const boton = document.querySelector('.btn');
        const resultadoboton = document.querySelector('#resultadoMayusculas');
        // tambien se pude usar la funcion getElementById() 
        input.addEventListener('input', function() {
            const texto = input.value.toUpperCase();
            resultado.textContent = texto;
        });
        boton.addEventListener('click', function() {
            const texto2 = input.value.toUpperCase();
            resultadoboton.textContent = texto2;
        });