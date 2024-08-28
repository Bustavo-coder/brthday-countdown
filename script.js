"use strict"

const day = document.querySelector(".date")
const month = document.querySelector(".month")
const year =  document.querySelector(".year")
const btn = document.querySelector(".btn")
const dayResult = document.querySelector(".dayresult")
const hours = document.querySelector(".hours")  
const mins = document.querySelector(".mins")
const secs = document.querySelector(".secs")
const txt = document.querySelector(".txt")

const date = new Date()
const dateCall = () =>{
    const value = `${year.value}-${month.value}-${day.value}`
    // storing the input date in a sting
    console.log(value)
    const birtDay = new Date(`${value}`)
    // settng the date to the inputted value

    const dffrence = Math.abs(date - birtDay)
    const dayscal = Math.ceil(dffrence / (1000 * 60 * 60 * 24 ))
    console.log(dayscal)
    dayResult.textContent = dayscal
    // settng the days to the result of the birtDay

    // Hours 
    const calhours = Math.ceil((dffrence %(1000* 60* 60*24))/(1000*60*60))
    hours.textContent = calhours
    console.log(calhours)

    const calmns = Math.ceil((dffrence %(1000* 60* 60))/(1000*60))
    mins.textContent = calmns
    console.log(calmns)

    const calsecs = Math.ceil((dffrence %(1000 * 60))/(1000))
    secs.textContent = calsecs
    console.log(calsecs)
txt.textContent = "Your Birthday is in"
}
btn.addEventListener("click", function(){
    if(year.value > 0 && month.value > 0 && day.value > 0){
    setInterval(dateCall,1000)
    }else{
        alert("Input Your birthday")
    }
})


// let seconde = 60
// let mnute = 60
// mins.textContent  = mnute
// setInterval(function(){
//     if(seconde > 0){
// //         console.log(seconde--)
// //         secs.textContent = seconde

// //     }else{
// //         console.log(mnute--)
// //         mins.textContent = mnute

// //     }
// // },1000)