import { IProxyRepository } from "../interfaces";

export class HelloWordRepository<T> implements IProxyRepository<T> {
    getAll =  () => {
        return []
    };
    getOne = () => {
        return {} as T
    };
    create = () => {
        return {} as T
    };
    update = () => {
        return {} as T
    };
    delete = () => {
        return true
    };
}