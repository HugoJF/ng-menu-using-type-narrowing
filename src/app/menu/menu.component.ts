import {Component, OnInit} from '@angular/core';

export type Item = {
  type: 'item',
  title: string,
  link: string,
}

export type Divider = {
  type: 'divider',
  text: string,
}

export type Group = {
  type: 'group',
  title: string,
  items: Item[],
}

export type MenuContent = Item | Divider | Group;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {

  menu: MenuContent[] = [
    {
      type: 'divider',
      text: 'Voice',
    }, {
      type: 'item',
      title: 'Discord',
      link: 'https://discord.com/',
    }, {
      type: 'item',
      title: 'Mattermost',
      link: 'https://mattermost.com/',
    }, {
      type: 'divider',
      text: 'Gaming'
    }, {
      type: 'item',
      title: 'Steam',
      link: 'https://store.steampowered.com/',
    }, {
      type: 'item',
      title: 'Origin',
      link: 'https://www.origin.com/',
    }, {
      type: 'item',
      title: 'Itch.io',
      link: 'https://itch.io/',
    }, {
      type: 'divider',
      text: 'Auth',
    }, {
      type: 'group',
      title: 'User',
      items: [
        {
          type: "item",
          link: '/profile',
          title: 'Profile',
        }, {
          type: "item",
          link: '/logout',
          title: 'Logout',
        },
      ],
    }
  ];

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

  group(content: MenuContent): content is Group {
    return content.type === 'group';
  }
}
