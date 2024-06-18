function obtenerTasaDeCambio(deMoneda, aMoneda) {
    switch (deMoneda) {
        case "USD":
            switch (aMoneda) {
                case "EUR": return 0.85;
                case "GBP": return 0.75;
                case "JPY": return 110;
            }
            break;
        case "EUR":
            switch (aMoneda) {
                case "USD": return 1.18;
                case "GBP": return 0.88;
                case "JPY": return 129;
            }
            break;
        case "GBP":
            switch (aMoneda) {
                case "USD": return 1.33;
                case "EUR": return 1.14;
                case "JPY": return 147;
            }
            break;
        case "JPY":
            switch (aMoneda) {
                case "USD": return 0.0091;
                case "EUR": return 0.0078;
                case "GBP": return 0.0068;
            }
            break;
    }
    return null; 
}

function conversorDeDivisas() {
    let continuarConvirtiendo = true;

    while (continuarConvirtiendo) {
        let cantidad = parseFloat(prompt("Ingrese la cantidad de dinero que desea convertir:"));
        if (isNaN(cantidad) || cantidad <= 0) {
            alert("Por favor, ingrese una cantidad válida.");
            continue;
        }

        let deMoneda = prompt("Ingrese la moneda de origen (USD, EUR, GBP, JPY):").toUpperCase();
        let aMoneda = prompt("Ingrese la moneda de destino (USD, EUR, GBP, JPY):").toUpperCase();

        let tasa = obtenerTasaDeCambio(deMoneda, aMoneda);
        if (tasa === null) {
            alert("Par de divisas no válido o no soportado. Por favor, intente nuevamente.");
            continue;
        }

        let resultado = cantidad * tasa;
        alert(`${cantidad} ${deMoneda} es igual a ${resultado.toFixed(2)} ${aMoneda}.`);

        continuarConvirtiendo = confirm("¿Desea realizar otra conversión?");
    }

    alert("Gracias por usar el conversor de divisas.");
}

conversorDeDivisas();