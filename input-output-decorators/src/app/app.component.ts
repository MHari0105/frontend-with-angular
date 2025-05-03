import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { Customer } from './models/customer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AddCustomerComponent, ViewCustomerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'input-output-decorators';
  customers: Customer[] = [];

  getCustomers(customers: Customer[] ) {
    this.customers = customers;
  }

}
