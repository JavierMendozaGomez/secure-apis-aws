import {APIGatewayProxyResult} from 'aws-lambda';
import {ICreateUserRequest} from './models';
import middy from '@middy/core';
import jsonBodyParser from '@middy/http-json-body-parser'

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

export const createUserHandler = middy(createUser).use(jsonBodyParser());

