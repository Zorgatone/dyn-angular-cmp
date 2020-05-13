import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'xyz-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModuleComponent implements OnInit {
  @Input()
  public module: any;

  public constructor() {}

  public ngOnInit(): void {}
}
