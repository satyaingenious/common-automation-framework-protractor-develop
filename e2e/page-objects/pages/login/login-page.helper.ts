import {TextBoxHelper} from '../../../components/html/textbox-helper';
import {LoginPage} from './login.po';
import {ValidationsHelper} from '../../../components/misc-utils/validation-helper';
import {PageHelper} from '../../../components/html/page-helper';
import {LoginPageConstant} from './login-page.constant';
import {BasePageHelper} from '../base-page.helper';
import {StepLogger} from '../../../../core/logger/step-logger';
import {CommonPageConstant} from '../common/common-page.constant';
import {ExpectationHelper} from '../../../components/misc-utils/expectation-helper';

export class LoginPageHelper extends BasePageHelper {
    static readonly admin = CommonPageConstant.credentials.administrator;

    static async login(username: string, password: string, stepLogger: StepLogger) {
        stepLogger.step('Fill out valid username and password that you added in initial wizard C1160434 and press "Login".');
        stepLogger.subStep('Enter Username');
        await TextBoxHelper.sendKeys(LoginPage.formControls.username, username);

        stepLogger.subStep('Enter Password and press enter');
        await TextBoxHelper.sendKeys(LoginPage.formControls.password, password, true);
    }

    // Logger inside the helper will improve readability and will reduce the code, Otherwise wherever the helper is used we will have
    // to add it everywhere
    static async verifyNavigation(stepLogger: StepLogger) {
        await ExpectationHelper
            .verifyDisplayedStatus(LoginPage.mainContainer, 'Login page for administration interface.', stepLogger);
    }

    static async verifyTheLoginFailure(stepLogger: StepLogger) {
        stepLogger.verification('User should be displayed below error: Invalid username or password');
        await expect(await PageHelper.isElementDisplayed(LoginPage.loginErrors.invalidCredentials))
            .toBe(true,
                ValidationsHelper.getErrorDisplayedValidation(LoginPageConstant.loginErrors.invalidCredentials));
    }

    static async loginUsingAdmin(stepLogger: StepLogger) {
        await this.login(this.admin.username, this.admin.password, stepLogger);
    }

    url(): string {
        return '/admin';
    }
}
