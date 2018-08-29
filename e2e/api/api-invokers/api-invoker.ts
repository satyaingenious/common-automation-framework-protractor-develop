import {AureaRestWrapper} from './aurea-rest-wrapper';
import {ContentType} from '../../components/misc-utils/content-type-helper';

export class ApiInvoker {

    /**
     * Post call to API
     * @param {string} uri application uri
     * @param {any} body content to be sent in body
     * @param {any} header optional parameter, default value: {'Content-Type': 'application/json'}
     * @returns {Promise<Response>}
     */
    async makePostToAPI(uri: string, body: any,
                        header = ContentType.JSON,
                        jsonTypeRequest = true) {
        if (jsonTypeRequest) {
            body = JSON.parse(body);
        }
        return new AureaRestWrapper()
            .post(uri)
            .headers(header)
            .send(body, jsonTypeRequest)
            .end();
    }

    /**
     * Put call to API
     * @param {string} uri application uri
     * @param {any} body content to be sent in body
     * @param {any} header optional parameter, default value: {'Content-Type': 'application/json'}
     * @returns {Promise<Response>}
     */
    async makePutToAPI(uri: string, body: any,
                       header = ContentType.JSON,
                       jsonTypeRequest = true) {
        if (jsonTypeRequest) {
            body = JSON.parse(body);
        }
        return new AureaRestWrapper()
            .put(uri)
            .headers(header)
            .send(body, jsonTypeRequest)
            .end();
    }

    /**
 * Get call to API
 * @param {string} uri application uri
 * @param {any} body content to be sent in body
 * @param {any} header optional parameter, default value: {'Content-Type': 'application/json'}
 * @returns {Promise<Response>}
 */
    async makeGetToAPI(uri: string,
                       header: any) {
        return new AureaRestWrapper()
            .get(uri)
            .headers(header)
            .end();
    }
}
