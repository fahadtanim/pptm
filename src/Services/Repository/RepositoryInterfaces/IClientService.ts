import { IClient } from 'src/Models/Interfaces/IClient';

export abstract class IClientService {
  abstract getClients(): IClient[];
  abstract getClientByCid(cid): IClient;
  abstract addClient(client): void;
}
