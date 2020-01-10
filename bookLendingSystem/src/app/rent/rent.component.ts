import { Component, OnInit, Input } from '@angular/core';
import {FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms'
import { ServiceService} from './../service.service';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {

  constructor(private fb:FormBuilder,private bookService: ServiceService) { }
  profileForm: FormGroup;
  
  ngOnInit() {
    this.profileForm = this.fb.group({
      userName: ['',[Validators.required]],
      membershipNumber: ['',[Validators.required]],
      duration:['',[Validators.required]],
      returnDate:[this.getReturnDate(),[]]
    });
  }

  getReturnDate(){
    if(this.profileForm !== undefined){
    let days = this.profileForm.value.duration;
    var date = new Date();
    var newdate = new Date(date);
    newdate.setDate(newdate.getDate() + days);
    var dd = newdate.getDate();
    var mm = newdate.getMonth() + 1;
    var y = newdate.getFullYear();
    var someFormattedDate = dd + '/' + mm + '/' + y;
      this.profileForm.controls['returnDate'].patchValue(someFormattedDate);
    }
  }
  
    submit(){
      console.log(this.profileForm.value)
          // Commenting out the subscription calls as no api was provided in the question
      // this.bookService.submitRentDetails(this.profileForm.value).subscribe((data) => {
        // we can assign the response to the bookTable
      // });
    } 

}
