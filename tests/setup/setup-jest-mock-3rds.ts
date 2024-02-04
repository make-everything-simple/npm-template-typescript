// mock you implementation module. e.g.
/*
jest.mock('newrelic');
jest.mock('@aws-sdk/client-ssm', () => {
    const originalModule = jest.requireActual('@aws-sdk/client-ssm');
    return {
        ...originalModule,
        SSMClient: function () {
            return {
                send: function ({ parameter }) {
                    {
                        return {
                            promise: function () {
                                return {
                                    Parameter: {
                                        Name: parameter,
                                        Type: 'String',
                                        Value: '100',
                                        Version: 1,
                                        LastModifiedDate:
                                            '2023-03-06T07:09:53.758Z',
                                        ARN: 'arn:aws:ssm:us-east-1:xxxx:parameter/npm-template-typescript/dev/NPM_TOKEN',
                                        DataType: 'text',
                                    },
                                };
                            },
                        };
                    }
                },
            };
        },
    };
});
*/
