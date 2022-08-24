const g = console.log
let list = document.getElementById("myList");
let arr = []
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const cards = document.querySelector('.cards')

weatherForm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const location = search.value
    fetch(`http://localhost:3000/weather?address=${location}`).then((res) =>{
    res.json().then((data) =>{
        g(data)
        arr.push(data)

        arr.forEach((item)=>{
            list.innerText = ``;

            setTimeout(()=>{
                let li = document.createElement("li");
                li.innerText = `${item.country} and your temprature is ${item.temperature}`;
                list.appendChild(li);
            },2000)
            
        })
        
    })
})
})



//

//
