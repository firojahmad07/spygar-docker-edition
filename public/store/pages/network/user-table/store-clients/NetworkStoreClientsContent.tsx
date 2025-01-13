import { MiscFaq, MiscHelp2 } from '@/store/partials/misc';
import { StoreClients } from './blocks/store-clients';

const NetworkStoreClientsContent = () => {
  return (
    <div className="grid gap-5 lg:gap-7.5">
      <StoreClients />

      <MiscFaq />

      <MiscHelp2 />
    </div>
  );
};

export { NetworkStoreClientsContent };
