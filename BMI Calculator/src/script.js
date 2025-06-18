const form = document.querySelector("form")
const under_Weight = document.querySelector("#under-w");
const normal_Weight = document.querySelector("#normal-w");
const over_Weight = document.querySelector("#over-w");
const obesity = document.querySelector("#obesity-w");
const error = document.querySelector("#error");

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const height = parseInt(document.querySelector("#height").value);

    const weight = parseInt(document.querySelector("#weight").value);

    document.querySelectorAll(".weight").forEach( w => w.classList.add("hidden")) ;

    if (height === '' || isNaN(height) || height <= 0 || height >300 || weight === '' || isNaN(weight) || weight <= 0 || weight >500 ) {
        error.classList.remove("hidden") ;
    }

    else {
        const bmi = ((weight) / ((height / 100) ** 2)).toFixed(1);

        if (bmi < 18.60) {
            under_Weight.classList.remove("hidden");
        }
        else if (bmi < 24.90) {
            normal_Weight.classList.remove("hidden");
        }
        else if (bmi < 30.00) {
            over_Weight.classList.remove("hidden");
        }
        else {
            obesity.classList.remove("hidden");
        }
    }

});

