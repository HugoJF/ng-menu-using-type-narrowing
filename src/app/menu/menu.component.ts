import {Component, OnInit} from '@angular/core';

export type Item = {
  type: 'item',
  title: string,
}

export type Divider = {
  type: 'divider',
  text: string,
}

export type MenuContent = Item | Divider;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {

  menu: MenuContent[] = [{
    type: 'divider',
    text: 'Voice',
  }, {
    type: 'item',
    title: 'Discord'
  }, {
    type: 'item',
    title: 'Mattermost',
  }, {
    type: 'divider',
    text: 'Gaming'
  }, {
    type: 'item',
    title: 'Steam',
  }, {
    type: 'item',
    title: 'Origin',
  }, {
    type: 'item',
    title: 'Itch.io',
  }];

  constructor() {
  }

  ngOnInit(): void {
  }

  item(content: MenuContent): content is Item {
    return content.type === 'item';
  }

  divider(content: MenuContent): content is Divider {
    return content.type === 'divider';
  }
}
