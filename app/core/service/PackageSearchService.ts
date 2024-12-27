import { AccessLevel, Inject, SingletonProto } from '@eggjs/tegg';

import { AbstractService } from '../../common/AbstractService';
import { SearchManifestType } from '../../repository/SearchRepository';
import { PackageRepository } from '../../repository/PackageRepository';
import { PackageVersionBlockRepository } from '../../repository/PackageVersionBlockRepository';


@SingletonProto({
  accessLevel: AccessLevel.PUBLIC,
})
export class PackageSearchService extends AbstractService {
  // @Inject()
  // private readonly packageManagerService: PackageManagerService;
  // @Inject()
  // private readonly searchRepository: SearchRepository;
  // @Inject()
  // private packageVersionDownloadRepository: PackageVersionDownloadRepository;
  @Inject()
  protected packageRepository: PackageRepository;
  @Inject()
  protected packageVersionBlockRepository: PackageVersionBlockRepository;

  async searchPackage(text: string, from: number, size: number): Promise<{ objects: (SearchManifestType | undefined)[], total: number }> {

    return { objects: [{
      package: { text, from, size } as any,
      downloads: {
        all: 0,
      },
    }], total: 0 };
  }
}
