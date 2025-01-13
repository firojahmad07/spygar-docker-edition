import { MiscFaq, MiscHelp } from '@/store/partials/misc';

import { IPAddresses } from './blocks';

const AccountAllowedIPAddressesContent = () => {
  return (
    <div className="grid gap-5 lg:gap-7.5">
      <IPAddresses />

      <MiscFaq />

      <MiscHelp />
    </div>
  );
};

export { AccountAllowedIPAddressesContent };
