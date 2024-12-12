export const environment = {
    production: import.meta.env.NG_APP_ENV_PRODUCTION === 'true',
    name: import.meta.env.NG_APP_ENV_NAME || 'development',
    firebase: {
        project: import.meta.env.NG_APP_ENV_PROJECT || 'test-secret',
        apiKey: import.meta.env.NG_APP_ENV_API_KEY || 'ABC-123456-XYZ',
    }
};
