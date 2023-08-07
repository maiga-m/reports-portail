import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PagesBlankComponent } from './pages/pages-blank/pages-blank.component';
import { ListCatalogueItemComponent } from './components/list-catalogue-item/list-catalogue-item.component';
import { ListFolderComponent } from './components/list-folder/list-folder.component';
import { ListPowerBiReportComponent } from './components/list-power-bi-report/list-power-bi-report.component';
import { ShowReportComponent } from './components/show-report/show-report.component';
import { SafePipe } from './pipes/safe.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { initializeKeycloak } from './config/app.init';
import { AuthInterceptor } from './core/interceptor/auth.interceptor';
//import { TokenInterceptorProvider } from './core/interceptor/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
    PagesBlankComponent,
    ListCatalogueItemComponent,
    ListFolderComponent,
    ListPowerBiReportComponent,
    ShowReportComponent,
    SafePipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    KeycloakAngularModule
  ],
  providers: [
   {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
    //TokenInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
