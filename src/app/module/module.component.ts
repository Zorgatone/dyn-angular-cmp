import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
  Directive,
  ViewChild,
  ComponentFactoryResolver,
  ViewContainerRef,
  Injector,
  Inject,
  ComponentFactory,
} from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { DOCUMENT } from '@angular/common';
import { ModulesListComponent } from '../modules-list/modules-list.component';
import { NewsComponent } from '../news/news.component';
import { CarouselItemComponent } from '../carousel-item/carousel-item.component';

@Directive({ selector: '[slot-module]' })
export class SlotModule {
  public constructor(public viewContainerRef: ViewContainerRef) {}
}

@Component({
  selector: 'xyz-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModuleComponent implements OnInit {
  @ViewChild(SlotModule, { static: true }) slotModule: SlotModule;

  @Input()
  public module: any;

  public constructor(
    private _resolver: ComponentFactoryResolver,
    private injector: Injector,
    @Inject(DOCUMENT) private document: Document
  ) {}

  public ngOnInit(): void {
    this._loadModule();
  }

  private _loadModule(): void {
    let component: any;

    if (this.module.name === 'carousel') {
      component = CarouselComponent;
    } else if (this.module.name === 'news') {
      component = NewsComponent;
    } else if (this.module.name === 'carousel-item') {
      component = CarouselItemComponent;
    } else {
      return null;
    }

    const cmpFact: ComponentFactory<any> = this._resolver.resolveComponentFactory(
      component
    );
    const viewContRef = this.slotModule.viewContainerRef;
    const ngContent = this.module?.modules
      ? this.resolveNgContent(this.module.modules)
      : undefined;
    const compRef = viewContRef.createComponent(
      cmpFact,
      undefined,
      undefined,
      ngContent
    );

    if (
      typeof this.module.properties === 'object' &&
      this.module.properties !== null
    ) {
      for (let entry of Object.entries(this.module.properties)) {
        const [key, value] = entry;
        compRef.instance[key] = value;
      }
      console.log(this.module.properties, compRef);
    }

    compRef.hostView.detectChanges();
  }

  private resolveNgContent<T>(modules) {
    if (!modules?.length) {
      return undefined;
    }

    const factory = this._resolver.resolveComponentFactory(
      ModulesListComponent
    );
    const componentRef = factory.create(this.injector);
    componentRef.instance.modules = modules;
    componentRef.hostView.detectChanges();

    return [[componentRef.location.nativeElement]];
  }
}
