export interface IEnvConfig {
  URL: string
  PORT: string
}

export interface IEnvironment {
  setup: () => IEnvConfig;
}
