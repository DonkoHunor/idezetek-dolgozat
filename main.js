import './style.css'
import array from './quotes.json'

let lista = document.getElementById('lista');
let lista2 = document.getElementById('lista2');
let p = document.getElementById('bekezdes');

function osszes(){
  let a1 = Array.from(array.quotes);
  lista.innerHTML = '';
  lista2.innerHTML = '';
  p.innerHTML = "";

  a1.sort((a, b) =>{
    if(a.author > b.author){
      return 1;
    }
    else if(a.author < b.author){
      return -1
    }
    else{
      return 0;
    }
  });
  a1.forEach((a) => {
    let sor = document.createElement('li');
    sor.innerHTML = '<q>' + a.quote +'</q> - '+ a.author;
    lista.appendChild(sor);
  });
}

function the(){
  let a2 = Array.from(array.quotes);
  lista.innerHTML = '';
  lista2.innerHTML = '';
  p.innerHTML = "";

  a2.map((a) => {
    return a.quote.replace("The ","<b>The</b> ").replace("the ","<b>the</b> ");
  })
  .forEach((a) => {
    let sor = document.createElement('li');
    sor.innerHTML = a;
    lista2.appendChild(sor);
  })
}

function hossz(){
  let a3 = Array.from(array.quotes);
  lista.innerHTML = '';
  lista2.innerHTML = '';
  p.innerHTML = "";
  
  p.innerText = a3.map((a) => {
    return a.quote.length;
  }).join();
}

function darab(){
  // Kevin Kruse (tesztelésre)
  let a4 = Array.from(array.quotes);
  let szerzo = document.getElementById('inputSzerzo');
  let eredmeny = document.getElementById('inputDarabszam')
  let db = 0;
  let pontos = document.getElementById('pontos');

  if(pontos.checked){
    a4.forEach((a) => {
      if(a.author == szerzo.value){
        db++;
      }
    })
  }
  else{
    a4.forEach((a) => {
      if(a.author.includes(szerzo.value)){
        db++;
      }
    })
  }


  eredmeny.value = db;
}

document.addEventListener('DOMContentLoaded',() => {
  document.getElementById('osszes').addEventListener('click',osszes);
  document.getElementById('the').addEventListener('click',the);
  document.getElementById('hossz').addEventListener('click',hossz);
  document.getElementById('inputSzerzo').addEventListener('input',darab)
  document.getElementById('pontos').addEventListener('click',darab)
})