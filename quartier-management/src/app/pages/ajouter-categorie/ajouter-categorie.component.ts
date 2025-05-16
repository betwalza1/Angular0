import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-categorie',
  standalone: false,
  templateUrl: './ajouter-categorie.component.html',
  styleUrl: './ajouter-categorie.component.scss'
})

export class AjouterCategorieComponent {
  categorieForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.categorieForm = this.fb.group({
      nom: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.categorieForm.valid) {
      console.log("Catégorie ajoutée :", this.categorieForm.value);
      alert("Catégorie ajoutée avec succès !");
      this.router.navigate(['/categories']);
    }
  }
}