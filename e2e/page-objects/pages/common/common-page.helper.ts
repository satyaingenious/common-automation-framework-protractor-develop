import {CommonPage} from './common.po';
import {ElementHelper} from '../../../components/html/element-helper';
import {browser} from 'protractor';
import {PageHelper} from '../../../components/html/page-helper';
import {StepLogger} from '../../../../core/logger/step-logger';
import * as path from 'path';

const fs = require('fs');

export class CommonPageHelper {

    static async logout(stepLogger: StepLogger) {
        await this.openProfileOptions(stepLogger);
        // Sleep is required as it's too quick and not working properly without this
        await browser.sleep(PageHelper.timeout.xs);
        stepLogger.step('Click on logout');
        await ElementHelper.click(CommonPage.profileOptions.logout);
    }

    static async openProfileOptions(stepLogger: StepLogger) {
        stepLogger.step('Click on profile options');
        await ElementHelper.click(CommonPage.profileOptionsButton);
    }

    static getFileUploadFilePath(fileName: string) {
        const filePath = path.join(path.resolve('.') , `${path.sep}upload${path.sep}`, fileName);
        return filePath;
    }

    static readFile(fileName: string) {
        const filePath = this.getFileUploadFilePath(fileName);
        const data = String(fs.readFileSync(filePath).toString());
        return data;
    }
}
