import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Article } from 'api';

@Component({
  selector: 'taller-article-edit',
  templateUrl: 'article-edit.component.html'
})

export class ArticleEditComponent implements OnInit {
  form: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    body: new FormControl('')
  });


  constructor(
    public dialogRef: MatDialogRef<ArticleEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Article & { heading: string }) {
  }

  ngOnInit(): void {
    this.form.controls.title.setValue(this.data.title);
    this.form.controls.body.setValue(this.data.body);
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  getData(): Article {
    return {
      id: this.data.id,
      title: this.form.controls.title.value,
      body: this.form.controls.title.value,
    };
  }
}
