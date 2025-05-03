import { Component, EventEmitter, Output } from '@angular/core';
import { Customer } from '../models/customer';
import { log } from 'console';

@Component({
  selector: 'app-add-customer',
  standalone: true,
  imports: [],
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})
export class AddCustomerComponent {

  customers: Customer[] = [];

  @Output() customerAdded = new EventEmitter<Customer[]>;
  
  addCustomer(customerName: string) {
    let customer: Customer = { name : customerName };
    this.customers.push(customer);
    this.customerAdded.emit(this.customers);
  }

}
