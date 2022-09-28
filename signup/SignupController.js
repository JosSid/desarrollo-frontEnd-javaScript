import { pubSub } from "../pubSub.js";
import { createApiUser, loginApiUser } from "./signupProvider.js";

export class SignupController {
  constructor(nodeElement) {
    this.signupElement = nodeElement;

    this.subscribeToEvents()
  }

  subscribeToEvents() {
    this.signupElement.addEventListener('submit', (event) => {
      event.preventDefault()
      this.validatePassword()
    })

    const createUserInputElements = Array.from(this.signupElement.querySelectorAll('input'))
    const createUserButtonElement = this.signupElement.querySelector('#createUserButton')

    createUserInputElements.forEach(createUserInputElement => {
      createUserInputElement.addEventListener('input', () => {
        const areInputsFilled = createUserInputElements.every(inputElement => inputElement.value)
        if (areInputsFilled) {
          createUserButtonElement.removeAttribute('disabled')
        } else {
          createUserButtonElement.setAttribute('disabled', '')
        }
      })
    })
  }

  validatePassword() {
    const passwordElement = this.signupElement.querySelector('#password')
    const minLength = 6;
    if (passwordElement.value.length <= minLength) {
      pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, `La contraseña debe tener más de ${minLength} caracteres`)
    }

    const regExp = new RegExp(/^[a-zA-Z0-9]*$/)

    if(regExp.test(passwordElement.value)){
      this.createUser()
    }else{
      pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, `La contraseña debe tener minusculas,mayusculas o numeros`)
    }
  }

  async createUser() {
    const formData = new FormData(this.signupElement);
    const username = formData.get('username');
    const password = formData.get('password');

    try {
      await createApiUser(username, password);
      loginApiUser(username,password)
    } catch (error) {

    }
    
  }
}

// comportamiento de nuestro formulario
/*
  - El botón aparecerá deshabilitado hasta que el formulario no esté relleno.
  - El usuario y la password NO pueden estar vacíos.
  - La contraseña debe tener más de 6 caracteres.
  - La contraseña debe tener letras y números. --> /^[a-zA-Z0-9]*$/
*/
