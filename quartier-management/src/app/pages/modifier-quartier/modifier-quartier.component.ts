import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-modifier-quartier',
  standalone: false,
  templateUrl: './modifier-quartier.component.html',
  styleUrl: './modifier-quartier.component.scss'
})
export class ModifierQuartierComponent implements OnInit {
  quartierForm!: FormGroup;
  quartierId!: number;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.quartierId = Number(this.route.snapshot.paramMap.get('id'));

    // Simulation : charger quartier avec l'ID
    const quartier = {
      nom: 'Quartier Sud',
      superficie: 1800,
      description: 'Accès rapide aux écoles'
    };

    this.quartierForm = this.fb.group({
      nom: [quartier.nom, Validators.required],
      superficie: [quartier.superficie, [Validators.required, Validators.min(1)]],
      description: [quartier.description]
    });
  }

  onSubmit() {
    if (this.quartierForm.valid) {
      console.log('Quartier modifié :', this.quartierForm.value);
      alert('Quartier modifié avec succès !');
      this.router.navigate(['/quartiers']);
    }
  }
}
