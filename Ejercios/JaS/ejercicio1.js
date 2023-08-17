/*1) Escribir un algoritmo en el cual se consulte al usuario que ingrese
 ¿cómo está el día de  hoy? 
 (soleado, nublado, lloviendo). 
 A continuación, mostrar por pantalla un mensaje que 
indique “El día de hoy está ...”, completando el mensaje con el dato que ingresó el usuario.*/

//let clima = prompt ("cómo está el día de  hoy? (soleado, nublado, lloviendo");
//alert("El día de hoy está " + clima);

/* 2)   Conocido el número en matemática PI π, pedir al usuario que ingrese el valor del radio 
de una circunferencia y calcular y mostrar por pantalla el área y perímetro. Recuerde que 
para calcular el área y el perímetro se utilizan las siguientes fórmulas: 
area = PI * radio2 
perimetro = 2 * PI * radio 
*/

//let rad= prompt("Ingrese el valor del radio")
// alert("el area es igual"+ Math.PI*(rad**2) +  "El perimetro es igual a "+ 2*Math.PI*rad)

/* 3) . Escriba un programa en donde se pida la edad del usuario. Si el usuario es mayor de 
edad se debe mostrar un mensaje indicándolo.*/

/*let edad = prompt("Ingrese su edad")
if (edad >= 18) {
    alert("Es MAYOR de edad , su edad es " + edad)
} else {
    alert("Es menor de edad, su edad es ", edad)
}*/

/*4). Realiza un programa que sólo permita introducir los caracteres ‘S’ y ‘N’. Si el usuario 
ingresa alguno de esos dos caracteres se deberá de imprimir un mensaje por pantalla 
que diga “CORRECTO”, en caso contrario, se deberá imprimir “INCORRECTO”. */

/*let answer= prompt("Ingrese un caracter S/N")
answer= answer.toUpperCase();
if(answer=="S" || answer=="N"){
    alert("Correcto")
}else{
    alert("Incorrecto")
};*/

/*5) . Construir un programa que simule un menú de opciones para realizar las cuatro 
operaciones aritméticas básicas (suma, resta, multiplicación y división) con dos valores 
numéricos enteros. El usuario, además, debe especificar la operación con el primer 
carácter de la operación que desea realizar: ‘S' o ‘s’ para la suma, ‘R’ o ‘r’ para la resta, ‘M’ 
o ‘m’ para la multiplicación y ‘D’ o ‘d’ para la división.*/

/*var n1 = parseInt(prompt("Ingrese el primer numero"))
var n2 = parseInt(prompt("Ingrese el segundo numero"))
var op = prompt("Que operacion desea (S/R/M/D)")
op=op.toUpperCase();
switch (op) {
    case "S":
        alert(n1+n2);
        break;

    case "R":
        alert(n1 - n2);
        break;

    case "M":
        alert(n1 * n2);
        break;
    case "D":
        alert(n1 / n2);
        break;
    default:
        break;
}*/

/*6)Realizar un programa que, dado un número entero, visualice en pantalla si es par o impar. 
En caso de que el valor ingresado sea 0, se debe mostrar “el número no es par ni impar”.*/
/*var n= parseInt(prompt("Ingrese un numero"));

    if(n%2 === 0){
       alert("par");
    }else{
         alert("Impar");
    }
 */

/*7. Escriba un programa en el cual se ingrese un valor límite positivo, y a continuación 
solicite números al usuario hasta que la suma de los números introducidos supere el 
límite inicial. */

/*
//pedir el valor del limite positivo
const limiPositivo= parseInt(prompt("Limite positivo"));
let suma=0;
let contador=0;
//arreglo para almacenar los numeros ingresados
const numerosIngre=[];
//pedir el numero
while (suma<limiPositivo) {
    var num = parseInt(prompt("Ingrese un numero")); 
    //validar el numero ingresado sea valido
    if (isNaN(num)) {
        console.log("Numero no valido, ingrese de nuevo")
        continue;
    }
    numerosIngre.push(num);//alamacenar el num dentro del arreglo
    suma +=num;
    contador++;
   }

alert(`Números ingresados: ${numerosIngre.join(', ')}`);

*/
/*8) Escribir un programa que lea números enteros hasta teclear 0 (cero). 
Al finalizar el programa se debe mostrar el máximo número ingresado,
 el mínimo, y el promedio de  todos ellos. */
