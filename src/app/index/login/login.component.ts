import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/helper/data.service';
import { formValidation } from 'src/app/helper/form-validation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading: boolean = false;

  constructor(public validator: formValidation, private fb: FormBuilder,private api:DataService,private toastr: ToastrService,private router:Router) {
    this.loginForm = this.fb.group({
      email: new FormControl(null, [Validators.required, Validators.email]),
      passwrod: new FormControl(null, [Validators.required]),
    })
  }

  ngOnInit() {
  }

  get g() {
    return this.loginForm.controls
  }

  onSubmit(form: FormGroup) {
    this.loading = true;
    if(this.loginForm.invalid){
      this.loading = false;
      return
    }

    let data = this.loginForm.getRawValue();
    this.api.login(data).subscribe((res:any)=>{
      if(res.success){
        localStorage.setItem('token',res.token)
        this.router.navigate(['/admin'])
      }else{
        this.toastr.error("Invalid Email or Password!")
      }
    })
      // this.loginForm.reset();
  }


}
