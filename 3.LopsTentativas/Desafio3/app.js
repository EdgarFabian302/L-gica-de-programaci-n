let numeroUsuario = prompt('Ingrese un numero del cual iniciar la regresion');
let contador = numeroUsuario;

if (contador <= 0) {
    alert('La cuenta regresiva no puede empezar de cero');
} else {
    while (contador >= 0) {
        alert(`Cuenta regresiva: ${contador}`);
        contador--;
    }
}
