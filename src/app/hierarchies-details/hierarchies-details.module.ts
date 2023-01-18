import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HierarchiesDetailsRoutingModule} from './hierarchies-details-routing.module';
import { HierarchiesDetailsComponent } from './hierarchies-details.component';
import {LayoutModule} from "../layout/layout.module";
import { StatisticsDataComponent } from './statistics-data/statistics-data.component';
import { HierarchyInfoComponent } from './hierarchy-info/hierarchy-info.component';
import { UserDefinedComponent } from './user-defined/user-defined.component';
import { ResponsibilitiesComponent } from './responsibilities/responsibilities.component';
import { SubordinatesComponent } from './subordinates/subordinates.component';
import { LinkedObjectsComponent } from './linked-objects/linked-objects.component';
import { LinkedKpisComponent } from './linked-kpis/linked-kpis.component';


@NgModule({
  declarations: [
    HierarchiesDetailsComponent,
    StatisticsDataComponent,
    HierarchyInfoComponent,
    UserDefinedComponent,
    ResponsibilitiesComponent,
    SubordinatesComponent,
    LinkedObjectsComponent,
    LinkedKpisComponent
  ],
  exports: [
    HierarchiesDetailsComponent
  ],
  imports: [
    CommonModule,
    HierarchiesDetailsRoutingModule,
    LayoutModule
  ]
})
export class HierarchiesDetailsModule {
}
