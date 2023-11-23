import { IEnvConfig, IEnvironment } from "./IEnviroment";
import dotenv from 'dotenv';

export class LocalEnvironment implements IEnvironment {
  setup(): IEnvConfig {
    dotenv.config();
    const enviroments: IEnvConfig = {
      URL: "",
      PORT: ""
    }
    // TODO: ADD CUSTOM ENVIROMENTERROR
    enviroments.URL = process.env.URL ?? '';
    if (enviroments.URL === '') throw new Error('URL undefined');
    enviroments.PORT = process.env.PORT ?? '';
    if (enviroments.PORT === '') throw new Error('PORT undefined');

    return {
      ...enviroments
    }
  }
}

export const LocalEnvironmentInstance = new LocalEnvironment();