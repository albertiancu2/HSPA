import { Component } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent {

  properties: Array<any> = [
    {
      "Id": 1,
      "Type": "House",
      "Name": "BBB",
      "Price": 120000
    },
    {
      "Id": 2,
      "Type": "Apartment",
      "Name": "ccc",
      "Price": 23112333
    },
    {
      "Id": 3,
      "Type": "House",
      "Name": "ddd",
      "Price": 120000
    },
    {
      "Id": 4,
      "Type": "House",
      "Name": "gggg",
      "Price": 120000
    }

  ]
}
