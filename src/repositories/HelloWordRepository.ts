import { RepositoryError } from "../errors";
import { CreateHelloWordPayload, DeleteHelloWordPayload, GetOneHelloWordPayload, HelloWord, IProxyRepository, UpdateHelloWordPayload } from "../interfaces";

let saludos = [
    {
        uuid: "1",
        saludo: 'Hello World!!!'
    }
];

export class HelloWordRepository implements IProxyRepository<HelloWord> {
    getAll =  () => {
        return saludos;
    };
    getOne = ({ uuid }: GetOneHelloWordPayload) => {
        const saludo = saludos.find(s => s?.uuid === uuid);
        if(saludo === undefined) throw new RepositoryError('HelloWordRepository', 'GetOneMethod');
        return saludo;
    };
    create = ({ saludo }: CreateHelloWordPayload) => {
        saludos.push({ uuid: String(saludos.length + 1), saludo })
        return saludos;
    };
    update = ({ uuid, saludo }: UpdateHelloWordPayload) => {
        const findSaludo = saludos.find((e) => e?.uuid === uuid);
        if(findSaludo === undefined) throw new RepositoryError('HelloWordRepository', 'UpdateMethod');
        findSaludo.saludo = saludo;
        return findSaludo;
    };
    delete = ({ uuid }: DeleteHelloWordPayload) => {
        saludos = saludos.filter((e) => e.uuid !== uuid);
        return true;
    };
}

export const HelloWordRepositoryInstance = new HelloWordRepository();