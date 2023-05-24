//alert("ok");

//funkcja do tworzenia obiektów pojazd
function gra(id, nazwa, wydawca, ilgraczy, czas, cena){
    this.id=id;
    this.nazwa=nazwa;
    this.wydawca=wydawca;
    this.ilgraczy=ilgraczy;
    this.czas=czas;
    this.cena=cena;
    }
    
    const tabGry=[];
    
    tabGry[0]=new gra(1,"Gloomhaven","Rebel","1-4 osób","60-120 min","649zł");
    tabGry[1]=new gra(2,"Century Korzenny szlak","Cube Factory of Ideas","2-5 osób","30-45 min","169zł");
    tabGry[2]=new gra(3,"Zew Cthulhu podręcznik Strażnika + Badacza","BlackMonk","2-6 osób"," 180+ min","349zł");
    tabGry[3]=new gra(4,"Brzdęk! Nie drażnij smoka","Rebel","2-4 osób","30-60 min","229zł");
    tabGry[4]=new gra(5,"Karty Dżentelmenów 1","Rebel","3-8 osób","15+ min","60zł");
    
    //console.table(tabGry);
    
    let wyswietl = (tab)=>{
        let elementTablica=document.getElementById("tablica");
        let txt="";
    
        txt+= `<tr> 
        <th> Id </th>
        <th> Nazwa </th>
        <th> Wydawca </th>
        <th> Liczba Graczy </th>
        <th> Czas Gry </th>
        <th> Cena </th>
         </tr>`;
    
        for(let i = 0; i < tab.length; i++)
        {
            txt+="<tr>";
            txt+="<td>"+ tab[i].id +"</td>";
            txt+="<td>"+ tab[i].nazwa +"</td>";
            txt+="<td>"+ tab[i].wydawca +"</td>";
            txt+="<td>"+ tab[i].ilgraczy +"</td>";
            txt+="<td>"+ tab[i].czas +"</td>";
            txt+="<td>"+ tab[i].cena + "</td>";
            txt+="</tr>";
        }
        elementTablica.innerHTML=txt;
    }
    