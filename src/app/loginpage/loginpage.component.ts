import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
  // userLogin(data: any){
  //   console.warn(data)
  // }


  credentials={
    username:'',
    password:''
  }

  constructor(private appServices: AppService, private router: Router){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit(){
    if((this.credentials.username != '' && this.credentials.password !='') && (this.credentials.username != null && this.credentials.password != null)){
      console.log('submit values')
      this.appServices.login(this.credentials.username,this.credentials.password).subscribe(res => {
        console.log(res);
        if( res == true){
          this.router.navigate(['/dashboard']); 
        } else{
          window.alert('Incorret username or password.')
        }
        
      }, err=>{
        console.log("error" + err);
        window.alert('Something went wrong please try again later.')
       }
     )
    }else{
      console.log('fields are empty')
      window.alert('Please enter username and password.')
    }
  }

}
