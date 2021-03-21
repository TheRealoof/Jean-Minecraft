import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { DefaultComponent } from './default/default.component';
import { ModListComponent } from './mods/mod-list/mod-list.component';
import { ModComponent } from './mods/mod/mod.component';

@NgModule({
  declarations: [
    AppComponent,
    ModListComponent,
    ModComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
