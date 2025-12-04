const emailField = '[type="text"]';
const passwordField = '[type="password"]';
const btnLogin = '#__next > div.flex > div > div.lg\:p-8 > div > form > button';
const btnLoginGoogle = '#__next > div.flex > div > div.lg\:p-8 > div > button';
const btnRegister = 'a[href="/register"]';
const linkTerms = 'a[href="/terms"]';
const linkPolicy = 'a[href="/privacy"]';

export const doLogin = (email, password)=>{
    cy.get(emailField).type(email);
    cy.get(passwordField).type(password);
    cy.get(btnLogin).click();
    cy.get(/*this part i cant acess here*/).should('be.visible')
}

export const clickRegister = () =>{
    cy.get(btnRegister).click();
}

export const wrongLogin = (email, password) => {
    cy.get(emailField).type(email);
    cy.get(passwordField).type(password);
    cy.get(btnLogin).click();
    cy.get("", {timeout: 3000}).should('be.visible');
}
