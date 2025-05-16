import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-maison',
  standalone: false,
  templateUrl: './ajouter-maison.component.html',
  styleUrl: './ajouter-maison.component.scss'
})
export class AjouterMaisonComponent {
  maisonForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.maisonForm = this.fb.group({
      nom: ['', Validators.required],
      superficie: ['', [Validators.required, Validators.min(10)]],
      categorie: ['', Validators.required],
      adresse: ['', Validators.required],
      quartier: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.maisonForm.valid) {
      console.log('Maison ajoutée :', this.maisonForm.value);
      alert('Maison ajoutée avec succès !');
      this.router.navigate(['/maisons']);
    }
  }
}