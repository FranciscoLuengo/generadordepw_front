import { Component } from '@angular/core';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-register',
  imports: [PasswordModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
