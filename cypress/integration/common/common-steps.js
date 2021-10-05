import { Given } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../pages/login-workplace/login';

Given(/^I'm at google login Page$/, () => {
  LoginPage.visit();
});
