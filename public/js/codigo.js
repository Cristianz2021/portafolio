document.addEventListener("DOMContentLoaded", () => {
        typed();
        /*Effect scroll*/
          effectScroll();
        /*Scroll-Event-Cards*/ 
          CardsEvent();
        /*Validation-Form*/
          validationForm();
        /*Navegation*/
         effectNavbar();

//ScrollReveal
ScrollReveal().reveal('.skill', { delay: 500 });
ScrollReveal().reveal('.project', { delay: 500 });
ScrollReveal().reveal('.form', { delay: 500 });
ScrollReveal().reveal('.footer', { delay: 500 });
});
/*Typed*/
function typed() {
    const typed = new Typed('.typed', {
        strings: [
        '',
        'Cristian Zamora',
        'Desarrollador web',
        ],
        
        typeSpeed: 50,
		startDelay: 300,
		backSpedd: 60,
		backDelay: 500,
		loop: true,
		loopCount: false
    });
}

/*Effect scroll*/
function effectScroll(){
    const header = document.getElementById('header');
    const text = document.getElementById('text_scroll');
    const img = document.getElementById('img_fondo');

    const scrollEvent = (entradas, observador) =>{
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            img.classList.add('efecto__imagen');
            text.classList.add('efecto__texto');
          }else{
             img.classList.remove('efecto__imagen');
             text.classList.remove('efecto__texto');
         }
      }); 
    }
    const observador = new IntersectionObserver(scrollEvent, {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    });
    observador.observe(header);    
}

/*Scroll-Event-Cards*/ 
function CardsEvent() {
  const cardHability = document.getElementById('hability');
  const card = document.querySelectorAll('.card');

  const scrollEvent = (entradas, observer) =>{
		entradas.forEach((entrada) =>{	
		 card.forEach((cardsAll, i) =>{
		 	if (entrada.isIntersecting) {
			  card[i].classList.add('cards_effect');	
			}else{
			  card[i].classList.remove('cards_effect');
	   	}
		 });
	  
	  });
    
  }
  const observador = new IntersectionObserver(scrollEvent, {
        root: null,
        rootMargin: "0px",
        threshold: 0.8
    });
    observador.observe(cardHability);  
}

/*Validation-Form*/
function validationForm() {
  const form = document.getElementById('form');
	const email = document.getElementById('email');
	const name = document.getElementById('name');
	const message = document.getElementById('message');

  form.addEventListener('submit', e => {
    let warning = '';
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let error = false;

    if (!regexEmail.test(email.value)) {
      warning += `Por favor, coloque correctamente el email con su caracteres requerido.`;
      error = true;
    }

    if(name.value.length < 5){
      warning += `Debe colocar su nombre completo.<br>`;
		  error = true;
    }

    if(message.value.length < 10){
      warning += `Ups el mensaje debe ser mayor para mejor entendimiento.<br>`;
      error = true; 
    }
   
    if (error) {
	    e.preventDefault();	
	  	Swal.fire({
	  	icon: 'error',
	  	html: warning
		  });	
	  }
  });
} 
/*Navegation*/
function effectNavbar() {
  const nabvarIcon = document.querySelector('.main_var');
  const navMenu = document.querySelector('.nav-main__menu');

  nabvarIcon.addEventListener('click', () =>{
    navMenu.classList.toggle('active');
  });
}