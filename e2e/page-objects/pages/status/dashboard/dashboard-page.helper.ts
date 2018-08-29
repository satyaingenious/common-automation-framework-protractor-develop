import {DashboardPageConstant} from './dashboard-page.constant';
import {ValidationsHelper} from '../../../../components/misc-utils/validation-helper';
import {StepLogger} from '../../../../../core/logger/step-logger';
import {BasePageHelper} from '../../base-page.helper';
import {CommonPage} from '../../common/common.po';
import {DashboardPage} from './dashboard.po';
import {DashboardPageValidation} from './dashboard-page.validation';
import {ElementHelper} from '../../../../components/html/element-helper';

export class DashboardPageHelper extends BasePageHelper {

    static async verifyNavigation(stepLogger: StepLogger) {
        stepLogger.verification('Dashboard page is displayed.');
        await expect(await ElementHelper.getText(CommonPage.pageTitle))
            .toBe(DashboardPageConstant.pageName,
                ValidationsHelper.getPageDisplayedValidation(DashboardPageConstant.pageName));
    }

    static async verifyVersion(stepLogger: StepLogger) {
        stepLogger.verification('The version number must be the same as you installed.');
        await expect(await ElementHelper.getText(DashboardPage.system.version))
            .toMatch(DashboardPageConstant.versionRegex,
                DashboardPageValidation.versionShouldBeAvailableInFormat);
    }

    url(): string {
        return '/admin/#dashboard';
    }
}
