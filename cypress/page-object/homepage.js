const searchField = '#__next > div.border-b.border-\[\#DEDEDE\] > div > div > div:nth-child(1) > div';
const btnExploreSneakers = '[id="radix-:R6em:-trigger-radix-:R1b6em:"]';
const btnExploreBrands = '[id="radix-:R6em:-trigger-radix-:R2b6em:"]';
const btnCart = '#__next > div.border-b.border-\[\#DEDEDE\] > div > div > div:nth-child(2) > div.cursor-pointer.mr-4';
const btnLogin = 'a[href="/login"]';
const shoesSearch = 'a[href="/product/product"]';


function validateElement(element){
    const choose = {
        'navbar': navbar,
        'buscador': searchField,
        'tabela': productTable
    }[element]
    cy.get(choose).should('be.visible');
}
export { validateElement }

export const clickBtn = (button) =>{
    const btn ={
        'Search': searchField,
        'ExploreSneakers': btnExploreSneakers,
        'ExploreBrands': btnExploreBrands,
        'Cart': btnCart,
        'Login': btnLogin,
    }[button]
    cy.get(btn).click()
}

export const searchProduct = () =>{
    cy.get(searchField).type('Sapato de pai')
    clickBtn('Search')
    cy.get(shoesSearch).should('be.visible')
}

export const clickShoe = () =>{
    cy.get(shoesSearch).click();
}