function perimetro_triangulo() {
   let ladoA = Number(document.getElementById("l_a").value);
   let ladoB = Number(document.getElementById("l_b").value);
   let ladoC = Number(document.getElementById("l_c").value);
   let perimetro_tri = ladoA + ladoB + ladoC;

   document.getElementById("per_tri").innerHTML = `El perímetro del triangulo es: ${perimetro_tri}`;
}

function area_triangulo() {
   let base = Number(document.getElementById("base").value);
   let altura = Number(document.getElementById("altura").value);
   let area_triangulo = (base*altura)/2;

   document.getElementById("area_tri").innerHTML = `El area del triangulo es: ${area_triangulo}`;
}

function area_rectangulo() {
   let base = Number(document.getElementById("base").value);
   let ladoA = Number(document.getElementById("l_a").value);
   let area_rectangulo = base*ladoA;

   document.getElementById("area_rec").innerHTML = `El area del rectangulo es: ${area_rectangulo}`;
}

function perimetro_rectangulo() {
   let base = Number(document.getElementById("base").value);
   let ladoA = Number(document.getElementById("l_a").value);
   let perimetro_rectangulo = 2 * (base + ladoA);

   document.getElementById("per_rec").innerHTML = `El perimetro del rectangulo es: ${perimetro_rectangulo}`;
}

function perimetro_cuadrado() {
   let ladoA = Number(document.getElementById("l_a").value);
   let perimetro_cua = ladoA*4;

   document.getElementById("per_cua").innerHTML = `El perímetro del cuadrado es: ${perimetro_cua}`;
}

function area_cuadrado() {
   let ladoA = Number(document.getElementById("l_a").value);
   let area_cua = ladoA*ladoA;

   document.getElementById("area_cua").innerHTML = `El area del cuadrado es: ${area_cua}`;
}

function perimetro_circulo() {
   let Radio = Number(document.getElementById("Radio").value)
   let perimetro_cir = 2 * Math.PI * Math.pow (Radio, 2);

   document.getElementById("per_cir").innerHTML = `El perímetro del circulo es: ${perimetro_cir}`;
}

function area_circulo() {
   let Radio = Number(document.getElementById("Radio").value)
   let area_cir = Math.PI * Math.pow (Radio, 2);

   document.getElementById("area_cir").innerHTML = `El área del circulo es: ${area_cir}`;
}