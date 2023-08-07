import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PagesBlankComponent } from './pages/pages-blank/pages-blank.component';
import { ListCatalogueItemComponent } from './components/list-catalogue-item/list-catalogue-item.component';
import { ListFolderComponent } from './components/list-folder/list-folder.component';
import { ListPowerBiReportComponent } from './components/list-power-bi-report/list-power-bi-report.component';
import { ShowReportComponent } from './components/show-report/show-report.component';
import { PagesError404Component } from './pages/pages-error404/pages-error404.component';
import { AuthGuard } from './config/app.guard';

const routes: Routes = [
  { path: '',  component: DashboardComponent , canActivate: [AuthGuard]},
  { path: 'dashboard', component: DashboardComponent , canActivate: [AuthGuard] }
  
  /*, data: {
    authorities: [Authority.USER],
  },
  canActivate: [UserRouteAccessService] },
  {
    path: 'admin',
    data: {
      authorities: [Authority.ADMIN],
    },
    canActivate: [UserRouteAccessService],
    loadChildren: () => import('./admin/admin-routing.module').then(m => m.AdminRoutingModule),
  }*/,
  
  { path: 'show-report/:id', component: ShowReportComponent , canActivate: [AuthGuard]},
  { path: 'pages-blank', component: PagesBlankComponent },
  { path: 'list-catalog-item', component: ListCatalogueItemComponent},
  { path: 'list-folder', component: ListFolderComponent},
  { path: 'list-power-bi-report', component: ListPowerBiReportComponent},

  { path: '**', redirectTo: 'pages-error404', pathMatch: 'full' },
  { path: 'pages-error404', component: PagesError404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
