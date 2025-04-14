import { DynamicEnvironment } from './dynamic-env';

export class QAEnvironment extends DynamicEnvironment {
  public production: boolean;

  constructor() {
    super();
    this.production = false;
  }
}


export const environment = new QAEnvironment()