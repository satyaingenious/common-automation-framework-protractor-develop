import {browser} from 'protractor';

export class CommonPageValidation {
    static get messages() {
        return {
            requiredField: 'This field is required',
        };
    }

    static get versionShouldBeAvailableInFormat() {
        return `System should display below version details at top left corner of the side bar' +
        'Timezone: (value) Version: (value) Release: (value)`;
    }

    static get displayNameShouldBeAvailableInFormat() {
        return `Top left block of profile drop down should display the label as  Welcome, {User Display Name}`;
    }

    static async mainContainerWidthShouldBeIncreased() {
        return `Main container width should be increased at ${await browser.getCurrentUrl()}`;
    }
}
