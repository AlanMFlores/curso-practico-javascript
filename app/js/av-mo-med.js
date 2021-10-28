// ////////// Average ///////// //


// Obteniendo los números // 

const convertToArray = (input) => {
    let arrayConverted  = input.split(',').map(Number).sort((a,b)=> {return a - b});
    return arrayConverted;
}

// Sumando los números del Array con reduce //

const sumaReduce = (arr) => {
    let sumaArr = arr.reduce(
        function(prevValue = 0, currValue) {
            return prevValue + currValue;
        })
        return(sumaArr);
}

// Calculando el promedio del Array //

const calculoPromedio = (numAProm, numADiv) => {
    let promedio = (numAProm / numADiv);
    return promedio;
}


// ////////// -- ////////// -- ////////// -- ////////// // 


// ////////// Median ///////// //


// Función medio

const listaMedio = (arr) => {
    const listaMedio = parseInt(arr.length / 2);
    return listaMedio;
}

// Función es par

const esPar = (num) => {
    if(num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}


// Calculo mediana

const calculoMediana = (arr) => {
    let getArray = convertToArray(arr);
    let medio = listaMedio(getArray);
    if(esPar(getArray.length)) {
        let parUno = getArray[medio];
        let parDos = getArray[medio - 1];
        let medianaPar = (parUno + parDos) / 2;
        return medianaPar;
    } else {
        let medianaImpar = getArray[medio];
        return medianaImpar;
    }
}


// ////////// -- ////////// -- ////////// -- ////////// // 


// ////////// Mode ///////// //

// Función conteo a objeto

const conteoLista = (arr) => {
    const listaCount = {};
    arr.map(
        function(elemento) {
            if(listaCount[elemento]) {
                listaCount[elemento] += 1;
            } else {
                listaCount[elemento] = 1;
            }
        }
    )
    return listaCount;
}

// Función objeto a array

const convertirAArray = (arr) => {
    const listaArray = Object.entries(arr).sort(
        function(valorAcum, nuevoValor) {
            return valorAcum[1] - nuevoValor[1];
        }
    )
    return listaArray;
}

// Función calculo moda

    
const calculoModa = (arr) => {
    const arrayConverted = convertToArray(arr);
    const listaContada = conteoLista(arrayConverted);
    const arrLista = convertirAArray(listaContada);
    const moda = arrLista[arrLista.length -1];
    return moda;
}



// ////////// -- ////////// -- ////////// -- ////////// // 

// ---------- Funciones con HTML ---------- //

//----- Average Calculation ----- //

const averageButton = document.querySelector('#calc-average');
const avBlockResult = document.querySelector('#av-block-result');
const averageResult = document.querySelector('#av-result');

averageButton.addEventListener('click', () => {
    const numerosAPromediar = document.getElementById('average-numbers').value;
    const arrayProm = convertToArray(numerosAPromediar);
    const arrayTotal = sumaReduce(arrayProm);
    const promedioFinal = calculoPromedio(arrayTotal, arrayProm.length);
    avBlockResult.classList.add('show-result');
    averageResult.innerText = (Math.round(promedioFinal * 1e2) / 1e2);
}) 


//----- Mode Calculation ----- //

const modeButton = document.querySelector('#calc-mode');
const moBlockResult = document.querySelector('#mo-block-result');
const modeResult = document.querySelector('#mo-result');

modeButton.addEventListener('click', () => {
    const numerosACalcular = document.getElementById('mode-numbers').value;
    const finalResult = calculoModa(numerosACalcular);
    moBlockResult.classList.add('show-result');
    modeResult.innerText = finalResult[0];
})

//----- Median Calculation ----- //

const medianButton = document.querySelector('#calc-median');
const medBlockResult = document.querySelector('#med-block-result');
const medianResult = document.querySelector('#med-result');

medianButton.addEventListener('click', () => {
    const numerosACalcular = document.getElementById('median-numbers').value;
    const finalResult = calculoMediana(numerosACalcular);
    medBlockResult.classList.add('show-result');
    medianResult.innerText = finalResult;
})