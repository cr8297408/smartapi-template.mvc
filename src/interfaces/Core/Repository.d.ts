export interface IProxyRepository<T> {
    getAll: () => T[];
    getOne: () => T;
    create: () => T;
    update: () => T;
    delete: () => boolean;
}