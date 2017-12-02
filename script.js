var carRental = { //an object that holds the car info
    cars: [
    {
        type: "Economy", 
        price: "$60",
        available: 10
    },
    {
        type: "SUV",
        price: "$100",
        available: 10
    },
    ]
};

//*WORKS* adds the 2 car types - economy and SUV to a dropdown menu in HTML
for (var i = 0; i < carRental.cars.length; i++) {  // a for loop with a variable i that loops through the object above
    var option = document.createElement("OPTION"); //on the next line, this var becomes filled with the desired car info
    option.text = carRental.cars[i].type; //this assigns car data to the options in the dropdown
    document.getElementById("dropdown").appendChild(option); //actually adds the options to the dropdown with the append method
    option.setAttribute("value", i); //sets the value of the options with 0 and 1; value is for us not for the user so name not important
    option.setAttribute("id", "car" + i); //gives the economy and SUV options the ID of car0 and car1 IDs
    // console.log(option.value);
}

document.getElementById("dropdown").onchange = function(){ //*WORKS* this connects the dropdown selection with displaying the data from the car object using an onchange function
    var select = document.getElementById("dropdown"); //establishes a variable within the function (think scope)
    // console.log(select.value);
    document.getElementById("price").innerHTML = carRental.cars[select.value].price; 
    document.getElementById("available").innerHTML = carRental.cars[select.value].available;
}; //overall,this portion of code, tells the browser to watch for change of the dropdown menu.  When there is a change, the price and availability display.

function rentCar() {
    var val = document.getElementById("dropdown").value;
    if (carRental.cars[val].available == 0) {
        alert(" No Cars !");
        event.preventDefault();
        return false; //stops the function
    }
    if (!document.getElementById("confirmation").checked) {
        alert("You must agree to the terms and conditions");
        event.preventDefault();
	}
    else {
        carRental.cars[val].available--;
        //redisplay cars
        document.getElementById("available").innerHTML = carRental.cars[val].available;
        //form validation
        var name = [];
        var car = [];
        name.push(document.getElementById("renterName").value);
        car.push(carRental.cars[val].type);
        console.log(name);
        console.log(car);
        //show reserve message
        alert("Thanks for renting boi");
        event.preventDefault();
        }
}