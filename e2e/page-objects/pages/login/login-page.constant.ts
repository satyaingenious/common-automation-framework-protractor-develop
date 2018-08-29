export class LoginPageConstant {
    static readonly pageName = 'Login';

    static get loginErrors() {
        return {
            invalidCredentials: 'Invalid username or password',
        };
    }
}
