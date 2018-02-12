import { MoneypinMainComponent } from './MoneypinMain.component.js';
import { MainMenuComponent } from '../Components/MainMenu/MainMenu.component.js';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [BrowserModule],
    declarations: [MoneypinMainComponent, MainMenuComponent],
    bootstrap: [MoneypinMainComponent]
})

export class MoneypinMainModule {
}