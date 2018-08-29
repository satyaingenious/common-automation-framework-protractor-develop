import {SuiteNames} from '../../helpers/suite-names';
import {LoginPageHelper} from '../../../page-objects/pages/login/login-page.helper';
import {PageHelper} from '../../../components/html/page-helper';
import {StepLogger} from '../../../../core/logger/step-logger';
import {DashboardPageHelper} from '../../../page-objects/pages/status/dashboard/dashboard-page.helper';
import {CommonPageHelper} from '../../../page-objects/pages/common/common-page.helper';

describe(SuiteNames.healthCheck, () => {
    let loginPageHelper: LoginPageHelper;
    let stepLogger: StepLogger;

    beforeEach(async () => {
        await PageHelper.maximizeWindow();
        loginPageHelper = new LoginPageHelper();
        stepLogger = new StepLogger();
        await loginPageHelper.goTo();
    });

    afterEach(async () => {
        await CommonPageHelper.logout(stepLogger);
    });

    it('Login to administration - [1160445]',
        async () => {
            stepLogger.caseId = 1160445;

            stepLogger.stepId(1);
            await LoginPageHelper.verifyNavigation(stepLogger);

            stepLogger.stepId(2);
            await LoginPageHelper.loginUsingAdmin(stepLogger);
            await DashboardPageHelper.verifyNavigation(stepLogger);
    });

    it('Version check - [1160446]',
        async () => {
            stepLogger.caseId = 1160446;

            stepLogger.stepId(1);
            await LoginPageHelper.verifyNavigation(stepLogger);
            // Step IDs should be passed manually in test so that they are predictable and as per the test
            // Auto generation is not predictable and was generating higher IDs than actual
            // For example precondition itself will auto increment to n and then actual test will start it will mess up
            stepLogger.stepId(2);
            await LoginPageHelper.loginUsingAdmin(stepLogger);
            await DashboardPageHelper.verifyNavigation(stepLogger);

            stepLogger.stepId(3);
            await DashboardPageHelper.verifyVersion(stepLogger);
    });
});
