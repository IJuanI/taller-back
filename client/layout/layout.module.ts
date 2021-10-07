import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./routes/article').then(m => m.ArticleModule), pathMatch: 'full' },
  // { path: 'article', loadChildren: () => import('./routes/article').then(m => m.ArticleModule) },
  // { path: '**', redirectTo: '/article' },
];
@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),

    MatButtonModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } }
  ],
  bootstrap: [LayoutComponent]
})
export class LayoutModule { }
