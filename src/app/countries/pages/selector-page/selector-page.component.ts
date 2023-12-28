import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.css']
})
export class SelectorPageComponent {
  private fb = inject(FormBuilder)
  
  public myForm = this.fb.group({
    region: ['', Validators.required ],
    country: ['', Validators.required ],
    border: ['', Validators.required ],

  })
}
