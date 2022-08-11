//name
//image
//status
//species
 //mudaPersonagem=Math.floor((Math.random() *  (3 - 1 + 1))) +1;


 async function mudaPersonagem(){

    for(let i = 1; i<=3;i++){
        let x = Math.floor(Math.random() *(826 - 1)) + 1;
      fetch('https://rickandmortyapi.com/api/character/'+ x)
    
        .then(function(response){
            return response.json();
        })
        .then(function(dados){
            console.log(dados.image, dados.name, dados.status, dados.species)
            document.getElementById("imagem" + i).src = dados.image;
            document.getElementById("nome" + i).innerText = dados.name;
            document.getElementById("status" + i).innerText = dados.status;
            document.getElementById("especie" + i).innerText = dados.species;
        });
    }
}

 
/*function mudaPersonagem(){
   for(let i = 1; i <=3;i++){
     let x = Math.floor(Math.random() *(826 - 1)) + 1;
     fetch('https://rickandmortyapi.com/api/character/'+ x)
    .then((response) =>  response.json( ))
    .then((data) => console.log(data))



function mudaPersonagem (data){
    console.log(data.image, data.name, data.status, data.specie)
    document.getElementById("image1" + i) 
    document.getElementById("name1" + i).value = name1.name;
    document.getElementById("status1" + i).value = status1.status;
    document.getElementById("especie1" + i).value = especie1.especie;

}  
        
    }}

   
mudaPersonagem();*/

   

 
       
   


   

    /* ----------comunica com a api devolve os 3 persomagens e a cada vez que o botão é assionado gera mais 3 requisições
    const url =  "https://rickandmortyapi.com/api/character/";
    async function mudaPersonagem(){
for (let i = 0; i < 3; i++ ){
let x = Math.floor((Math.random() * 3) + 1);
    
    fetch(url)
        const response = await fetch(url);
        const data = await response.json();


        console.log(response);
        console.log(data);
    }}

   
    const nameElement = document.querySelector("#i1");
    const statusElement = document.querySelector("#status1");
    const especieElement = document.querySelector("#especie1");
    mudaPersonagem();*/


/*async function mudaPersonagem(){
fetch(url)
    const response = await fetch(url);
    const data = await response.json();
    console.log(response);
    console.log(data);

    imageElement.classList.add("hide");
data.map((post) =>{
const image = document.createElement("img");    
const name = document.createElement("p");
const status = document.createElement("p");
const species = document.createElement("p");

    image.innerText = post.image;
    species.innerText = post.species;
    name.innerText = post.name;
    status.innerText = post.status;
link.innerText ="Ler"
    link.setAttribute("href", `/post.html?id=${post.id}`);
})
   
}
    const imageElement = document.querySelector("#imagemApi1");
    const nameElement = document.querySelector("#i1");
    const statusElement = document.querySelector("#status1");
    const especieElement = document.querySelector("#especie1");
    
    mudaPersonagem();*/


    
/*.then((data) => console.log(data))*/



/*const url =  "https://rickandmortyapi.com/api/character/";
function mudaPersonagem(){
    fetch(url)
    .then((response) => response.json( ))
    .then((data) => console.log(data))
}*/

/*function mudaPersonagem() {
function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById('info');
const url =  "https://rickandmortyapi.com/api/character/";

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let info = data.results;
  return info.map(function(info) {
    let li = createNode('li');
    let img = createNode('img');
    let span = createNode('span');
    img.src = info.picture.medium;
    span.innerHTML = `${info..first} ${info.name.last}`;
    append(li, img);
    append(li, span);
    append(ul, li);
  })
})
.catch(function(error) {
  console.log(error);
});
}
*/





/*
const url =  "https://rickandmortyapi.com/api/character/";
function mudaPersonagem(){
    fetch(url)
    .then((response) => response.json( ))
    .then((data) => console.log(data))
 }*/




/*function mudaPersonagem(){
    fetch(url)
    .then((response) => response.json( ))
    //.then((data) => console.log(data))
    .then((data) => {
const list = document.querySelector('#info')
  data.products.map((item) => {
    const li  = document.createElement('li');
    li.setAttribute('id', item.id)
    li.innerHTML = item.title;
    list.appendChild(li);})
})
}*/




/*function mudaPersonagem(){
       for (let i = 0; i < 3; i++ ){
        fetch(url)
        .then(data => {
            return data.json();
            })
            .then(post => {
            console.log(post.nome1);
            }); 
    
    }
    var elemento = document.getElementById("imagemApi1");
    var elemento = document.getElementById("nome1");
    var elemento = document.getElementById("status1");
    var elemento = document.getElementById("especie1");
    var elemento = document.getElementById("imagemApi2");
    var elemento = document.getElementById("nome2");
    var elemento = document.getElementById("status2");
    var elemento = document.getElementById("especie2");
    var elemento = document.getElementById("imagemApi1");
    var elemento = document.getElementById("nome3");
    var elemento = document.getElementById("status3");
    var elemento = document.getElementById("especie3");
    
}
mudaPersonagem();*/
