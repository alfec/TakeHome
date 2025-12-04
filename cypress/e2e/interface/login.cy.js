import { login } from '../../page-object/login.js'
import * as createUser from '../../page-object/createUser.js'
import * as hp from '../../page-object/homepage.js'

const password = 'teste1234';
const email = 'test@qaTest.com.br';

describe('Login', () => {
  beforeEach(() => {
    cy.request('GET', '/')
      .then((r) => {
          expect(r.status).to.eq(200)
    })
    cy.visit("/")
  });

  it('Create new user', () =>{
    hp.clickBtn('Login');
    login.clickRegister();
    createUser.fillFormCreateUser(email, password);
  });

  it('Do a login with the correct user and password', () => {
    hp.clickBtn('Login');
    login.doLogin(email, password);
    //need to implement the rest of the scenario, here on local i can do the login
  });

  it('Do a login with wrong credentials should see an error message', ()=>{
    login.wrongLogin('test1@test.com', 'Test12');
    login.wrongLogin('', 'Test12');
    login.wrongLogin('test1@test.com', '');
    login.wrongLogin('', '');
    login.wrongLogin('test1@', 'Test1234');
    login.wrongLogin('test1@test.com', 'Test1');
    login.wrongLogin('test1@test.com', 'test1234');
    login.wrongLogin('test1@test.com', '12345678');

  });

})