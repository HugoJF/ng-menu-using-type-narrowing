import {Component, Input, OnInit} from '@angular/core';
import {Divider} from "../menu/menu.component";

@Component({
  selector: 'app-menu-divider',
  templateUrl: './menu-divider.component.html',
})
export class MenuDividerComponent implements OnInit {
  @Input() text!: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
