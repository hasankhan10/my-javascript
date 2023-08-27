const form = document.querySelector("form")
form.addEventListener("submit",function(event){
    event.preventDefault()
    const height = parseFloat(document.querySelector("#height").value)
    const weight = parseFloat(document.querySelector("#weight").value)

    if (isNaN(height) || isNaN(weight)) {
        alert("PLease enter valid height and weight.")
        return;
    }
    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    const result = document.querySelector("#result")
    result.querySelector("span").textContent = bmi

    const obj = document.querySelector("#obj")

    if (bmi < 18.5) {
        
        obj.querySelector("span").innerText = "Underweight"
    }

    else if (bmi >= 18.5 && bmi < 24.9) {

        obj.querySelector("span").innerText = "Helthy weight"
    }
    else if (bmi >= 25 && bmi < 29.9) {

        obj.querySelector("span").innerText = "over weight"
    }
    else{
        obj.querySelector("span").innerText = "Obese"
    }
    
})
