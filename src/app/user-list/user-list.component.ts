import { Component } from '@angular/core';
import { UserDataService } from '../user-data.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
  providers: [UserDataService],
})
export class UserListComponent {
  users: any;
  constructor(private _userService: UserDataService) {
    //
  }
  ngOnInit() {
    //
    this.users = this._userService.getUsers();
  }
}
