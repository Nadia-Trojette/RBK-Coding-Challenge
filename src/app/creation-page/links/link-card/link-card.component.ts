import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Link } from 'src/app/models/link';

@Component({
  selector: 'app-link-card',
  templateUrl: './link-card.component.html',
  styleUrls: ['./link-card.component.scss'],
})
export class LinkCardComponent implements OnInit {
  @Input()
  link!: Link;

  @Output() removeLinkEvent = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  removeLink() {
    this.removeLinkEvent.emit();
  }
}
