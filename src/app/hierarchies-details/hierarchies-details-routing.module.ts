import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HierarchiesDetailsComponent} from "./hierarchies-details.component";
import {AuthGuard} from "../auth/services/auth.guard";

const routes: Routes = [{
  path: 'hierarchies-details',
  component: HierarchiesDetailsComponent,
  canActivate: [AuthGuard]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HierarchiesDetailsRoutingModule {
}
