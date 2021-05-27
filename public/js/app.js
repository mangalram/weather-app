console.log('client side javascrdipt working')

// fetch('http://localhost:3000/weather?address=boston').then((response)=>{
//     response.json().then((data)=>{
//         console.log(data)
//     })
// })


const weatherForm=document.querySelector('form')
const search =document.querySelector('input')
const messageone=document.querySelector('#message-1')

messageone.textContent='From Javascript'
weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location=search.value
    fetch('/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
       if (data.error){
       console.log(data.error)
    } 
    messageone.textContent=data.forcast
    console.log(data)    
})
})
    
    
    //console.log(location)
})