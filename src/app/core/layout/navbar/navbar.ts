import { Component, HostListener } from '@angular/core';
import { MainService } from '../../services/main-service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
//  isSidebarOpen = false; 
 isScrolled = false;
  constructor(public service:MainService) {
    // Listen to scroll events
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        this.isScrolled = window.scrollY > 0;
      });

      // Listen to escape key
      window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
          this.closeSidebar();
        }
      });
    }
  }
public openSidebar() {
 this.service.toggleSidebar();
//  console.log(this.service.showSideBar);
 
    // this.isSidebarOpen = true;
    // if (typeof document !== 'undefined') {
    //   document.body.style.overflow = 'hidden';
    // }
  }

  closeSidebar() {
    // this.isSidebarOpen = false;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }
}
