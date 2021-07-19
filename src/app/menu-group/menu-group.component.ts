import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../menu/menu.component";

@Component({
  selector: 'app-menu-group',
  templateUrl: './menu-group.component.html'
})
export class MenuGroupComponent implements OnInit {
  @Input() title!: string;
  @Input() items!: Item[];

  open = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggle() {
    this.open = !this.open;
  }
}
