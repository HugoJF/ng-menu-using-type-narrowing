import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {MenuItemComponent} from './menu-item/menu-item.component';
import {MenuDividerComponent} from './menu-divider/menu-divider.component';
import {MenuGroupComponent} from './menu-group/menu-group.component';
import {ChevronComponent} from "./svg/chevron-down/chevron.component";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuItemComponent,
    MenuDividerComponent,
    MenuGroupComponent,
    ChevronComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
