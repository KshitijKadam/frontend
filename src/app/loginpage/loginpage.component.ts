import { Component, OnInit } from '@angular/core';

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

  constructor(){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit(){
    if((this.credentials.username != '' && this.credentials.password !='') && (this.credentials.username != null && this.credentials.password != null)){
      console.log('submit values')
    }else{
      console.log('fields are empty')
    }
  }

}
