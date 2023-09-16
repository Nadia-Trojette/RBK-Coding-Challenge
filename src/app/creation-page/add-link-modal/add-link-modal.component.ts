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
    { value: 'Github', icon: 'assets/logos/github.svg' },
    { value: 'LinkedIn', icon: 'assets/logos/linkedin.svg' },
    { value: 'Youtube', icon: 'assets/logos/youtube.svg' },
    { value: 'Facebook', icon: 'assets/logos/facebook.svg' },
    { value: 'Instagram', icon: 'assets/logos/instagram.svg' },
    { value: 'Custom', icon: 'assets/icons/link.svg' },
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
      platform: this.linkTypeInput?.value.value,
      icon: this.linkTypeInput?.value.icon,
      link: this.linkNameInput?.value,
    };
    this.dialogRef.close(sentData);
  }

  onDismiss(): void {
    this.dialogRef.close(false);
  }
}
