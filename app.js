//Boton Calcular
document.getElementById("btnCalcular").addEventListener("click", function () {
    //Asignar notas de los inputs
    let nota1 = document.getElementById("nota1").value;
    let nota2 = document.getElementById("nota2").value;
    let nota3 = document.getElementById("nota3").value;

    //Validar campos vacios
    if(nota1 === "" || nota2 === "" || nota3 === ""){
        Swal.fire("Error","Todos los campos son obligatorios","error");
        return;
    }

    //Convertir a numero
    nota1 = Number(nota1);
    nota2 = Number(nota2);
    nota3 = Number(nota3);

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) ||
        nota1 < 0 || nota1 > 30 ||
        nota2 < 0 || nota2 > 30 ||
        nota3 < 0 || nota3 > 40) {
        Swal.fire("Error", "Verifique que las notas estén en el rango permitido.", "error");
        return;
    }

    //Calcular Nota Final
    let notaFinal = nota1 + nota2 + nota3;
    let mensaje = "";

    if(notaFinal <= 59) mensaje = "Reprobado";
    else if(notaFinal <= 79) mensaje = "Bueno";
    else if(notaFinal <= 89) mensaje = "Muy bueno";
    else mensaje = "Sobresaliente";

    //Mostrar resultado
    document.getElementById("resultado").textContent = `${notaFinal} puntos - ${mensaje}`;

    //Notificacion Éxito
    Swal.fire("Cálculo realizado", `Tu nota final es: ${notaFinal} (${mensaje})`, "success");

});

//Boton de limpiar
document.getElementById("btnLimpiar").addEventListener("click", function () {
document.getElementById("nota1").value = "";
document.getElementById("nota2").value = "";
document.getElementById("nota3").value = "";
document.getElementById("resultado").textContent = "";
});
