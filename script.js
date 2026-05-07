function respuesta(opcion){

    let resultado = document.getElementById("resultado");

    if(opcion === "correcto"){
        resultado.innerHTML = "✅ Correcto! Nintendo creó Super Mario.";
        resultado.style.color = "lightgreen";
    }else{
        resultado.innerHTML = "❌ Incorrecto. Intenta otra vez.";
        resultado.style.color = "red";
    }
}