const userDetails = require('../../test_data/login')
const userName = '//*[@id="username"]';
const password = '//*[@id="password-input"]';
const loginButton = '//*[@id="react-app-main"]/div[2]/div[2]/div/form/div/section/div[1]/div/div[2]/button';
let json = require('../../test_data/login.json');
class LoginPage {
  static visit() {
    cy.visit('/');
  }
  static login() {
    cy.xpath(userName).type(json.UserName);
    cy.xpath(password).type(json.password);
    cy.xpath(loginButton).click();
  }
}
export default LoginPage;
