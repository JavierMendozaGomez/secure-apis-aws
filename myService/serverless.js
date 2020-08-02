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
    ]
};

module.exports = localConfig;
