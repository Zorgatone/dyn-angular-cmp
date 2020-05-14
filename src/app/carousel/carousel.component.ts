import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'xyz-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent implements OnInit, OnChanges {
  public constructor() {}

  public ngOnInit(): void {
    console.log('ngOnInit', this);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }
}
