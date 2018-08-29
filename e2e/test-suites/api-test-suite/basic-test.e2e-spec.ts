import {SuiteNames} from '../helpers/suite-names';
import {StepLogger} from '../../../core/logger/step-logger';
import {CommonPageHelper} from '../../page-objects/pages/common/common-page.helper';
import {CommonApiConstant} from '../../api/api-helpers/common/common-api.constant';
import {CommonApiHelper} from '../../api/api-helpers/common/common-api.helper';

describe(SuiteNames.healthCheck, () => {
    let stepLogger: StepLogger;

    beforeEach(async() => {
        stepLogger = new StepLogger();
    });

    it(`Create a Program which doesn't have value for LeadHandlingInstruction and IsNCILad - [14919406]`,
        async () => {
            stepLogger.caseId = 14919406;

            stepLogger.stepId(1);
            const jsonFileData = CommonPageHelper.readFile(CommonApiConstant.files.programJson);
            const response = await CommonApiHelper.executePutRequest(stepLogger,
                CommonApiHelper.apiUrls.leadOemPrograms, jsonFileData);
            await CommonApiHelper.verifyApiResponseStatusCode(stepLogger, response);

        });

    it(`Disable Equus model for HYU Dealer - [14479859]`,
        async () => {
            stepLogger.caseId = 14919406;

            stepLogger.stepId(1);
            const response = await CommonApiHelper.executeGetRequest(stepLogger,
                CommonApiHelper.apiUrls.dealerMaster);
            await CommonApiHelper.verifyApiResponseStatusCode(stepLogger, response);

        });
});
