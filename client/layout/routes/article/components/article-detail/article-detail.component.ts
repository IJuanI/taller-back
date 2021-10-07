import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Article } from 'api';
import { ArticlesService } from 'client/services';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'taller-article-detail',
  templateUrl: 'article-detail.component.html'
})

export class ArticleDetailComponent implements OnInit {
  article: Article;
  loading = false;

  constructor(
    private api: ArticlesService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.loading = true;

    this.route.paramMap
      .pipe(
        switchMap(params =>
          this.api.getArticle({ id: +params.get('id') })),
        tap(() => this.loading = false)
      ).subscribe(article => this.article = article);
  }
}