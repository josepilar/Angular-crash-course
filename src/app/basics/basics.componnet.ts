import { Component } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'basics',
  templateUrl: './basics.component.html'
})
export class BasicsComponent{
  title: string = "Basics stater"
  title2: string;
  form: FormGroup;
  name: string;
  lastName: string;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.createForm();
  }

  createForm(): FormGroup{
    return new FormGroup({
      firstname: new FormControl(this.name, Validators.required),
      lastname: new FormControl(this.lastName, [
        Validators.minLength(3),
        Validators.required
        ])
    });
  }

  onSubmitForm():void {
    console.log(this.form.valid, this.form);
  }
}