import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modifier-categorie',
  standalone: false,
  templateUrl: './modifier-categorie.component.html',
  styleUrl: './modifier-categorie.component.scss'
})

export class ModifierCategorieComponent implements OnInit {
  categorieForm!: FormGroup;
  categorieId!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categorieId = Number(this.route.snapshot.paramMap.get('id'));

    // Simuler la récupération des données
    const categorie = { nom: 'Villa' };

    this.categorieForm = this.fb.group({
      nom: [categorie.nom, Validators.required]
    });
  }

  onSubmit(): void {
    if (this.categorieForm.valid) {
      console.log('Catégorie modifiée :', this.categorieForm.value);
      alert('Catégorie modifiée avec succès !');
      this.router.navigate(['/categories']);
    }
  }
}
