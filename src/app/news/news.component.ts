import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'xyz-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsComponent implements OnInit, OnChanges {
  @Input()
  public list: string[];

  public constructor() {}

  public ngOnInit(): void {
    console.log('initial news list', this.list);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
    console.log('initial news list', this.list);
  }

  public trackById(article: any): string {
    return article.id;
  }
}
