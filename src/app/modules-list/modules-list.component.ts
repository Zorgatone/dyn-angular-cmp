import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'xyz-modules-list',
  templateUrl: './modules-list.component.html',
  styleUrls: ['./modules-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModulesListComponent implements OnInit {
  @Input()
  public modules: any[];

  public constructor() {}

  public ngOnInit(): void {}

  public trackById(module: any): string {
    return module.id;
  }
}
