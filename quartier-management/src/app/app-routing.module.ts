import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { QuartiersComponent } from './pages/quartiers/quartiers.component';
import { AjouterQuartierComponent } from './pages/ajouter-quartier/ajouter-quartier.component';
import { ModifierQuartierComponent } from './pages/modifier-quartier/modifier-quartier.component';
import { DetailsQuartierComponent } from './pages/details-quartier/details-quartier.component';
import { MaisonsComponent } from './pages/maisons/maisons.component';
import { AjouterMaisonComponent } from './pages/ajouter-maison/ajouter-maison.component';
import { DetailsMaisonComponent } from './pages/details-maison/details-maison.component';
import { ModifierMaisonComponent } from './pages/modifier-maison/modifier-maison.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { AjouterCategorieComponent } from './pages/ajouter-categorie/ajouter-categorie.component';
import { ModifierCategorieComponent } from './pages/modifier-categorie/modifier-categorie.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'quartiers', component: QuartiersComponent, canActivate: [AuthGuard] },
  { path: 'quartiers/ajouter', component: AjouterQuartierComponent },
  { path: 'quartiers/:id/modifier', component: ModifierQuartierComponent },
  { path: 'quartiers/:id', component: DetailsQuartierComponent },
  { path: 'maisons', component: MaisonsComponent },
  { path: 'maisons/ajouter', component: AjouterMaisonComponent },
  { path: 'maisons/:id', component: DetailsMaisonComponent },
  { path: 'maisons/:id/modifier', component: ModifierMaisonComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'categories/ajouter', component: AjouterCategorieComponent },
  { path: 'categories/:id/modifier', component: ModifierCategorieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
