
function CallMenu() {
    let nro_ejercicio = parseInt(
        prompt("Ingrese el numero de ejercicio que quiere ejecutar: \r\n 1. Suma. \r\n 2. Promedio de 4 exámenes \r\n 3. Calcular el area del rectangulo \r\n 4. Calcular el area del triangulo \r\n 5. Calcular el area del Circulo \r\n 6. Calcular salario semanal \r\n 7. Convertir pulgadas \r\n 8. Cambiar a dolares \r\n 9. Edad por medio de año de nacimiento \r\n 10. Nombre de la persona con menor edad de 3 personas \r\n 11. Calcula tu bono \r\n 12. Salario final a cabo de 6 años \r\n 13. Cantidad de alumnos aprobados y desaprobados \r\n 14. Numero de focos que hay \r\n 15. Verifica si puedes votar en las proximas elecciones escribiendo tu edad")
    );
    if (isNaN(nro_ejercicio)) {
        alert("Porfavor ingresa valores numéricos");
    } else {
        MenuEjercicios(nro_ejercicio)
    }
}

function MenuEjercicios(nro_ejercicio) {
    switch (nro_ejercicio) {
        case 1:
            let valor1 = parseFloat(prompt("Ingrese el valor 1 a sumar: "));
            let valor2 = parseFloat(prompt("Ingrese el valor 1 a sumar: "));
            alert(ej1_SumarValores(valor1,valor2));
            break;
        case 2:
            let nota1 = parseFloat(prompt("Ingrese el su primera nota: "));
            let nota2 = parseFloat(prompt("Ingrese el su segunda nota: "));
            let nota3 = parseFloat(prompt("Ingrese el su tercera nota: "));
            let nota4 = parseFloat(prompt("Ingrese el su cuarta nota: "));
            alert(ej2_Promedio(nota1,nota2,nota3,nota4));
            break;
        case 3:
            let baser = parseFloat(prompt("Ingrese la base del rectangulo: "));
            let alturar = parseFloat(prompt("Ingrese la altura del rectangulo: "));
            alert(ej3_AreaRectangulo(baser,alturar));
            break;
        case 4:
            let baset = parseFloat(prompt("Ingrese la base del triangulo: "));
            let alturat = parseFloat(prompt("Ingrese la altura del triangulo: "));
            alert(ej4_AreaTriangulo(baset,alturat));
            break;
        case 5:
            let radio = parseFloat(prompt("Ingrese el radio del círculo: "));
            alert(ej5_Circulo(radio));
            break;
        case 6:
            let salario = parseFloat(prompt("Ingrese el salario: "));
            alert(ej6_Salario(salario));
            break;
        case 7:
            let pulgadas = parseFloat(prompt("Convertir cm a pulgadas: "));
            alert(ej7_Pulgadas(pulgadas));
            break;
        case 8:
            let dolares = parseFloat(prompt("Convertir a dólares: "));
            alert(ej8_Dolares(dolares));
            break;
        case 9:
            let anodenacimiento = parseFloat(prompt("Ingrese su año de nacimiento: "));
            alert(ej9_Edad(anodenacimiento));
            break;
        case 10:
            let nombre1 = prompt("Ingrese el nombre de la primera persona: ");
            let edad1 = parseFloat(prompt("Ingrese su edad: "));
            let nombre2 = prompt("Ingrese el nombre de la segunda persona: ");
            let edad2 = parseFloat(prompt("Ingrese su edad: "));
            let nombre3 = prompt("Ingrese el nombre de la tercera persona: ");
            let edad3 = parseFloat(prompt("Ingrese su edad: "));
            alert(ej10_PersonaMenor(nombre1,edad1,nombre2,edad2,nombre3,edad3));
            break;
        case 11:
            let salario1 = parseFloat(prompt("Ingrese su salario: "));
            let anos = parseFloat(prompt("Ingrese sus años laborando: "));
            alert(ej11_Salario1(salario1,anos));
            break;
        case 12:
            let salario2 = parseFloat(prompt("Ingrese su salario: "));
            alert(ej12_Salario2(salario2));
            break;
        case 13:
            let est = parseFloat(prompt("Ingrese la cantidad de estudiantes: "));
            i = 0;
            let arraynotas = [];
            do{
                let notas = parseFloat(prompt("Ingrese la notas: "));
                arraynotas[i] = notas;
                i = i+1;
            }while(i<est)

            alert(ej13_NumAproYDes(est,arraynotas));
            break;
        case 14:
            let color = prompt("Ingrese el color de foco: ");
            alert(ej14_CantidadFoco(color));
            break;
        case 15:
            let edadlegal = parseFloat(prompt("Ingrese su edad para saber si puede votar en las próximas elecciones: "));
            alert(ej15_EdadL(edadlegal));
            break;
    }
}

