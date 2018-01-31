import {Injectable} from '@angular/core';
import {RestClientService} from '../../shared/services/rest-client.service';

@Injectable()
export class ApplicationManagementService {

  constructor(private restClient: RestClientService) {}

}
