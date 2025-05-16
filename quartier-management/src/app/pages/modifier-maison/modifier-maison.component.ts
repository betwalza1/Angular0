import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modifier-maison',
  standalone: false,
  templateUrl: './modifier-maison.component.html',
  styleUrl: './modifier-maison.component.scss'
})
export class ModifierMaisonComponent implements OnInit {
  maisonForm!: FormGroup;
  maisonId!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.maisonId = Number(this.route.snapshot.paramMap.get('id'));

    // Simuler la maison récupérée
    const maison = {
      nom: 'Maison A',
      superficie: 150,
      categorie: 'Villa',
      adresse: 'Rue 123',
      quartier: 'Quartier Nord'
    };

    this.maisonForm = this.fb.group({
      nom: [maison.nom, Validators.required],
      superficie: [maison.superficie, [Validators.required, Validators.min(10)]],
      categorie: [maison.categorie, Validators.required],
      adresse: [maison.adresse, Validators.required],
      quartier: [maison.quartier, Validators.required]
    });
  }

  onSubmit() {
    if (this.maisonForm.valid) {
      console.log('Maison modifiée :', this.maisonForm.value);
      alert('Maison modifiée avec succès !');
      this.router.navigate(['/maisons']);
    }
  }
}