/*

 var numerosIngre = [];
let maxNum;
let minNUM;
let contador=0;
let suma=0;

do {
    var n = parseInt(prompt("Ingrese un numero"));
    if (isNaN(n)) {
        alert('Numero no valido');
    } else {
        if (n === 0) {
            break;
        }
    }
    numerosIngre.push(n);//agregar los num al arreglo
    maxNum = Math.max.apply(null,numerosIngre);
    minNUM=Math.min.apply(null,numerosIngre);
    suma+=n;
    contador++;
   
} while (true);


 const promedio = suma / contador;
    
alert(`Números ingresados: ${numerosIngre.join(', ')}`);
alert('promedio  ' + promedio.toFixed(2));
alert('Numero maximo es '+maxNum);
*/

/*9) Realizar un programa que pida una frase y el programa deberá mostrar la frase con un 
espacio entre cada letra. La frase se mostrara así: H o l a. Nota: recordar el 
funcionamiento de la función Substring(). */

/*
var frase = prompt('Ingrese una frase');
var palabra = frase.split('').join(' ');
alert(palabra);
*/

/*10)  Escribir una función flecha que reciba una palabra y la devuelva al revés. 

let frase = prompt("Ingrese una palabra");

let alreves = (frase) => {
    let resultado = "";
    for (let index = frase.length - 1; index >= 0; index--) {
        resultado += frase[index];
    }
    alert(resultado);
};

alreves(frase);
*/
/*
//otra forma
const reverseWord = palabra => palabra.split('').reverse().join('');

const palabraIngresada = prompt("Ingresa una palabra:");
const palabraReversa = reverseWord(palabraIngresada);

alert(palabraIngresada);
alert(palabraReversa);
*/

/*11) Escribir una función que reciba un String y devuelva la palabra más larga. 
String Ejemplo: “Guia de JavaScript”
Resultado esperado : “JavaScript”*/

/*
var frase=prompt("Ingrese una palabra");
var palabraL=palabraLargo(frase);
alert("La palabra mas larga es "+ palabraL);


function palabraLargo(frase) {
    //dividir la frase en palabras 
    var palabra=frase.split(' ');

    //variable para almacena la palabra larga
    var palabraLargo=" ";

    //recorrer las palabras y comparar su tamaño

    for (let i = 0;i <palabra.length;i++) {
        if (palabra[i].length>palabraLargo.length) {
            palabraLargo=palabra[i];
        }
        
    }
    return palabraLargo;
}
*/

//otra forma
/*
var frase=prompt("Ingrese una palabra");
var palabraL=palabraLargo(frase);
alert(frase);
alert("La palabra mas larga es: "+palabraL);

function palabraLargo(frase) {
    var palabras=frase.split(' ');
    return palabras.reduce(function(palabraMasLarga,palabraActual){
        return palabraActual.length> palabraMasLarga.length ? palabraActual : palabraMasLarga; 
    },"");
    
}
*/
/*12. Escribir una función flecha de JavaScript que reciba un argumento y retorne el tipo de 
dato.*/

