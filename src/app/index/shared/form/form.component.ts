import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/helper/data.service';
import { formValidation } from 'src/app/helper/form-validation';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  contactForm!: FormGroup;
  loading: boolean = false;

  constructor(private ds: DataService, public validator: formValidation, private fb: FormBuilder, private toastr: ToastrService) {
    this.contactForm = this.fb.group({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [Validators.required]),
      terms: new FormControl(null, [Validators.required]),
      notifications: new FormControl(null, [Validators.required]),
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    if (!this.contactForm.invalid) {
      return
    }
    let data = this.contactForm.getRawValue()
    
    this.ds.saveSubscribers(data).subscribe(res => {
      if (res) {
        console.log(res)
        this.toastr.success('Message sent successfully', 'Success');
      }
    })
  }

  get g() {
    return this.contactForm.controls
  }

}
