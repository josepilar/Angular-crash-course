import { Component } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'basics',
  templateUrl: './basics.component.html'
})
export class BasicsComponent{
  title: string = "Basics stater"
  title2: string;
  buttonClass: string = 'info';
  titleColor: string = '#c579b6';
  form: FormGroup;
  firstname: string;
  lastName: string;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.createForm();
  }

  createForm(): FormGroup{
    return new FormGroup({
      firstname: new FormControl(this.firstname, Validators.required),
      lastname: new FormControl(this.lastName, [
        Validators.minLength(3),
        Validators.email,
        Validators.required
        ])
    });
  }

  cleanValues():void {
    console.log('perro');
    this.title = '';
    this.title2 = '';
    this.firstname = '';
    this.lastName = '';
  }

  onSubmitForm():void {
    console.log(this.form.valid, this.form);
  }
}