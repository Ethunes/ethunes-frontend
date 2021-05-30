import { Component } from '@angular/core'
import { WalletService } from '../services/wallet.service'

import { MENU_ITEMS } from './pages-menu'

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {

  menu = MENU_ITEMS;

  constructor(private walletService: WalletService) {
    this.walletService.activeAccount$.subscribe(account=>{
      if(account){
        this.menu = MENU_ITEMS.concat(
          [
            {
              title: 'Your Profile',
              icon: 'person-outline',
              link: '/profile/'+account,
            },
            {
              title: 'Create',
              icon: 'plus-outline',
              link: '/create',
            },
          ]
        )
      } else {
        this.menu = MENU_ITEMS
      }
    })
  }

}
