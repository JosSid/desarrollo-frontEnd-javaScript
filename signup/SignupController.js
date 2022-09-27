import { pubSub } from "../pubsub.js";

export class SignupController {
    constructor(nodeElement){
        this.signupElement = nodeElement;

        this.subscribeToEvents()
    };

    subscribeToEvents() {
        this.signupElement.addEventListener('submit', (event) => {  event.preventDefault()
            this.validatePassword()
        });

        const createUserInputElements = Array.from(this.signupElement.querySelectorAll('input'));
        const createUserButtonElement = this.signupElement.querySelector('#createUserButton')
        createUserInputElements.forEach(createUserInputElement => {
            createUserInputElement.addEventListener('input', () => {
                const areInputsFilled =createUserInputElements.every(inputElement => inputElement.value);
                if(areInputsFilled) {
                    createUserButtonElement.removeAttribute('disabled')
                }else{
                    createUserButtonElement.setAttribute('disabled', '')
                }
                
            })
        })
    };

    validatePassword() {
        const passwordElement = this.signupElement.querySelector('#password');
        const minLength = 6;
        console.log(passwordElement.value)
        if(passwordElement.value.length < minLength) {
            pubSub.publish(pubSub.TOPICS.TWEET_LOAD_ERROR, 'La contraseña debe tener al menos 6 caracteres')
        }
    }
};