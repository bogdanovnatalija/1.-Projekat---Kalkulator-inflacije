function kalkulatorInflacije(){
//Preuzimanje vrednosti iz input-a
let stopaInflacije =document.querySelector('#stopaInflacije');
let sumaNovca =document.querySelector('#sumaNovca');
let godine = document.querySelector('#godine');

//Pretvaranje vrednosti iz input-a u brojcane vrednosti
stopaInflacije=parseFloat(stopaInflacije.value);
sumaNovca=parseFloat(sumaNovca.value);
godine=parseFloat(godine.value);


//Formula za izracunavanje inflacije za prvu godinu
let vrednost = sumaNovca + (sumaNovca*(stopaInflacije/100));

//Formula za izracunavanje inflacije za ostale godine
for(let i = 1; i< godine; i++){
	vrednost+= vrednost*(stopaInflacije/100);

}

vrednost= vrednost.toFixed(2); 

//Kreiranje elementa u kome ce se ispisati rezultat
let noviElement = document.createElement('div');
noviElement.className = 'nova-vrednost';
noviElement.innerText =`Danasnjih ${sumaNovca} eura vredi isto kao i ${vrednost} eura za ${godine} godina.`;

document.querySelector('.container').appendChild(noviElement);
}