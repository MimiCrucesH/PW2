// selecciono la etiqueta del formulario y ahi hay un evento 

document.getElementById("sumForm").addEventListener("submit",function(event){
    event.preventDefaul();
    let numero = parseInt(document.getElementById("Num1").value);
    let numero2 = parseInt(document.getElementById("Num2").value);
    let resultado = numero + numero2;
    document.getElementById("resultado").innerText ="La suma es "+resultado;
});