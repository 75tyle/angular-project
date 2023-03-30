import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
allowNewUser:boolean=false;
userCreatedStatus='no user is created';
userName='Testuser';
isuserCreated=false;
constructor(){
  setTimeout(() => {
    this.allowNewUser = true; 
  }, 3000);
}
changeuserCreatedUserStatus(){
  this.userCreatedStatus='user is created';
  this.isuserCreated=true;
}

onUpdateuser(event: any){
this.userName= event.target.value;

}
ngOnInit(): void {}
}
