'use strict'

var form= document.getElementById('userform');
var table= document.getElementById('table');

var cars=[];

function Car(model , year ,manu){
    this.model=model;
    this.year=year;
    this.manu=manu;
    this.price;
    cars.push(this);


}

Car.prototype.displayPrice=function(){
    this.price=random();
}


function random(){
    var randomNumber =Math.floor(Math.random()*(100000-7000 +1))
  return randomNumber;
}
var tbody=document.getElementById('tBody');
Car.prototype.render=function(){
    


    for(var i=0 ;i<cars.length ;i++){
    var tr =document.createElement('tr');
    tbody.appendChild(tr);

    var td1=document.createElement('td');
    td1.textContent=cars[i].model;
    tr.appendChild(td1);


    var td2=document.createElement('td');
    td2.textContent=cars[i].year;
    tr.appendChild(td2);


    var td3=document.createElement('td');
    td3.textContent=cars[i].price;
    tr.appendChild(td3);

    var td4=document.createElement('td');
    td4.textContent=cars[i].manu;
    tr.appendChild(td4);

    var td5=document.createElement('td');
    td5.textContent="x";
    td5.setAttribute('id',i);
    // td5.addEventListener('click', remove)
    tr.appendChild(td5);
    }


}

function clear(){
   tbody.textContent=""
}


function save(){
    localStorage.setItem('carsarray',JSON.stringify(cars));
}


function get(){
    cars = JSON.parse(localStorage.getItem("carsarray"));
}

form.addEventListener('submit',addForm);
function addForm(event){
    event.preventDefault();
    if (localStorage.getItem('carsarray')){
        get();
    }

    var name= event.target.carModel.value;
    var year=event.target.ModelYear.value;
    var manuf=event.target.manu.value;

    var newcar= new Car(name,year,manuf);
    newcar.displayPrice();
    clear();
    newcar.render();
    save()
   remove(event.target.id)
//    save();
//    clear();
//    if (localStorage.getItem('carsarray')){
//     get();
//     render();
// }
  

}
 
    
// function remove(event){
//     remove(event.target.id);

//     }
function remove(num){
cars.splice(num,1)
}