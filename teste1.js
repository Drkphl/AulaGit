let temperatura = 0;
let tipo = '';
let C = 0;
let K = 0;
let F = 0;

console.log('escolha uma escala de temperatura: \nF - Fahrenheit, \nC - Celsius, \nK-Kelvin');
process.stdin.once('data', function (data) {
    tipo = data.toString().trim().toLowerCase();

    console.log('agora insira a temperatura desejada:');
    process.stdin.once('data', function (temp) {
        temperatura = Number(temp.toString().trim());

        switch (tipo) {
            case 'f':
                F = temperatura;
                C = (F - 32) / 1.8;
                K = C + 273.15;
                console.log('a temperatura em Celsius é:' + C + '\na temperatura em K é:' + K);

                break;
            case 'c':
                C = temperatura;
                F = C * 1.8 + 32;
                K = C + 273.15;
                console.log('a temperatura em Fahrenheit é:' + F + '\na temperatura em K é:' + K);
                break;
            case 'k':
                K = temperatura;
                C = K - 273.15;
                F = (K - 273.15) * 1.8 + 32;
                console.log('a temperatura em Celsius é:' + C + '\na temperatura em Fahrenheit é:' + F);
                break;
            default:
                process.exit();
                break;
        }
        process.exit();
    });
});