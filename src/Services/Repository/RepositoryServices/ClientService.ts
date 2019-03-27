import { IClientService } from '../RepositoryInterfaces/IClientService';
import { IClient } from 'src/Models/Interfaces/IClient';

let clients = [
  { client_id: '1', cid: 'amac', client_name: 'amac bank', client_description: 'amac is a bank from USA'},
  { client_id: '2', cid: 'dacp', client_name: 'dacp bank', client_description: 'dacp is a bank from USA'},
];

export class ClientService implements IClientService {
  getClients(): IClient[] {
    return clients;
  }
  getClientByCid(cid): IClient {
    return clients.find( client => client.cid.toLowerCase().includes(cid.toLowerCase()));
  }
  getClientById(id): IClient {
    return clients.find( client => client.client_id == id);
  }
  addClient(client):void {
    clients.push(client);
    console.log(clients);
  }
}
