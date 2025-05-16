import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details-maison',
  standalone: false,
  templateUrl: './details-maison.component.html',
  styleUrl: './details-maison.component.scss'
})
export class DetailsMaisonComponent implements OnInit {
  maison: any;

  constructor(private route: ActivatedRoute , private router: Router) {}

  ngOnInit(): void {
    const maisonId = Number(this.route.snapshot.paramMap.get('id'));

    // Simuler la récupération de la maison
    this.maison = {
      id: maisonId,
      nom: 'Maison A',
      superficie: 150,
      categorie: 'Villa',
      adresse: 'Rue 123',
      quartier: 'Quartier Nord'
    };
  }

  supprimerMaison() {
    if (confirm("Confirmer la suppression ?")) {
      alert("Maison supprimée !");
      // Rediriger vers la liste
      this.router.navigate(['/maisons']);
    }
  }

}

