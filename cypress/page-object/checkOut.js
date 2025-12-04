const nameField = 'input[name="name"]';
const emailField = 'input[name="email"]';
const phoneField = 'input[name="phone_number"]';
const addressField = 'input[name="street_address"]';
const countryField = 'button[aria-haspopup="dialog"]';
const listCountryField = '[id=":r17:"]';
const stateField = 'input[name="state"]';
const cityField = 'input[name="city"]';
const zipCodeField = 'input[name="zip_code"]';
const btnContinue = 'button[type="submit"]';

export const fillCheckOutForm = (name, email, phone, address, country, state, city, zip) =>{
    cy.get(nameField).type(name);
    cy.get(emailField).type(email);
    cy.get(phoneField).type(phone);
    cy.get(addressField).type(address);
    cy.get(countryField).click();
    cy.get(listCountryField).contains(country).click();
    cy.get(stateField).type(state);
    cy.get(cityField).type(city);
    cy.get(zipCodeField).type(zip);
}

export const clickBtn = () =>{
    cy.get(btnContinue).click();
    cy.get('').should('be.visible');
}