function ej1_SumarValores(a,b){
    if (isNaN(a)||isNaN(b)) {
        alert("Porfavor ingresa valores numericos");
    } else {
        return a+b;
    }
}

function ej2_Promedio(nota1,nota2,nota3,nota4){
    if (isNaN(nota1)||isNaN(nota2)||isNaN(nota3)||isNaN(nota4)) {
        alert("Porfavor ingresa valores numericos");
    } else {
        return (nota1+nota2+nota3+nota4)/4;
    }
}

function ej3_AreaRectangulo(baser,alturar){
    if (isNaN(baser)||isNaN(alturar)) {
        alert("Porfavor ingresa valores numericos");
    } else {
        return baser*alturar;
    }
}

function ej4_AreaTriangulo(baset,alturat){
    if (isNaN(baset)||isNaN(alturat)) {
        alert("Porfavor ingresa valores numericos");
    } else {
        return baset*alturat/2;
    }
}

function ej5_Circulo(radio){
    if (isNaN(radio)) {
        alert("Porfavor ingresa valores numericos");
    } else {
        return radio**2*Math.PI/2;
    }
}

function ej6_Salario(salario){
    if (isNaN(salario)) {
        alert("Porfavor ingresa valores numericos");
    } else {
        return salario/4;
    }
}

function ej7_Pulgadas(pulgadas){
    if (isNaN(pulgadas)) {
        alert("Porfavor ingresa valores numericos");
    } else {
        return pulgadas*0.393701;
    }
}

function ej8_Dolares(dolares){
    if (isNaN(dolares)) {
        alert("Porfavor ingresa valores numericos");
    } else {
        return dolares*0.26;
    }
}

function ej9_Edad(anodenacimiento){
    if (isNaN(anodenacimiento)) {
        alert("Porfavor ingresa valores numericos");
    } else {
        return "Su edad es " + (2022-anodenacimiento);
    }
}

function ej10_PersonaMenor(nombre1,edad1,nombre2,edad2,nombre3,edad3){
    if (nombre1 ===null||isNaN(edad1)||nombre2===null||isNaN(edad2)||nombre3===null||isNaN(edad3)) {
        alert("Porfavor ingresa valores numericos");
    } else {
        if((edad1 > edad2)&&(edad1>edad3)){
            return nombre1;
        } else if((edad2 > edad1)&&(edad2>edad3)){
            return nombre2;
        } else {
            return nombre3;
        }
    }
}

function ej11_Salario1(salario1,anos){
    if (isNaN(salario1)) {
        alert("Porfavor ingresa valores numericos");
    } else {
        if(anos==1){
            return "El salario será " + (salario1 + 100);
        } else if(anos==2){
            return "El salario será " + (salario1 + 200);
        } else if(anos==3){
            return "El salario será " + (salario1 + 300);
        } else if(anos==4){
            return "El salario será " + (salario1 + 400);
        } else if(anos==5){
            return "El salario será " + (salario1 + 500);
        }
    }
}

function ej12_Salario2(salario2){
    if (isNaN(salario2)) {
        alert("Porfavor ingresa valores numericos");
    } else {
        incremento = 0.1;
        a = 0;
        let arraysalario = [];
        do{
            arraysalario[a]=salario2+(a+1)*salario2*incremento;
            a = a+1;
        }while(a<6);
        
        return "El primer salaio fue " + (arraysalario [0]) + "\r\n El segundo salario fue " + (arraysalario[1]) + "\r\n El tercer salario fue " + (arraysalario[2])+ "\r\n El cuarto salario fue " + (arraysalario[3]) + "\r\n El quinto salario fue " + (arraysalario[4])+ "\r\n El sexto salario fue " +  (arraysalario[5]);
    }
}

function ej13_NumAproYDes(est,arraynotas){
    if (isNaN(est)||arraynotas === null) {
        alert("Porfavor ingresa valores numericos");
    } else {
        a =0;
        ap = 0;
        de = 0;
        do{
            if (arraynotas[a]>10){
                ap = ap +1;
            } else {
                de = de + 1;
            }
            a = a+1;
        }while(a<est);
        return "La cantidad de desaprobados es " + (de) + "y la cantidad de desaprobados es " + (ap);
    }
}

function ej14_CantidadFoco(color){
    if (color === null) {
        alert("Porfavor ingrese el color (verde,blanco o rojo)");
    } else {
        const Focos=[10,20,30];
        if(color=="verde"){
            return "Hay " +(Focos[0]) +" focos verdes";
        } else if(color=="blanco"){
            return "Hay " +(Focos[1]) +" focos verdes";
        } else if(color =="rojo"){
            return "Hay " +(Focos[2]) +" focos verdes";
        }
    }
}

function ej15_EdadL(edadlegal){
    if (isNaN(edadlegal)) {
        alert("Porfavor ingresa valores numericos");
    } else {
        if (edadlegal>18){
            return "Sí puede votar";
        } else {
            return "No puede votar";
        }
    }
}