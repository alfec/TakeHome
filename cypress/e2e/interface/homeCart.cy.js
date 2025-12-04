import * as hp from "../page-object/homepage";
import * as product from "../page-object/product";
const email = 'test@testqa.com.br';
const password = 'teste1234';
before(function () {
    cy.visit("/");

});

describe('Validate the search for items', function () {
  beforeEach(function () {
    cy.request('GET', '/')
    .then((response) => {
      expect(response.status).to.eq(200);
    });

    cy.visit("/");
    hp.searchProduct()
  });

  it('Add a product to cart', function () {
    hp.searchProduct();
    hp.clickShoe();
    product.clickBtn('AddtoCart');
    product.validateCart();
  });
});
