
const button=document.getElementById('choice')
const paragraph=document.getElementById('text')
const textContent = paragraph.innerText
button.addEventListener('click', function(){paragraph.innerText='Hello, World!'})


const button2=document.getElementById('reverse')

button2.addEventListener('click', function(){paragraph.innerText= textContent})

