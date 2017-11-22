var carRental = {  
    cars: [
    {
        type: "Economy", 
        price: "$60",
        available: 15
    },
    {
        type: "SUV",
        price: "$100",
        available: 10
    },
    ]
};

//this adds the 2 car types - economy and SUV to the dropdown - *WORKS*
for (var i = 0; i < carRental.cars.length; i++) {    
    var options = document.createElement("OPTION");
    options.text = carRental.cars[i].type;
    document.getElementById("dropdown").appendChild(options);
    options.setAttribute("value", i); //gives the options economy and SUV the value of 0 and 1; value is for us not for the user
    options.setAttribute("id", "car" + i); //gives the economy and SUV options the car0 and car1 IDs
    //would like to add a hidden option to the dropdown but do not know how
}
//this nameless function is assigned to the onchange event handler 
//should show the car price and amount available when selected DOES NOT WORK
document.getElementById("car0").onchange = function(){
        document.getElementById("available").innerHTML = carRental.cars[0].available;
        document.getElementById("price").innerHTML = carRental.cars[0].price;
    };
    
document.getElementById("car1").onchange = function(){
        document.getElementById("available").innerHTML = carRental.cars[1].available;
        document.getElementById("price").innerHTML = carRental.cars[1].price;
        
    };
