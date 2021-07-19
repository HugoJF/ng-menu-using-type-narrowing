import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../menu/menu.component";

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
})
export class MenuItemComponent implements OnInit {
  @Input() title!: string;
  @Input() link!: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
