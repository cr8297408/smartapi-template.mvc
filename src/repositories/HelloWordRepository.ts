import { HelloWord, IProxyRepository } from "../interfaces";

export class HelloWordRepository implements IProxyRepository<HelloWord> {
    getAll =  () => {
        return [
            {
                saludo: 'Hello World!!!'
            }
        ]
    };
    getOne = () => {
        return {
            saludo: "Hello World!!!"
        }
    };
    create = (data: HelloWord) => {
        return data;
    };
    update = (data: HelloWord) => {
        return data
    };
    delete = () => {
        return true
    };
}

export const HelloWordRepositoryInstance = new HelloWordRepository();