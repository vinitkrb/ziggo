import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {EventBroadcasterService} from '../../shared/services/event-broadcaster.service';
import {UserManagementService} from './user-management.service';
import {LocalDataSource} from 'ng2-smart-table';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit, AfterViewInit {

  settings: any;
  source: LocalDataSource;

  constructor(public el: ElementRef, private eventEmitter: EventBroadcasterService, private userMagmntService: UserManagementService) {
  }

  ngOnInit() {
    this.settings = {
      selectMode: 'multi',
      attr: {
        id: 'table-users',
        class: 'table table-bordered table-users'
      },
      actions: {
        add: false,
        edit: false,
        delete: false
      },
      noDataMessage: 'No data found.',
      columns: {
        name: {
          title: 'Display Name',
          class: 'col-name',
          editable: false
        },
        preferredUsername: {
          title: 'User Name',
          class: 'col-preferredUsername',
          editable: false
        },
        email: {
          title: 'Email ID',
          class: 'col-email',
          editable: false
        },
        contactNumber: {
          title: 'Contact Number',
          class: 'col-contactNumber',
          editable: false
        },
        status: {
          title: 'Status',
          class: 'col-status',
          editable: false,
          filter: {
            type: 'list',
            config: {
              selectText: 'Select Status',
              list: [
                {value: 'Active', title: 'Active'},
                {value: 'Created', title: 'Created'},
                {value: 'Suspended', title: 'Suspended'}
              ],
            },
          }
        }
      },
      pager: {
        display: true,
        perPage: 1
      }
    };
    // Fetch User List
    this.getUserList();
  }

  ngAfterViewInit() {
    // Remove Select All checkbox
    // this.el.nativeElement.querySelector('.ng2-smart-titles th:first-child input[type="checkbox"]').style.display = 'none';
    this.el.nativeElement.querySelector('.table-users tr td[colspan="5"]').setAttribute('colspan', 6);
  }

  getUserList() {
    const self = this;
    self.eventEmitter.trigger('showAjaxLoader');
    self.userMagmntService.getUsers().subscribe(
      response => {
        this.source = new LocalDataSource(response);
        self.eventEmitter.trigger('hideAjaxLoader');
      },
      error => {
        // The call is successful, but there is some parsing error - happens only in IE,
        // in this case consider this call as successful.
        // @TODO Show Error
        self.eventEmitter.trigger('hideAjaxLoader');
      }
    );
  }

}
