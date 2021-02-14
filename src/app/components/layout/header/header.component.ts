import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../services/layout/layout.service';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

import { 
  NbMediaBreakpointsService,
  NbSidebarService,
  NbMenuService,
  NbThemeService 

} from '@nebular/theme';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  constructor(

    private sidebarService: NbSidebarService,
    private layoutService: LayoutService,
    private menuService: NbMenuService,
    private themeService: NbThemeService,
    private breakpointService: NbMediaBreakpointsService,


  ) { }

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;

  userMenu = [ { title: 'Profile' }, { title: 'Log out' } ];
  

  ngOnInit(): void {

    
    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);


  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
