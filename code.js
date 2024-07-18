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
    console.log("Historial de Conversiones:");
    historial.forEach((conversion, index) => {
        console.log(`${index + 1}. ${conversion.cantidad} ${conversion.deMoneda} es igual a ${conversion.resultado.toFixed(2)} ${conversion.aMoneda}`);
    });
}

function conversorDeDivisas() {
    let continuarConvirtiendo = true;

    while (continuarConvirtiendo) {
        let cantidad = parseFloat(prompt("Ingrese la cantidad de dinero que desea convertir:"));
        let deMoneda = prompt("Ingrese la moneda de origen (USD, EUR, GBP, JPY):").toUpperCase();
        let aMoneda = prompt("Ingrese la moneda de destino (USD, EUR, GBP, JPY):").toUpperCase();

        let tasa = obtenerTasaDeCambio(deMoneda, aMoneda);
        if (tasa === null) {
            alert("Par de divisas no válido o no soportado. Por favor, intente nuevamente.");
            continue;
        }

        let resultado = cantidad * tasa;
        alert(`${cantidad} ${deMoneda} es igual a ${resultado.toFixed(2)} ${aMoneda}.`);

        historial.push({ cantidad, deMoneda, aMoneda, resultado });

        // Mostrar el historial en la consola
        console.clear();  // Esto limpiará la consola antes de mostrar el nuevo historial
        mostrarHistorial();

        continuarConvirtiendo = confirm("¿Desea realizar otra conversión?");
    }

    alert("Gracias por usar el conversor de divisas.");
}

conversorDeDivisas();