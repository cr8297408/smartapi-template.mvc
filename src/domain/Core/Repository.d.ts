import { Payload, Response } from ".";

export interface IProxyRepository<T> {
    getAll: (data?: Payload) => T[];
    getOne: (data: Payload) => Response;
    create: (data: Payload) => Response;
    update: (data: Payload) => Response;
    delete: (data: Payload) => Response;
}