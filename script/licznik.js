




function zegar() {
   const czasTeraz = new Date();
   let godzina = czasTeraz.getHours();
   let minuta = czasTeraz.getMinutes();
   let sekunda =  czasTeraz.getSeconds();
   let czasWartosc = (godzina >= 12)? godzina : 12; 
   czasWartosc = (godzina === 0 || godzina === 12)? 12 : godzina % 12;
   czasWartosc += (minuta < 10)? ":0" + minuta : ":"+ minuta;
   czasWartosc += (sekunda < 10)? ":0" + sekunda : ":"+ sekunda;


   let element = document.getElementById("zegarID");
   element.value = czasWartosc;
   setTimeout(zegar, 1);
}

window.onload = function() {
   zegar();
};
