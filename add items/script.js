let myform = document.getElementById("myform")
let mytext = document.getElementById("mytext")
let mylist = document.getElementById("mylist")

myform.addEventListener("submit",displayText )

function displayText(data){
  data.preventDefault()
  // console.log(mytext.value)
  createlist(mytext.value)
  mytext.value=""
 
}

createlist=(d)=>{
  let mytemplate = `<li>${d}</li>`
  mylist.insertAdjacentHTML("afterbegin",mytemplate)
  //afterbegin, beforeend, beforebegin, afterend
}