//Inicialización del carrusel con Tiny Slider
import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider.js";
var slider = tns({
    container: '.my-slider',
    gutter: 20,
    items: 1,
    responsive: {
        768: {
          items: 2
        },
        1024: {
            items: 3
        },
        1280: {
            items: 4
        },
    },
    slideBy: 'page',
    autoplay: true,
    controls: false,
    nav: false,
    autoplayButtonOutput: false
});


//Mostrar/Ocultar menu mobile
const mobileBtn = document.getElementById('mobile-btn');
const menu = document.getElementById('navbar');
mobileBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

//Validación y envio de formulario de Login
const loginForm = document.getElementById('loginForm'),
nameLogin = document.querySelector(".nameLogin"),
telLogin = document.querySelector(".telLogin"),
emailLogin = document.querySelector(".emailLogin");
var isValidateL = false;

loginForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    checkErrorLogin();
    if (isValidateL){
        login();
    }
})

//Función para validar los campos del formulario de Login
function checkErrorLogin() {
    if(nameLogin.value === "" && telLogin.value==="" && emailLogin.value === ""){
        errorMsg("El nombre es obligatorio", nameLogin);
        errorMsg("El teléfono es obligatorio", telLogin);
        errorMsg("El email es obligatorio", emailLogin);
    }
    else if (nameLogin.value === "") {
        errorMsg("El nombre es obligatorio", nameLogin);
    } else  if (telLogin.value === ""){
        errorMsg("El teléfono es obligatorio", telLogin);
    } else  if (emailLogin.value === ""){
        errorMsg("El email es obligatorio", emailLogin);
    }
    else if (!validateEmail(emailLogin.value)){
        errorMsg("El email es inválido", emailLogin);
    }
    else{
        isValidateL = true;
    }
}

function login() {
    console.log('Inicia sesión');
}

//Validación y envio de formulario de contacto
const contactForm = document.getElementById('contactForm'),
name = document.querySelector(".name"),
company = document.querySelector(".company"),
email = document.querySelector(".email");
var isValidate = false;
const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

contactForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    checkError();
    if (isValidate){
        sendContact();
    }
})


//Función para validar los campos del formulario de Contacto
function checkError() {
    if (name.value === "") {
        errorMsg("El nombre es obligatorio", name)
    } else  if (company.value === ""){
        errorMsg("La compañía es obligatorio", company)
    } else  if (email.value === ""){
        errorMsg("El email es obligatorio", email)
    }
    else if (!validateEmail(email.value)){
        errorMsg("El email es inválido", email)
    }
    else{
        isValidate = true;
    }
}

function errorMsg(msg, input) {
    const parentElement = input.parentElement;
    const message = parentElement.querySelector(".error");
    message.innerText = msg;
    message.classList.remove("hidden");
    message.classList.add("block");
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};

function sendContact() {
    const msgEnviado = document.querySelector('.enviado');
    msgEnviado.innerHTML = 'Se envió correctamente.'
    setTimeout(() => {
        msgEnviado.innerHTML = '';
    }, 2000);
}

//Función para traer los primeros 3 datos del blog
const showBlog = async() => {
    const blogList = [];
	try {
		const respuesta = await fetch(`https://jsonplaceholder.typicode.com/posts`);
	
        if(respuesta.status === 200){
			const datos = await respuesta.json();
            let blog = '';
            datos.forEach(info => {
                if (blogList.length < 3) {
                    blogList.push(info);
                    blog += `
                        <div class="blog-card">
                            <h3 class="font-DMSans font-bold mb-2 text-2xl">${info.title}</h3>
                            <p class="font-DMSans font-normal mb-2 text-base">${info.body}</p>
                            <a href="#" title="Learn more" class="font-DMSans font-bold mb-2 text-base hover:text-accent-color">Learn more</a>
                        </div>
                    `;
                    if (blog !== undefined) {
                        document.getElementById('blog-container').innerHTML = blog;
                    }
                }
            });

		} else if(respuesta.status === 404){
			console.log('El blog que buscas no existe');
		} else {
			console.log('Ocurrio un error');
		}

	} catch(error){
		console.log(error);
	}

}

showBlog();