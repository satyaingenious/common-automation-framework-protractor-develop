import {By, element} from 'protractor';

export class CommonPage {
    static get pageTitle() {
        return element(By.css('[id*="CaptionText"]'));
    }

    static get profileOptionsButton() {
        return element(By.css('table[id*="admUserMenu"] button'));
    }

    static get profileOptions() {
        return {
            logout: element(By.css('a[id*="admLogout"]')),
        };
    }
}
