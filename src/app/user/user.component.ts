import { Component } from "@angular/core";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    
})

export class UserComponent {
    UserId: number =10;
    UserStatus: string;

    constructor(){
     this.UserStatus =Math.random() >0.5 ?'online':'offline';   
    }
    getUserStatus(){
        return this.UserStatus;
    }
    getColor(){
        if(this.UserStatus==='online'){
            return 'green';
        }
        return 'red';
    }
}