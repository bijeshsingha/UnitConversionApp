/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


let btnEl = document.getElementById("convertBtn")
let inputValue = 0


btnEl.addEventListener("click", function() {
    
    inputValue = document.getElementById("input-el").value
    
    document.getElementById("resutlLen").textContent = 
    `
    ${inputValue} meters = ${(inputValue*3.281).toFixed(3)} feet | ${inputValue} feet = ${(inputValue/3.281).toFixed(3)} meters
    `
    
    document.getElementById("resutlsVol").textContent = `
    ${inputValue} liters = ${(inputValue*0.264).toFixed(3)} gallons | ${inputValue} gallons = ${(inputValue/0.264).toFixed(3)} liters
    `
    
    document.getElementById("resutlsMass").textContent = `
    ${inputValue} meters = ${(inputValue*2.204).toFixed(3)} feet | ${inputValue} feet = ${(inputValue/2.204).toFixed(3)} meters
    `
    
})
