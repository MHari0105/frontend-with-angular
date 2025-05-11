import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { UserInputModule } from './user-input/user-input.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InvestmentResultsComponent
  ],
  imports: [
    BrowserModule,
    UserInputModule     // CALLING A MODULE IN ANOTHER MODULE
    // FormsModule       // FORMS MODULE IS ALREADY IMPORTED IN USER INPUT MODULE
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }