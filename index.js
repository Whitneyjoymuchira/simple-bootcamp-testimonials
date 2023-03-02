let next=document.querySelectorAll('.next')
let previous=document.querySelectorAll('.prev')
let button=document.querySelector('.button')
let secondTestimonial=document.querySelector('.second-testimonial')
let firstTestimonial=document.querySelector('.first-testimonial')

secondTestimonial.classList.add('hide')


const slideChange=function(){

    if(secondTestimonial.style.display='hide'){
        secondTestimonial.style.display='block'
        firstTestimonial.style.display='hide'
    }
else if(firstTestimonial.style.display='hide'){
        firstTestimonial.style.display='block'
        secondTestimonial.style.display='hide'
    }else{
        secondTestimonial.style.display='none'
    }
    

}

previous.forEach(item=>item.addEventListener('click', slideChange))
next.forEach(item=>item.addEventListener('click', slideChange))