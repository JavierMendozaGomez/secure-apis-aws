const localConfig = 
{
    service: 'myService',
    provider: {
        name: 'aws',
        runtime: 'nodejs12.x'
    },
    functions: {
        firstTest: { 
            handler: '.build/handler.createUserHandler',
            events: [{
                http: {
                    path: 'test-post',
                    method: 'post',
                }
            }],
        }
    },
    plugins: [
        'serverless-offline'
    ],
    custom: {
        documentation:{
            api:{
                info: {
                    version: 'v0.0.0',
                    title: 'myServiceAPI',
                    description: 'Testing protected apis'
                }
            }
        }
    }
};

module.exports = localConfig;
