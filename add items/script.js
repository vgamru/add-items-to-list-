const myform = document.getElementById("myform")

myform.addEventListener("submit", (data) => {
  data.preventDefault()
  const myinput = document.getElementById("myinput")
  const gotinput = myinput.value

  const para = document.createElement("p")
  const content = document.createTextNode(gotinput)
  para.appendChild(content)

  const mylist = document.getElementById("mylist")
  mylist.appendChild(para)
})

