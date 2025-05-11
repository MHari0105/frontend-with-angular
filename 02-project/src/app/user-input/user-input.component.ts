import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  // @Output() calculate = new EventEmitter<InvestmentInput>();
  // calculate = output<InvestmentInput>();

  constructor(private investmentService: InvestmentService) { }
  
  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment(),  // + CONVERT STRING TO NUMBER 
      annualInvestment: +this.enteredAnnualInvestment(),
      expectedReturn: +this.enteredExpectedReturn(),
      duration: +this.enteredDuration()
    });
    // this.calculate.emit({
    //   initialInvestment: +this.enteredInitialInvestment(),  // + CONVERT STRING TO NUMBER
    //   annualInvestment: +this.enteredAnnualInvestment(),
    //   expectedReturn: +this.enteredExpectedReturn(),
    //   duration: +this.enteredDuration()
    // });
    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');  
    this.enteredExpectedReturn.set('5');
    this.enteredDuration.set('10');
  }

}
