import { Component } from '@angular/core';

@Component({
  selector: 'app-quartiers',
  standalone: false,
  templateUrl: './quartiers.component.html',
  styleUrl: './quartiers.component.scss'
})
export class QuartiersComponent {
  quartiers = [
    { id: 1, nom: 'Quartier Soleil', superficie: 1500, description: 'Proche du marché central' },
    { id: 2, nom: 'Quartier Nord', superficie: 2000, description: 'Zone résidentielle calme' },
    { id: 3, nom: 'Quartier Sud', superficie: 1800, description: 'Accès rapide aux écoles' }
  ];

  supprimerQuartier(id: number) {
    if (confirm("Êtes-vous sûr de vouloir supprimer ce quartier ?")) {
      this.quartiers = this.quartiers.filter(q => q.id !== id);
      alert("Quartier supprimé !");
    }
  }
}