/*
const dato = prompt("ingresar un dato");

const obtenerTipo = dato => {
//convertir el dato a numero

  if (!isNaN(parseFloat(dato))) {
    alert("El dato ingresado es numero");
  } 
   else if(dato === 'true' || dato=== 'false') {
    alert("El dato ingresado es un booleano (True/False)");

    //cadena de texto
  }
  else  if (typeof dato === "string") {
    alert("El dato ingresado es una cadena de texto")
  }
 
  else{
   
    alert("El dato ingresado no se pudo ingresar");
  }
};

obtenerTipo(dato);

*/
/*13). Crear un objeto persona, con las propiedades nombre, edad, sexo ('H' hombre, 'M' mujer, 
'O' otro), peso y altura. A continuación, muestre las propiedades del objeto JavaScript.*/
/*
let persona={
    nombre: "Ana",
    edad:24, 
    sexo:"H",
    peso:66,
    altura:1.66,
};

//alert("Nombre ",persona["nombre"]);

//Puedes utilizar un bucle for...in para recorrer todas las propiedades
//del objeto y mostrar sus valores:

/*for(const propiedades in persona){
    alert(propiedades+": "+persona[propiedades]);
}*/

//El método Object.keys te permite obtener un array con las propiedades
//del objeto, que luego puedes recorrer para mostrar sus valores:

/*
const propiedades = Object.keys(persona);
for(const propiedad of propiedades){
    alert(propiedad+ " ; "+persona[propiedad]);
}*/

//Puedes convertir el objeto a formato JSON utilizando JSON.stringify
//para mostrar todas sus propiedades y valores:
/*
alert(JSON.stringify(persona,null,2));
*/

//maninupular el DOM

//hePerson.textContent = `${p1.altura}`;

/*14. Crear un objeto libro que contenga las siguientes propiedades: ISBN, Título, Autor, 
Número de páginas. Crear un método para cargar un libro pidiendo los datos al usuario 
y luego informar mediante otro método el número de ISBN, el título, el autor del libro y el 
numero de páginas*/

/*
var nlibro;
function Libro(isbn,titulo,autor,numbPage){
    this.isbn= isbn;
    this.titulo=titulo;
    this.autor=autor;
    this.numbPage=numbPage;
}

function crearLibro(){
    this.isbn=prompt("Ingrese el ISBN");
    this.titulo=prompt("Ingrese el titulo");
    this.autor = prompt("Ingrese el autor");
    this.numbPage = prompt("Ingrese el numero de paginas"); 

     nlibro=new Libro(this.isbn,this.titulo,this.autor,this.numbPage);
     mostrarLibro(nlibro);
}

function mostrarLibro(nlibro){
    alert("EL ISBN es:  "+nlibro.isbn);
    alert("El titulo es: "+nlibro.titulo);
    alert("El autor es: "+nlibro.autor);
    alert("El numero de pagistas es: "+nlibro.numbPage)
}

crearLibro();
*/

/*15. Escribe un programa JavaScript para calcular el área y el perímetro de un objeto Círculo 
con la propiedad radio. Nota: Cree dos métodos para calcular el área y el perímetro. El 
radio del círculo lo proporcionará el usuario*/

/*
var radio=prompt("Ingrese el radio");

var area = radio =>{ return Math.PI*(radio*radio) }

alert(area);
*/

/*23 . Resalte todas las palabras de más de 8 caracteres en el texto del párrafo (con un fondo 
amarillo, por ejemplo)*/

/*
function pintarParrafo(parrafoId) {
    const parrafo = document.getElementById(parrafoId);
    const contenido = parrafo.innerHTML;
   const palabra = contenido.split(' ');

    const palabraResaltada = palabra.map(palabra =>{
        
        //condicion si encuentra una palabra con mas de 8 de longitud
        if (palabra.length >= 8) {   
            return `<span style="background-color: yellow">${palabra}</span>`;
        }if(palabra.length <= 8){
            return `<span style= "background-color: ligth green">${palabra}</span>`;
        } else {
            return palabra;
        }

    });

    parrafo.innerHTML = palabraResaltada.join(' ');
}

pintarParrafo('pintar');
*/

/*25 . Escriba una función de JavaScript para obtener los valores de Nombre y Apellido del 
siguiente formulario.*/


function getFormValores() {
    //obtener el formulario
    var form = document.getElementById('form1');

    //obtener elementos del formulario
    var nombre = form.elements['nombre'].value;
    var apellido = form.elements('apellido').value;

   alert("nombre"+nombre);
   // console.log(nombre);
    alert(nombre);
    return true;
}