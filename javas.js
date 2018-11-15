
function randombg(){
var colo=new Array('red','green','blue','yellow','grey','pink','white','lightcoral');
	co=Math.round(Math.random()*colo.length);
	document.body.style.backgroundColor=colo[co];
}
function dew() {
	var s = "ewil Ariel Diaz BonillaD";
	document.getElementById('Titulo').innerHTML = s;
}
 function suma (a,b){
    var sum = a + b;
    document.getElementById('resultado').innerHTML = sum;	
  }
function Msj() {
	var w = window.innerWidth;
	var btn_1 = document.getElementById('Des');
    if (w < 768){
btn_1.style.display = 'none';
} else{
	btn_1.style.display = 'inline';
}
}
	var c = 100;
var j = 2;
var numerosPrimos = [];
        var i = -1;
		var Num = "Numero "
        function clickLink() {
            i++;
            if (i == 1) {              
				for (; j < c; j++) {
  if (primo(j)) {
    numerosPrimos.push(j);
  }  
}
function primo(numero) {
  for (var k = 2; k < numero; k++) {

    if (numero % k === 0) {
      return false;
    }
  }
  return numero !== 1;
}
            document.getElementById("clicks").innerHTML = Num+numerosPrimos[i];}
            else
            {
			for (; j < c; j++) {
  if (primo(j)) {
    numerosPrimos.push(j);
  } 
}

console.log(numerosPrimos);

function primo(numero) {

  for (var i = 2; i < numero; i++) {

    if (numero % i === 0) {
      return false;
    }
  }
  return numero !== 1;
}
               document.getElementById("clicks").innerHTML = Num+numerosPrimos[i];}
            }        
function mostrar() { 
var nom=document.form1.nombre.value; var ed=document.form1.edad.value; 
if (!(nom=='')&&!(ed=='')){
alert('Ingreso el nombre:' + nom); alert('Y la edad:' + ed); }} 

  