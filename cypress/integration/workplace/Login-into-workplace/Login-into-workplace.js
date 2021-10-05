import { When } from 'cypress-cucumber-preprocessor/steps';
import Login from '../../../pages/login-workplace/login';
// eslint-disable-next-line import/no-extraneous-dependencies
require('cypress-xpath')

When(/^Login with valid username and password$/, () => {
  Login.login();
});
