const nameField = '[id="name"]';
const emailField = '[id="email"]';
const passwordField = '[id="password"]';
const rePassword = '[id="confirm-password"]';
const btnRegister = '[type="submit"]';
const btnGoogle = '#__next > div.flex > div > div.lg\:p-8 > div > button';
const h5Alert = '#__next > div.flex > div > div.lg\:p-8 > div > div.relative.w-full.rounded-lg.border.p-4.\[\&\>svg\~\*\]\:pl-7.\[\&\>svg\+div\]\:translate-y-\[-3px\].\[\&\>svg\]\:absolute.\[\&\>svg\]\:left-4.\[\&\>svg\]\:top-4.\[\&\>svg\]\:text-foreground.bg-green-600.text-white > h5';
const divAlert = '#__next > div:nth-child(1) > ol > li > div';



export const create = (name, email, password)=>{
    cy.get(nameField).type(name)
    cy.get(emailField).type(email);
    cy.get(passwordField).type(password);
    cy.get(rePassword).type(password);
    cy.get(btnRegister).click();
    validateElement('Alert');
}

function validateElement(element){
    const validate = {
        'wrong': divAlert,
        'Alert': h5Alert
    }[element]
    cy.get(validate, {timeout: 3000}).should('be.visible');
}
export { validateElement }


const x = Math.floor(Math.random() * 100);

export const createEmail = () => {
    let email = () => "test"+x+"@teste.com";
    return email;
}

export const createSameUser = (name, email, password) => {
    //function to create the same user again and see the error message
    cy.get(nameField).type(name)
    cy.get(emailField).type(email);
    cy.get(passwordField).type(password);
    cy.get(rePassword).type(password);
    cy.get(btnRegister).click();
    validateElement('divAlert');
}
