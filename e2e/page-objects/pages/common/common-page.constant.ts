import {browser} from 'protractor';

export class CommonPageConstant {

    static get credentials() {
        // Not a typed object
        // noinspection Annotator
        const admin = browser.params.users.administrator;
        return {
            administrator: {
                username: admin.username.toString(),
                password: admin.password.toString(),
                displayName: admin.displayName.toString(),
            },
        };
    }

    static get sidebarNavigationMenus() {
        return {
            dashboard: 'Dashboard',
            dataDesign: {
                root: 'Data Design',
                child: {
                    reports: 'Reports',
                    reportQueue: 'Report Queue',
                    analyticsWorkbench: 'Analytics Workbench',
                    sqlWorkbench: 'SQL Workbench',
                },
            },
            scheduler: {
                root: 'Scheduler',
                child: {
                    schedules: 'Schedules',
                    results: 'Results',
                },
            },
            administration: {
                root: 'Administration',
                child: {
                    users: 'Users',
                    groups: 'Groups',
                    roles: 'Roles',
                    distributionFilters: 'Distribution Filters',
                    i18n: 'i18n',
                    analytics: 'Analytics',
                    importExport: 'Import/Export',
                },
            },
        };
    }

    static get profileOptions() {
        return {
            logOut: 'Logout',
            profile: 'Profile',
        };
    }

    static get commonButtonLabels() {
        return {
            save: 'Save',
            yes: 'Yes',
            cancel: 'Cancel',
        };
    }
}
