import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 appr :any;
  loggedUser : any ='';
  constructor(public _auth :AuthService, private _router :Router ) { }

  ngOnInit(): void {
    this.loggedUser = this._auth.getCurrentUser();
  }
logoutUser()
{
localStorage.removeItem('token')
localStorage.removeItem('currentUser')
localStorage.removeItem('Approvalstatus')
localStorage.removeItem('allocateTrainerId')
localStorage.removeItem('trainerAlertMsg')
localStorage.removeItem("deleteTrainerId")
localStorage.removeItem("editTrainerId")
this._router.navigate(['/'])
}

getloguser(){
  this.loggedUser = this._auth.getCurrentUser(); 
  if(this.loggedUser=="tmsadmn@gmail.com"){
    return true;}
    else{
      return false;
    }
  }
  route(){
    this._router.navigate(['profile']);
  }
  isapproved(){
  let apstatus=localStorage.getItem('Approvalstatus');

    if(apstatus=='true'){
      return true;
    }
    else{
      return false
    }

  }
}

