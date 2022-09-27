
var btntext = document.querySelector('.innertext')

var btnhtml = document.querySelector('.innerhtml')

var content = document.querySelector('.content')

console.log(btntext,btnhtml,content)

var mystring = `lorem ipsum dolor sit amet, consectetur adipiscing elit.
<p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<img src="https://picsum.photos/200/300" alt="random image">`



btntext.addEventListener('click',()=>{
    content.innerText = mystring
})

btnhtml.addEventListener('click',()=>{
    content.innerHTML = mystring
})