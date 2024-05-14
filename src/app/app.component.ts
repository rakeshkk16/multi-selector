import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CustomMultiselectComponent } from '../custom-multiselect/custom-multiselect.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CustomMultiselectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'search-multiselector';
  isGroupedData: boolean = false;
  data = [
    { item_id: 1, item_text: 'Virat Kohli' },
    { item_id: 2, item_text: 'Rohit Sharma' },
    { item_id: 3, item_text: 'Kane Williamson' },
    { item_id: 4, item_text: 'Steve Smith' },
  ];
  // data = [
  //   { group: 'Group A', children: [
  //     { item_id: 1, item_text: 'Virat Kohli' },
  //     { item_id: 2, item_text: 'Rohit Sharma' },
  //   ]},
  //   { group: 'Group B', children: [
  //     { item_id: 3, item_text: 'Kane Williamson' },
  //     { item_id: 4, item_text: 'Steve Smith' },
  //   ]},
  // ];

  handleSelectionChange(event: any){
    console.log(event);
  }
}
