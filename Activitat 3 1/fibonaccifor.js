 /**
     * Funció que mostra per pantalla els nombres de Fibonacci
     * @params numero - Tiene que recibir el numero de sucesiones
     * @return array - lista de los numeros
     */

    
    function fibonacci(numero)
    {
        let numeros=[0,1];
        for (let i = 2; i < numero; i++) {
            numeros[i] = numeros[i - 2] + numeros[i - 1];
        }
        return numeros;
    }
 
    // Executem la funció passant-li com a paràmetre el número 

    document.write(fibonacci(60)); // 0,1,1,2,3,5,8,... fins 60 nombres
 