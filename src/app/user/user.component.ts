import { Component } from "@angular/core";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    
})

export class UserComponent {
    UserId: number =10;
    UserStatus: string ="offline";
    getUserStatus(){
        return this.UserStatus;
    }
}