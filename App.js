const section=document.querySelectorAll('.row>section')
const row=document.querySelector('.row')

// create li length of section 
for(i=0; i<section.length; i++){
    let li=document.createElement('li')
    li.classList.add('Btnnavigation')
    document.querySelector('.Navigation').appendChild(li)
}


// added class on to li active 
const text=document.querySelectorAll('.text')
const text2=document.querySelectorAll('.text2')
const li=document.querySelectorAll('.Navigation>li')
li.forEach((item , index)=>{
    li[0].classList.add('active')
    item.addEventListener('click' , ()=>{
        for(i=0; i<li.length; i++){
            li[i].classList.remove('active')
        }
        item.classList.add('active')

        row.style.transform='translateX(-'+(index*100)+'%)'

        for(i=0; i<text.length; i++){
            text[i].classList.remove('show')
        }
        for(j=0; j<text2.length; j++){
            text2[j].classList.remove('show')
        }
        text[index].classList.add('show')
        text2[index].classList.add('show')
    })
})