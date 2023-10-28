export interface IProxyRepository<T> {
    getAll: () => T[];
    getOne: () => T;
    create: (data: T) => T;
    update: (data: T, id: string) => T;
    delete: (id: string) => boolean;
}