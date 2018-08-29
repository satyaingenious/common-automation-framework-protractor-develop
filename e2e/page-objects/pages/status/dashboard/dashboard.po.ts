import {By, element} from 'protractor';

export class DashboardPage {
    static get system() {
        return {
            version: element(By.name('k_version')),
        };
    }
}
