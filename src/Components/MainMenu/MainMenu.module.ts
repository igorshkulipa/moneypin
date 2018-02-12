import { MainMenuComponent } from './MainMenu.component.js';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [BrowserModule],
    declarations: [MainMenuComponent],
    bootstrap: [MainMenuComponent]
})

export class MainMenuModule {
}