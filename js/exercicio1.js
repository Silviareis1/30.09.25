function verificarNumero() {
    const n1 = parseFloat(document.getElementById('num1').value);
    // const n2 = parseFloat(document.getElementById('num2').value);
    const maior = document.getElementById('maior');
    if (isNaN(n1) || isNaN(n2)) {
        maior.value = 'Insira ambos os números';
    } else {
        maior.value = n1 > n2 ? n1 : n2;
    }
}