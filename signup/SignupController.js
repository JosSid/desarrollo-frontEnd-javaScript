import { pubSub } from "../pubSub.js";

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
    if (passwordElement.value.length < minLength) {
      pubSub.publish(pubSub.TOPICS.TWEET_LOAD_ERROR, `La contraseña debe tener más de ${minLength} caracteres`)
    }
  }
}

// comportamiento de nuestro formulario
/*
  - El botón aparecerá deshabilitado hasta que el formulario no esté relleno.
  - El usuario y la password NO pueden estar vacíos.
  - La contraseña debe tener más de 6 caracteres.
  - La contraseña debe tener letras y números.
*/
