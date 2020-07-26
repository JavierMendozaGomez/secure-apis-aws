
# Serverless

## Installation and setup

````
serverless create --template aws-nodejs --path myService

cd my-service && yarn install
````
### Add schemas with typescript


### Adding serverless offline
Inside the `my-service` folder install the serverless-offline command as devDependency , this will allow us to test our work without deploying it to AWS.
```
yarn add --dev serverless-offline
```
Add the offline plugin to the `serverless.yml`
```
plugins:
  - serverless-webpack
  - serverless-offline
```

### Adding the typescript schemas with typescript-json-schema

```
yarn add typescript-json-schema
```
