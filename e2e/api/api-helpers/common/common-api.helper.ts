import {browser} from 'protractor';
import {StepLogger} from '../../../../core/logger/step-logger';
import {RequestBuilder} from '../../models/common-models/request-builder';
import {ApiInvoker} from '../../api-invokers/api-invoker';
import {StandardResponse} from '../../models/response-standard-models/standard-response';
import {Constants} from '../../../components/misc-utils/constants';
import {ValidationsHelper} from '../../../components/misc-utils/validation-helper';
import {ContentType} from '../../../components/misc-utils/content-type-helper';
import {CommonApiConstant} from './common-api.constant';

export class CommonApiHelper {
    static get apiUrls() {
        const apiBaseUrl = browser.params.apiBaseUrl;
        const apiUrlsParam = browser.params.apiUrls;
        const leadOemPrograms = String(apiUrlsParam.leadOemPrograms)
            .replace('{programId}', CommonApiConstant.apiData.programId);
        const dealerMaster = String(apiUrlsParam.dealerMaster)
            .replace('{DealerCode}', CommonApiConstant.apiData.dealerCode)
            .replace('{OEMCode}', CommonApiConstant.apiData.oemCode);
        return {
            leadOemPrograms: `${apiBaseUrl}${leadOemPrograms}`,
            dealerMaster: `${apiBaseUrl}${dealerMaster}`
        };
    }

    static async executePostRequest(
        stepLogger: StepLogger, apiUrl: string, requestBody: any,
        requestHeader = ContentType.JSON, jsonTypeRequest = true) {

        stepLogger.subStep(`Create POST request to be sent to ${apiUrl}`);
        const request: RequestBuilder = {
            uri: apiUrl,
            headers: requestHeader,
            body: requestBody
        };

        stepLogger.subStep('Execute the POST request');
        const response: any = await new ApiInvoker().makePostToAPI(
            request.uri, request.body, request.headers, jsonTypeRequest);
        return response as StandardResponse;
    }

    static async executePutRequest(
        stepLogger: StepLogger, apiUrl: string, requestBody: any,
        requestHeader = ContentType.JSON, jsonTypeRequest = true) {

        stepLogger.subStep('Create PUT request to be sent');
        const request: RequestBuilder = {
            uri: apiUrl,
            headers: requestHeader,
            body: requestBody
        };

        stepLogger.subStep('Execute the PUT request');
        const response: any = await new ApiInvoker().makePutToAPI(
            request.uri, request.body, request.headers, jsonTypeRequest);
        return response as StandardResponse;
    }

    static async executeGetRequest(
        stepLogger: StepLogger, apiUrl: string,
        requestHeader = ContentType.JSON) {

        console.log('apiUrl: ' + apiUrl);

        stepLogger.subStep('Create GET request');
        const request: RequestBuilder = {
            uri: apiUrl,
            headers: requestHeader,
        };

        stepLogger.subStep('Execute the GET request');
        const response: any = await new ApiInvoker().makeGetToAPI(
            request.uri, request.headers);
        return response as StandardResponse;
    }

    static async verifyApiResponseStatusCode(
        stepLogger: StepLogger, response: StandardResponse,
        statusCode = Constants.httpStatusCodes.success) {
        stepLogger.verification(`Verify response is HTTP status ${statusCode}`);
        await expect(response.statusCode).toBe(statusCode,
            ValidationsHelper.getHttpStatusCodeValidation(statusCode));
    }
}
