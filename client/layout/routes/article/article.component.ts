import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Article, ArticlePreview } from 'api';
import { ConfirmationComponent, ConfirmationData } from 'client/layout/custom';
import { ArticlesService } from 'client/services';
import { tap } from 'rxjs/operators';
import { ArticleEditComponent } from './components';

@Component({
  selector: 'taller-article',
  templateUrl: 'article.component.html'
})

export class ArticleComponent implements OnInit {

  articles: ArticlePreview[];
  loading = false;
  initialized = false;

  constructor(
    private api: ArticlesService,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog) { }


  ngOnInit(): void {
    this.loading = true;
    this.api.listArticles()
      .pipe(tap(() => {
        this.loading = false;
        this.initialized = true;
      }))
      .subscribe({
        next: articles => {
          this.articles = articles;
        },
        error: () => {
          this._snackBar.open('Error al recuperar la lista de articulos.', 'Ok');
          this.loading = false;
        }
      });
  }

  createArticle(): void {
    const dialogRef = this.dialog.open(ArticleEditComponent, {
      data: {
        heading: 'Crear un artículo',
        id: -1,
        title: '',
        body: ''
      }
    });

    dialogRef
      .afterClosed()
      .subscribe({
        next: res => {
          if (res === undefined) return;
          this.api.createArticle(res)
            .subscribe({
              error: () =>
                this._snackBar.open('Error al crear un artículo.', 'Ok')
            });
        }
      });
  }

  deleteArticle(articleId: number, event: any): void {
    const articleIdx = this.articles.findIndex(article => article.id === articleId);
    const article = this.articles[articleIdx];
    const dialogRef = this.dialog.open(ConfirmationComponent, {
      data: {
        title: 'Eliminar artículo',
        mode: 'warning',
        description: `¿Está seguro que desea eliminar el artículo ${article.title}?`,
        buttons: ['Eliminar', 'Cancelar']
      } as ConfirmationData
    });

    dialogRef
      .afterClosed()
      .subscribe({
        next: res => {
          if (res === undefined) return;
          this.api.deleteArticle({ id: articleId })
            .subscribe({
              error: () =>
                this._snackBar.open('Error al eliminar un artículo.', 'Ok')
            });
        }
      });

    event.stopPropagation();
  }
}
