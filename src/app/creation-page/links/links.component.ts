import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/models/link';
import { AddLinkModalComponent } from '../add-link-modal/add-link-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss'],
})
export class LinksComponent implements OnInit {
  links: Link[] = [];

  result: any;

  constructor(
    public dialog: MatDialog,
    private sharedDataService: SharedDataService
  ) {}

  ngOnInit(): void {}

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.links, event.previousIndex, event.currentIndex);
  }

  addLink() {
    const dialogRef = this.dialog.open(AddLinkModalComponent, {
      maxWidth: '80rem',
      autoFocus: false,
    });

    dialogRef.afterClosed().subscribe((dialogResult) => {
      this.result = dialogResult;
      console.log(this.result);

      this.links.push(this.result);
    });
  }

  saveData() {
    this.sharedDataService.setData({ links: this.links });
    const dataString = JSON.stringify({ links: this.links });

    localStorage.setItem('links', dataString);
  }

  removeLink(itemToDelete: Link) {
    const index = this.links.indexOf(itemToDelete);

    // Remove the item from the array
    if (index !== -1) {
      this.links.splice(index, 1);
    }
    const linksString = localStorage.getItem('links');

    if (linksString) {
      let linksList = JSON.parse(linksString);

      // Check if the index is within the valid range of the list
      if (index >= 0 && index < linksList.length) {
        // Use the splice method to remove the item at the specified index
        linksList.splice(index, 1);

        // Convert the updated list back to a JSON string
        const updatedListString = JSON.stringify(linksList);

        // Save the updated list back to local storage
        localStorage.setItem('links', updatedListString);
      }
    }

    this.sharedDataService.setData({ links: this.links });
  }
}
