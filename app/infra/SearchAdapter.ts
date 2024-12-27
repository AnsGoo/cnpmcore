import {
  AccessLevel,
  Inject,
  SingletonProto,
} from '@eggjs/tegg';
import { EggAppConfig } from 'egg';

import { SearchAdapter } from '../common/typing';


/**
 * Use elasticsearch to search the huge npm packages.
 */
@SingletonProto({
  accessLevel: AccessLevel.PUBLIC,
  name: 'searchAdapter',
})
export class ESSearchAdapter implements SearchAdapter {
  @Inject()
  private config: EggAppConfig;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async search(_query: any): Promise<any> {
    return this.config;
  }
}
