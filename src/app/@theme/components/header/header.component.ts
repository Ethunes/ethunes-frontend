import { Component, OnDestroy, OnInit } from '@angular/core'
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme'

import { UserData } from '../../../@core/data/users'
import { LayoutService } from '../../../@core/utils'
import { map, takeUntil } from 'rxjs/operators'
import { Subject } from 'rxjs'
import { WalletService } from '../../../services/wallet.service'
import { Router } from '@angular/router'

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  account$ = this.walletService.activeAccount$

  themes = [
    {
      value: 'cosmic',
      name: 'Dark',
    },
    {
      value: 'corporate',
      name: 'Light',
    }
  ];

  currentTheme = 'cosmic';

  userMenu = [{ title: 'Profile' }, { title: 'Log out' }];

  constructor(private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private themeService: NbThemeService,
    private router: Router,
    private walletService: WalletService,
    private layoutService: LayoutService,
    private breakpointService: NbMediaBreakpointsService) {
  }

  ngOnInit() {
    this.currentTheme = this.themeService.currentTheme

    const { xl } = this.breakpointService.getBreakpointsMap()
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl)

    this.themeService.onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$),
      )
      .subscribe(themeName => this.currentTheme = themeName)
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName)
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar')
    this.layoutService.changeLayoutSize()

    return false
  }

  navigateHome() {
    this.menuService.navigateHome()
    return false
  }

  showProfile(account: string){
    this.router.navigate(['/', 'profile', account])
  }

  async connect() {
    console.log('connect')
    if (this.account$.value === undefined) {
      this.walletService.connect()
    }
  }
}
