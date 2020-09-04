let car = {type: "Toyota", year: "2005", price:"$12,000"}
let car1 = {type: "Ford", year: "2015", price:"$14,000"}
let car2 = {type: "Tesla", year: "2009", price:"$29,000"}
let car3 = {type: "Jeep", year: "2020", price:"$52,000"}
let car4 = {type: "Range Rover", year: "2019", price:"$62,000"}

let state = {
    pageHeader: "Vehicles for Sale",
    lot: [car, car1, car2, car3, car4],
};

function renderLot() {
carStr = "";
state.lot.forEach(function(car, index) {
    carStr += `
    <div class="carDiv">
    ${car.type} made in ${car.year} is priced at ${car.price}
    <div class="button"><span class="span" data-index='${index}' onclick='discountCar(this)'>SALE PRICE</span></div>
    <div class="button"><span class="span" onclick='carSold(${index})'>SOLD</span></div>
    </div>`;
});
return carStr;
}

function carSold(clickedIndex) {
    console.log(clickedIndex);
    let newLot = state.lot.filter(function(car, index) {
        console.log("index: ", index);
        console.log("clickedIndex: ", clickedIndex);
        console.log(clickedIndex != index);
        return clickedIndex != index;
    });
    state.lot = newLot;
    render();
}
function discountCar(carDiv) {
    let index = carDiv.dataset.index;
    let car = state.lot[index];
    console.log(car);
    let price = prompt("Enter Discounted Price of the Vehicle");
    car.price = price;

    render();
}

function addCar() {
    let car = {};

    let type = prompt("Enter Car Name");
    car.type = type;

    let year = prompt("Enter year of Car");
    car.year = year;
    
    let price = prompt("Enter Price for Car");
    car.price = price;

    state.lot.push(car)

    render()
}

function render() {
    htmlString = `<div>
                    <h1>${state.pageHeader}</h1>
                    <div class="span" onclick='addCar()'>Add a Car to the Lot</div>
                    ${renderLot()}
                    </div>`;
    
    renderLot();
                    
    appElement = document.getElementById("app");
    appElement.innerHTML = htmlString;
    
}

render();