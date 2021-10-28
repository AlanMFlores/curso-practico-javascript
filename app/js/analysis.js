// Convertir a array //

const convertToArray = (input) => {
    let arrayConverted  = input.split(',').map(Number).sort((a,b)=> {return a - b});
    return arrayConverted;
}

// Funcion obtener salarios //

const obtenerSalarios = (arr) => {
    const listaSalarios = arr.map(
        function(persona) {
            const salarioPersona = persona.salary;
            return salarioPersona;
        }
    )
    return listaSalarios;
}

// Función ordenar salarios de menor a mayor //

const salariosOrdenados = (arr) => {
    const salariosFinales = arr.sort(
        function(salariosUno, salariosDos) {
            return salariosUno - salariosDos
        }
    )
    return salariosFinales;
}

// Función calculo mitad //

const calculoMitad = (arr) => {
    const mitad = parseInt(arr.length / 2);
    return mitad;
}

// Función comprobación par //

const esPar = (num) => {
    return(num % 2 === 0)
}

// Función calculoMediana // 

let salaries = '1500, 700, 500, 800, 2000, 1200, 1700, 3400, 7000, 4000, 5000'

const calculoMediana = (arr) => {
    const salariosArray = convertToArray(arr);
    const salarioLista = salariosOrdenados(salariosArray); 
    const mitad = calculoMitad(salarioLista);
    if(esPar(salarioLista.length)) {
        const medianaParUno = salarioLista[mitad];
        const medianaParDos = salarioLista[mitad - 1];
        const mitadPar = (medianaParUno + medianaParDos) / 2;
        return mitadPar;
    } else {
        return salarioLista[mitad];
    }
}


// ////////// -- ////////// -- ////////// -- ////////// //

// Top 10

let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, ];

const topArr = (arr) => {
    let spliceStart = (arr.length * 90) / 100;
    let spliceEnd = arr.length - spliceStart;
    let topSalaries = arr.splice(spliceStart, spliceEnd);
    return topSalaries;
}

const calculoTopMediana = (arr) => {
    const salarioLista = salariosOrdenados(arr); 
    const mitad = calculoMitad(salarioLista);
    if(esPar(salarioLista.length)) {
        const medianaParUno = salarioLista[mitad];
        const medianaParDos = salarioLista[mitad - 1];
        const mitadPar = (medianaParUno + medianaParDos) / 2;
        return mitadPar;
    } else {
        return salarioLista[mitad];
    }
}

const topSalaries = (arr) => {
    const arrayConverted = convertToArray(arr);
    const topTenSalaries = topArr(arrayConverted);
    const topMedianSalaries = calculoTopMediana(topTenSalaries);
    return topMedianSalaries;
}


// ---------- Funciones con HTML ---------- //

// ----- Median Salaries Calculation ----- //

const salariesButton = document.querySelector('#calc-salaries');
const salBlockResult = document.querySelector('#sal-block-result');
const salariesResult = document.querySelector('#sal-result');


salariesButton.addEventListener('click', () => {
    const salariosACalcular = document.getElementById('salaries-numbers').value;
    const salariesMedian = calculoMediana(salariosACalcular);
    salBlockResult.classList.add('show-result');
    salariesResult.innerText = salariesMedian;
})

// ----- Top 10% Salaries Calculation ----- //

const topSalariesButton = document.querySelector('#calc-top-salaries');
const topSalBlockResult = document.querySelector('#top-sal-block-result');
const topSalariesResult = document.querySelector('#top-sal-result');

topSalariesButton.addEventListener('click', () => {
    const salariosACalcular = document.getElementById('top-salaries-numbers').value;
    const topSalariesAverage = topSalaries(salariosACalcular);
    topSalBlockResult.classList.add('show-result');
    topSalariesResult.innerText = topSalariesAverage;
})
