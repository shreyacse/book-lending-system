import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ServiceService } from './../service.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  bookList = [];
  bookDetails = [
    "nwk-aosp-lcb010.apple.com",
    "qejune24-skl",
    "abctest123",
    "host06may_s",
    "qejune07-skl1",
    "qejune04skl",
    "qejune07-skl",
    "102.102.102.102",
    "qejune10-skl",
    "qejune21-skl"
  ];
  checkboxToggle = false;
  // tableCheckBoxToggle = false;
  requestedBookList = [];
  bookFlag = [];

  constructor(private bookService: ServiceService,
    private router: Router) { }

  ngOnInit() {
    // Commenting out the subscription calls as no api was provided in the question
    // this.bookService.getTableList().subscribe((data) => {
    this.bookList = this.bookDetails;
    // response should come from backend
    // as there is no api details given in the question,I m 
    // populating it with a list value
    // })
  }



  showBookList() {
    this.checkboxToggle = !this.checkboxToggle;
    this.bookList = (this.checkboxToggle === true ? this.bookDetails : []);
    if (this.bookList.length > 0) {
      this.bookList.forEach((index) => {
        this.bookFlag[index] = false;
      })
    }
  }

  showRentBookForm() {
    if (this.requestedBookList.length > 0) {
      this.router.navigate(['/rent'])
    }
  }

  showReturnBackForm() {
    if (this.requestedBookList.length > 0) {
      this.router.navigate(['/return'])
    }
  }

  getStatus() {
    if (this.bookFlag.indexOf(true) === -1) {
      return -1;
    }
  }
  populateBookList(index) {
    // this.tableCheckBoxToggle = !this.tableCheckBoxToggle;
    this.bookFlag[index] = !this.bookFlag[index];
    this.requestedBookList = JSON.parse(JSON.stringify(this.bookList));
    this.bookList.forEach((book, ind) => {
      if (this.bookFlag[ind] === false) {
        this.requestedBookList.splice(index, 1);
      }
    });
    // RequestedBookList contains the list of selected books from the table
  }


}
