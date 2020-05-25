var caracteres = [];
var i = 0, aux = 0, dec = 0;

function pegarvalores(caracter){

    if(caracteres[i] == null){
    parseFloat(caracteres.push(caracter));
    if(caracteres.length == 0){
    document.getElementById("result").innerHTML = caracteres[i];
    }else{
    document.getElementById("result").insertAdjacentHTML("beforeend", caracteres[i]);
    }
    }else if(decimal = 0){
        caracteres[i] = parseFloat(caracteres[i] + caracter);
        document.getElementById("result").insertAdjacentHTML("beforeend", caracter);
    }else if(decimal = 1){
        caracteres[i] = parseFloat(caracteres[i] + "." + caracter);
        document.getElementById("result").insertAdjacentHTML("beforeend", caracter);
    }

}

function adicionardecimal(caracter){
caracteres[i] = parseFloat(caracteres[i] + "." + caracter);
dec = 1;
document.getElementById("result").insertAdjacentHTML("beforeend", caracter);
}

function pegarsimbolo(caracter){
    aux++;
    i++;
    caracteres.push(caracter);
    exibir();
    aux++;
    i++;
    
}

function resultado(){
    

    switch (caracteres[i-1]) {
        case "+":
        caracteres[i] = parseFloat(caracteres[i-2]) + parseFloat(caracteres[i]);
          break;
  
        case "-":
        caracteres[i] = parseFloat(caracteres[i-2]) - parseFloat(caracteres[i]);
          break;
  
        case "*":
        caracteres[i] = parseFloat(caracteres[i-2]) * parseFloat(caracteres[i]);
          break;
  
        case "/":
        caracteres[i] = parseFloat(caracteres[i-2]) / parseFloat(caracteres[i]);
          break;
         
      }

      exibir();

    

}

function apagar(){
    i = 0;
    aux = 0;
    caracteres.length= 0;
    document.getElementById("result").innerHTML = ""; 
}

function exibir(){
    if(aux == 1){
        document.getElementById("result").insertAdjacentHTML("beforeend", caracteres[i]);
    }else if(aux == 2){
        document.getElementById("result").innerHTML = caracteres[i]; 
        aux = 0;
    }
}
