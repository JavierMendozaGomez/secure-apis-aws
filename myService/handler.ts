import {APIGatewayProxyResult} from 'aws-lambda';
import {ICreateUserRequest} from './models';

export const createUser = async (event: ICreateUserRequest): Promise<APIGatewayProxyResult> => {
  const {firstname} = event.body.personalInfo;
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Welcome ${firstname}!`,
      input: event,
    })
  };
};

