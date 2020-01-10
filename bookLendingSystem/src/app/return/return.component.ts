import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms';
import { ServiceService} from './../service.service';
import { providerDef } from '@angular/core/src/view';


@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.css']
})
export class ReturnComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private fb:FormBuilder,private bookService: ServiceService) { }

  ngOnInit() {
    this.profileForm = this.fb.group({
      userName: ['',[Validators.required]],
      membershipNumber: ['',[Validators.required]]
    });
  }

  submit(){
    console.log(this.profileForm.value)
    // Commenting out the subscription calls as no api was provided in the question
    // this.bookService.submitReturnDetails(this.profileForm.value).subscribe((data) => {

    // })

  } 

}
