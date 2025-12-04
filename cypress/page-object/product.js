const btnAddCart = '#__next > div.container.mx-auto.my-20 > div > div.col-span-12.md\:col-span-6.lg\:col-span-5 > button > div';
const btnReview = '[id="radix-:rh:"]';
const myCart = '[id="radix-:rc:"]';
const btnCheckout = 'a[href="/checkout"]';
const btnContinueShopping = '#radix-\:rc\: > div.border-t.border-gray-200.px-5.py-6 > div.mt-6.flex.justify-center.text-center.text-sm.text-gray-500 > p > button';


export const clickBtn = (button) =>{
    const btn ={
        'AddtoCart': btnAddCart,
        'ClickReview': btnReview,
        'Checkout': btnCheckout,
        'ContinueShopping': btnContinueShopping,
    }[button]
    cy.get(btn, {timeout: 3000}).click()
}

export const validateCart = () =>{
    cy.get(btnCheckout, {timeout: 3000}).should('be.visible');
}