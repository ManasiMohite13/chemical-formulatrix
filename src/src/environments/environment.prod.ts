import { DynamicEnvironment } from './dynamic-env';

export class ProdEnvironment extends DynamicEnvironment {
  public production: boolean;
  constructor() {
    super();
    this.production = true;
  }
}


export const environment = new ProdEnvironment()