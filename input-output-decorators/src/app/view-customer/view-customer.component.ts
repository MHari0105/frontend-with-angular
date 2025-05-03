import { Component, Input } from '@angular/core';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-view-customer',
  standalone: true,
  imports: [],
  templateUrl: './view-customer.component.html',
  styleUrl: './view-customer.component.css'
})
export class ViewCustomerComponent {

  @Input()
  customers : Customer[] = [];
  
}
