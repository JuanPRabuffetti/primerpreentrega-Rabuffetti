let tasasDeCambio = [
    { de: 'USD', a: 'EUR', tasa: 0.85 },
    { de: 'USD', a: 'GBP', tasa: 0.75 },
    { de: 'USD', a: 'JPY', tasa: 110 },
    { de: 'EUR', a: 'USD', tasa: 1.18 },
    { de: 'EUR', a: 'GBP', tasa: 0.88 },
    { de: 'EUR', a: 'JPY', tasa: 129 },
    { de: 'GBP', a: 'USD', tasa: 1.33 },
    { de: 'GBP', a: 'EUR', tasa: 1.14 },
    { de: 'GBP', a: 'JPY', tasa: 147 },
    { de: 'JPY', a: 'USD', tasa: 0.0091 },
    { de: 'JPY', a: 'EUR', tasa: 0.0078 },
    { de: 'JPY', a: 'GBP', tasa: 0.0068 }
];

let historial = [];

function obtenerTasaDeCambio(deMoneda, aMoneda) {
    let tasa = tasasDeCambio.find(tc => tc.de === deMoneda && tc.a === aMoneda);
    return tasa ? tasa.tasa : null;
}

function mostrarHistorial() {
    let historialElement = document.getElementById('historial');
    historialElement.innerHTML = '';
    historial.forEach((conversion, index) => {
        let li = document.createElement('li');
        li.textContent = `${index + 1}. ${conversion.cantidad} ${conversion.deMoneda} es igual a ${conversion.resultado.toFixed(2)} ${conversion.aMoneda}`;
        historialElement.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('convertir').addEventListener('click', () => {
        let cantidad = parseFloat(document.getElementById('cantidad').value);
        let deMoneda = document.getElementById('deMoneda').value;
        let aMoneda = document.getElementById('aMoneda').value;

        if (isNaN(cantidad)) {
            alert('Por favor, ingrese una cantidad válida.');
            return;
        }

        let tasa = obtenerTasaDeCambio(deMoneda, aMoneda);
        if (tasa === null) {
            alert('Par de divisas no válido o no soportado. Por favor, intente nuevamente.');
            return;
        }

        let resultado = cantidad * tasa;
        let resultadoElement = document.getElementById('resultado');
        resultadoElement.textContent = `${cantidad} ${deMoneda} es igual a ${resultado.toFixed(2)} ${aMoneda}.`;

        historial.push({ cantidad, deMoneda, aMoneda, resultado });
        mostrarHistorial();
    });
});