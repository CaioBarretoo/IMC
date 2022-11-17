
function calculatorImc(){
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const _name = document.getElementById("_name").value;
    const sex = document.getElementById('sex').value;
    const result = document.getElementById("imctext");
    let img = document.getElementById('img');
    let classification = '';

    const imc = weight / (height * height).toFixed(2);


    if(_name !== '' && height !== '' && weight !== ''){

        result.textContent = ''
        if( imc >= 0 && imc < 18.5){
            
            classification = ", você é considerado uma pessoa abaixo do peso."
        }
        else if( imc >= 18.5 && imc < 24.9){
            
            classification = ", você é considerado uma pessoa com o peso ideal parabéns!!!."
        }
        else if( imc >= 25.0 && imc < 29.9){
            
            classification = ", você é considerado uma pessoa levemente acima do peso."
        }
        else if( imc >= 30.0 && imc < 34.9){
            
            classification = ", você é considerado uma pessoa com obesidade grau I."
        }
        else if( imc >= 35.0 && imc < 39.9){
            
            classification = ", você é considerado uma pessoa com obesidade grau II(severa)."
        }
        else if( imc >= 40.0){
            classification = ", você é considerado uma pessoa com obesidade grau III(mórbida)."
        }

        document.getElementById("imcname").textContent = "Nome: " + _name 
        if(sex !== ''){
            document.getElementById("imcsex").textContent = "Sexo: " + sex
        }
        else{
            document.getElementById("imcsex").textContent = "Sexo: Não Informado"
        }
        result.textContent= _name + " sua altura é de " + height + ", seu peso é " + weight + "kg, obtivemos que seu IMC é de " + imc.toFixed(2) + classification

        img.parentNode.removeChild(img);
    
    }
    

}

const button = window.document.getElementById('button');
button.addEventListener('click', calculatorImc);

