import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AdvantageComponent } from './components/advantage/advantage.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

import { ButtonHoverDirective } from './directives/button-hover.directive';

import { TruncatePipe } from './pipes/truncate.pipe';
import { PhoneFormatPipe } from './pipes/phone-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AdvantageComponent,
    ProductCardComponent,
    ButtonHoverDirective,
    TruncatePipe,
    PhoneFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
