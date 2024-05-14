import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'custom-multiselect',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './custom-multiselect.component.html',
  styleUrl: './custom-multiselect.component.scss'
})
export class CustomMultiselectComponent {
  @Input() data: any[] = [];
  @Input() isGroupedData: boolean = false;
  @Output() selectionChange = new EventEmitter<any[]>();

  searchText: string = '';
  filteredData: any[] = [];

  constructor() { }

  ngOnChanges() {
    this.filteredData = this.data;
  }

  onSearchChange() {
    this.filteredData = this.data;

    // if (this.searchText) {
    //   this.filteredData = this.data.map(group => {
    //     if (this.isGroupedData) {
    //       return {
    //         ...group,
    //         children: group.children.filter((item: any) =>
    //           item.item_text.toLowerCase().includes(this.searchText.toLowerCase())
    //         )
    //       };
    //     } else {
    //       return group.item_text.toLowerCase().includes(this.searchText.toLowerCase()) ? group : false;
    //     }
    //   }).filter(group => {
    //     if (this.isGroupedData) {
    //       return group.children.length > 0;
    //     } else {
    //       return group;
    //     }
    //   });
    // } else {
    //   this.filteredData = this.data;
    // }
  }

  toggleSelection(item: any) {
    item.selected = !item.selected;
    const selectedItems = this.isGroupedData ? 
        this.data.flatMap(group => group.children) : 
        this.data;

    const selectedCount = selectedItems.filter((item: any) => item.selected).length;
    if (selectedCount > 0) {
        if (selectedCount === 1) {
            this.searchText = selectedItems.find((item: any) => item.selected).item_text;
        } else {
            this.searchText = `${selectedItems.filter((item: any) => item.selected)[selectedCount - 1].item_text} (${selectedCount - 1} ${selectedCount - 1 > 1 ? 'others' : 'other'})`;
        }
    } else {
        this.searchText = '';
    }
    
    this.selectionChange.emit(selectedItems.filter((item: any) => item.selected));
}


  // toggleSelection(item: any) {
  //   item.selected = !item.selected;
  //   let selectedItems;
  //   if(this.isGroupedData){
  //     selectedItems = this.data.flatMap(group => group.children.filter((item: any) => item.selected));
  //   } else {
  //     selectedItems = this.data.filter((item: any) => item.selected);
  //   }
  //   if(selectedItems && selectedItems.length > 0){
  //     if (selectedItems.length === 1) {
  //       this.searchText = selectedItems[0].item_text;
  //     } else if (selectedItems.length > 1) {
  //       this.searchText = `${selectedItems[selectedItems.length-1].item_text} (${selectedItems.length-1} ${((selectedItems.length-1)>1) ? 'others' : 'other'})`;
  //     }
  //     this.selectionChange.emit(selectedItems);
  //   } else {
  //     this.searchText = '';
  //     this.selectionChange.emit(selectedItems);
  //   }
  
  // }
}
