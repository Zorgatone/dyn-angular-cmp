import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

const jsonRes: any = {
  modules: [
    {
      id: '1',
      name: 'carousel',
      properties: {
        modules: [
          {
            id: '2',
            name: 'carousel-item',
            properties: {
              text: 'Item 1!',
            },
          },
          {
            id: '3',
            name: 'carousel-item',
            properties: {
              text: 'Item 2!',
            },
          },
        ],
      },
    },
    {
      id: '4',
      name: 'news',
      properties: {
        list: ['Article 1', 'Article 2'],
      },
    },
  ],
};

@Component({
  selector: 'xyz-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomepageComponent implements OnInit {
  public jsonResp: any;

  public constructor() {}

  public ngOnInit(): void {
    this.jsonResp = jsonRes;
  }

  public trackById(module: any): string {
    return module.id;
  }
}
