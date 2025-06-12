console.log("Enter temperature you want to change : Celcius(c) \t Fahrenheit(f)");

let unit = prompt("Enter Degree :");
let temp = Number(prompt("Enter Your Temperature :"));
let userunit = unit.toLowerCase();
let userTemp = temp;

if (!unit || isNaN(userTemp)) {
    console.log(`Error! You have entered wrong Temperature.`)
}

else if (userunit === "c" && userTemp <= -273.15) {
    console.log(`Error! The Temperature you have entered is Lower than Absolute Zero`)
}

else if (userunit === "f" && userTemp <= -459.67) {
    console.log(`Error! The Temperature you have entered is Lower than Absolute Zero`)
}

else {

    if (userunit === "c") {

        let Fahrenheit = Number(((9 / 5 * userTemp) + 32).toFixed(2));
        console.log(`Given Temperature is : ${userTemp}°C \t Changed Temperature is : ${Fahrenheit}°F`);

    }

    else if (userunit === "f") {

        let Celsius = Number(((userTemp - 32) * 5 / 9).toFixed(2));
        console.log(`Given Temperature is : ${userTemp}°F \t Changed Temperature is : ${Celsius}°C`);

    }

    else {

        console.log(`Error!  You must enter "C" or "F"`);

    }


}
