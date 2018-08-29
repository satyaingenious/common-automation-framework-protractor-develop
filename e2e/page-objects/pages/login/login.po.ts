import {LoginPageConstant} from './login-page.constant';
import {By, element} from 'protractor';
import {ElementHelper} from '../../../components/html/element-helper';

export class LoginPage {
    static get mainContainer() {
        return element(By.id('username-container'));
    }

    static get formControls() {
        return {
            username: element(By.id('username')),
            password: element(By.id('password')),
            login: element(By.id('login-button')),
        };
    }

    static get loginErrors() {
        return {
            invalidCredentials: ElementHelper.getElementByText(LoginPageConstant.loginErrors.invalidCredentials),
        };
    }
}
