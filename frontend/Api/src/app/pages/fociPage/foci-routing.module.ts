import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateFociComponent } from './create-foci/create-foci.component';
import { ListFociComponent } from './listFociPage/list-foci.component';

const routes: Routes = [
    { path: 'focis', component: ListFociComponent },

];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FociRoutingModule { }
