// src/app/achat/achat.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// @ts-ignore
import { AchatService } from './services/achat.service';

@Component({
  selector: 'app-achat',
  templateUrl: './achat.component.html',
  standalone: true,
  styleUrls: ['./achat.component.css']
})
export class AchatComponent {
  achatForm: FormGroup;

  constructor(private fb: FormBuilder, private achatService: AchatService) {
    this.achatForm = this.fb.group({
      montant: [0, [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit() {
    if (this.achatForm.valid) {
      const montant = this.achatForm.value.montant;
      this.achatService.acheterCredit(montant).subscribe(
        (response: any) => alert("Achat réussi!"),  // type explicite
        (error: any) => alert("Erreur d'achat.")
      );
    }
  }

}
