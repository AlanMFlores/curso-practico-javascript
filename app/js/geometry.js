// ---------- Cálculo de Formas Geométricas ---------- //


//  Cálculo del Cuadrado

// Función Perímetro

const perimetroCuadrado = (lado) => {
    let perimetro = lado * 4;
    return perimetro;
}

// Función Área

const areaCuadrado = (lado) => {
    let area = lado * lado;
    return area;
}

// ----------------------------------------------- //


// Cálculo del Triángulo

// Función Perímetro

const perimetroTriangulo = (lado1, lado2, base) => {
    let perimetro = Number(lado1) + Number(lado2) + Number(base);
    return perimetro;
}

// Función Área

const areaTriangulo = (base, altura) => {
    let area = (base * altura) / 2;
    return Math.round(area * 1e2) / 1e2;
}

// Función altura equilátero

const alturaEquilatero = (lado) => {
    let b = Math.pow((lado / 2), 2);
    let h = Math.pow(lado, 2);
    let altura = Math.sqrt(h - b);
    return Math.round(altura * 1e2) / 1e2;
}

const alturaIsosceles = (lado, base) => {
    let b = Math.pow((base / 2), 2);
    let h = Math.pow(lado, 2);
    let altura = Math.sqrt(h - b);
    return Math.round(altura * 1e2) / 1e2;
}

// ----------------------------------------------- //


// Cálculo del Círculo

// Función Circunferencia

const circunferenciaCirculo = (diametro, pi) => {
    let circunferencia = diametro * pi;
    return Math.round(circunferencia * 1e2 ) / 1e2;
}

// Función Área

const areaCirculo = (radio, pi) => {
    let area = (radio * radio) * pi;
    return Math.round(area * 1e2) / 1e2;
}


// ---------- Funciones con HTML ---------- //



// Cálculo de cuadrado

const perimeterButtonSq = document.querySelector('#calc-sq-perimeter');
const areaButtonSq = document.querySelector('#calc-sq-area');
const sqBlockResult = document.querySelector('#sq-block-result');
const squareResult = document.querySelector('#sq-result');
const sqParagraph = document.querySelector('#sq-paragraph')


perimeterButtonSq.addEventListener('click', () => {
    let squareValue = document.getElementById("sq-sides").value;
    sqBlockResult.classList.add('show-result');
    let finalResult = `${perimetroCuadrado(squareValue)} cm`;
    sqParagraph.innerText = `El perímetro de tu cuadrado es de: `
    squareResult.innerText = finalResult;
});


areaButtonSq.addEventListener('click', () => {
    let squareValue = document.getElementById("sq-sides").value;
    sqBlockResult.classList.add('show-result');
    let finalResult = `${areaCuadrado(squareValue)} cm`
    sqParagraph.innerText = `El área de tu cuadrado es de: `
    squareResult.innerText = finalResult;
});



// ------------------------------------------------------------ //

// Cálculo de triángulo


const perimeterButtonTr = document.getElementById('calc-tr-perimeter');
const areaButtonTr = document.getElementById('calc-tr-area');
const trBlockResult = document.querySelector('#tr-block-result');
const triangleResult = document.querySelector('#tr-result');
const trParagraph = document.querySelector('#tr-paragraph');


perimeterButtonTr.addEventListener('click', () => {
    let triangleValueS1 = document.getElementById('tr-side-one').value;
    let triangleValueS2 = document.getElementById('tr-side-two').value;
    let triangleValueBa = document.getElementById('tr-side-base').value;
    trBlockResult.classList.add('show-result');
    let finalResult = `${perimetroTriangulo(triangleValueS1, triangleValueS2, triangleValueBa)} cm`;
    trParagraph.innerText = `El perímetro de tu triángulo es de: `
    triangleResult.innerText = finalResult;
   
})

const calculoAltura = (lado1, lado2, base) => {
    if(lado1 === lado2 && lado1 === base) {
        let alturaEq = alturaEquilatero(lado1);
        return alturaEq; 
    } else if(lado1 === lado2 && lado1 != base) {
        let alturaIs = alturaIsosceles(lado1, base);
        return alturaIs; 
    }
}

areaButtonTr.addEventListener('click', () => {
    let triangleValueS1 = document.getElementById('tr-side-one').value;
    let triangleValueS2 = document.getElementById('tr-side-two').value;
    let triangleValueBa = document.getElementById('tr-side-base').value;
    trBlockResult.classList.add('show-result');
    let finalResult = `${areaTriangulo(triangleValueS1, triangleValueS2, triangleValueBa)} cm`
    trParagraph.innerText = `El área de tu triángulo es de: `
    triangleResult.innerText = finalResult;
})

// ------------------------------------------------------------ //


// Cálculo de cïrculo

const perimeterButtonCi = document.getElementById('calc-ci-perimeter');
const areaButtonCi = document.getElementById('calc-ci-area');
const ciBlockResult = document.querySelector('#ci-block-result');
const circleResult = document.querySelector('#ci-result');
const ciParagraph = document.querySelector('#ci-paragraph');


perimeterButtonCi.addEventListener('click', () => {
    let circleValue = document.getElementById('ci-diameter').value;
    console.log(circleValue);
    ciBlockResult.classList.add('show-result');
    let finalResult = `${circunferenciaCirculo(circleValue, Math.PI)} cm`;
    console.log(finalResult);
    ciParagraph.innerText = `El perímetro de tu círculo es de: `;
    circleResult.innerText = finalResult;
})

areaButtonCi.addEventListener('click', () => {
    let circleValue = document.getElementById('ci-diameter').value;
    console.log(circleValue);
    ciBlockResult.classList.add('show-result');
    let finalResult = `${areaCirculo(circleValue, Math.PI)} cm`;
    ciParagraph.innerText = `El área de tu círculo es de: `;
    circleResult.innerText = finalResult;
})