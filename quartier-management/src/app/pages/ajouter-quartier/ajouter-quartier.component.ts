import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ajouter-quartier',
  standalone: false,
  templateUrl: './ajouter-quartier.component.html',
  styleUrl: './ajouter-quartier.component.scss'
})
export class AjouterQuartierComponent {
  quartierForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.quartierForm = this.fb.group({
      nom: ['', Validators.required],
      superficie: ['', [Validators.required, Validators.min(1)]],
      description: ['']
    });
  }

  onSubmit() {
    if (this.quartierForm.valid) {
      const data = this.quartierForm.value;
      console.log('Quartier ajouté :', data);
      alert('Quartier ajouté avec succès !');
      this.router.navigate(['/quartiers']);
    } else {
      alert('Veuillez remplir correctement le formulaire.');
    }
  }
}
