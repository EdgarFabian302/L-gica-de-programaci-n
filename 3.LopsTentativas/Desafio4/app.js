let numeroUsuario = prompt('Ingrese un numero hasta elq ue llegara la cuenta progresiva');
let contador = 0;

numeroUsuario = parseInt(numeroUsuario);

if (numeroUsuario === 0) {
    alert('No puede ser 0');
} else {
    while (contador <= numeroUsuario) {
        alert(`Cuenta numero: ${contador}`);
        contador++;
    }
}