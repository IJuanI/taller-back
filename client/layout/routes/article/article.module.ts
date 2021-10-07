import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ConfirmationModule } from 'client/layout/custom';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article.component';
import { MatIconModule } from '@angular/material/icon';
import { ArticleDetailComponent, ArticleEditComponent } from './components';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ArticleComponent },
  { path: ':id', component: ArticleDetailComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatListModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatButtonModule,
    MatTooltipModule,
    ConfirmationModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [],
  declarations: [ArticleComponent, ArticleDetailComponent, ArticleEditComponent],
  providers: [],
})
export class ArticleModule { }
