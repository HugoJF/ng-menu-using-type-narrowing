import {Component, Input, OnInit} from '@angular/core';

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
