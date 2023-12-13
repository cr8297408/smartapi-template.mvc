import { Payload } from "../Core";

export interface HelloWord {
    saludo: string;
}

export interface GetOneHelloWordPayload extends Payload {}
export interface CreateHelloWordPayload extends Payload, HelloWord {}
export interface UpdateHelloWordPayload extends Payload, HelloWord {}
export interface DeleteHelloWordPayload extends Payload {}