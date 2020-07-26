

export interface IPerson {
    firstname: string;
    lastName: string;
    age: number;
}

export interface IAddress {
    country: string;
    postalCode: string;
    runing: string
};

export interface ICreateUserRequest {
    body: {
        email: string;
        password: string;
        personalInfo: IPerson;
        address: IAddress;
    }
};