import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTableModule } from '@angular/material/table'
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule} from '@angular/material/tooltip';
import { FooterComponent } from './layout/footer/footer.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule} from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { HomeComponent } from './_pages/home/home.component';
import { InfoBenComponent } from './_pages/info-ben/info-ben.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { InfoConComponent } from './_pages/info-con/info-con.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavigationComponent,
    SkeletonComponent,
    SidenavComponent,
    InfoBenComponent,
    InfoConComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatAutocompleteModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatMenuModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
