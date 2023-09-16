import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-link-modal',
  templateUrl: './add-link-modal.component.html',
  styleUrls: ['./add-link-modal.component.scss'],
})
export class AddLinkModalComponent implements OnInit {
  linkForm!: FormGroup;

  linkTypes = [
    'Github',
    'LinkedIn',
    'Youtube',
    'Facebook',
    'Instagram',
    'Custom',
  ];

  constructor(
    public dialogRef: MatDialogRef<AddLinkModalComponent>,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.linkForm = this.formBuilder.group({
      linkType: new FormControl(''),
      linkName: new FormControl(''),
    });
  }

  get linkTypeInput() {
    return this.linkForm.get('linkType');
  }

  get linkNameInput() {
    return this.linkForm.get('linkName');
  }

  onConfirm(): void {
    const sentData = {
      platform: this.linkTypeInput?.value,
      link: this.linkNameInput?.value,
    };
    this.dialogRef.close(sentData);
  }

  onDismiss(): void {
    this.dialogRef.close(false);
  }
}
