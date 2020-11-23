import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppService } from "../../contact.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }
  contactUs(form: NgForm) {
    if (form.invalid) {
      return;
    }
    //this.isLoading = true;
    this.appService.contactUsFunction(form.value.name, form.value.email, form.value.subject, form.value.message);
  }

}
