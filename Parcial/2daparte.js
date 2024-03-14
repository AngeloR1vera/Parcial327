function numAmigos(num1, num2) {
    function sumaDivisores(numero) {
        let suma = 0;
        for (let i = 1; i <= numero / 2; i++) {
            if (numero % i === 0) {
                suma += i;
            }
        }
        return suma;
    }

    return sumaDivisores(num1) === num2 && sumaDivisores(num2) === num1;
}

const num1 = parseInt(prompt("Ingrese el primer número:"));
const num2 = parseInt(prompt("Ingrese el segundo número:"));

if (isNaN(num1) || isNaN(num2)) {
    alert("Por favor, ingrese números válidos.");
} else {
    if (numAmigos(num1, num2)) {
        alert(`${num1} y ${num2} son números amigos.`);
    } else {
        alert(`${num1} y ${num2} no son números amigos.`);
    }
}