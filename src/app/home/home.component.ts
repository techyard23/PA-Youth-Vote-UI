import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  pincodeFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[0-9]{6}$/),
  ]);
}
