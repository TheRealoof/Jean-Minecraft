import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";
import { DefaultComponent } from "./default/default.component";
import { ModListComponent } from "./mods/mod-list/mod-list.component";

const routes: Routes = [
    { path: 'default', component: DefaultComponent },
    { path: 'mod-list', component: ModListComponent },
    { path: '', redirectTo: '/default', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}