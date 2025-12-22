import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  imports: [CommonModule],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
})
export class UserProfile {
 isSidebarOpen = false;
  isSidebarDropdownOpen = false;
  isScrolled = false;

  constructor() {
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

  openSidebar() {
    this.isSidebarOpen = true;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  }

  closeSidebar() {
    this.isSidebarOpen = false;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }

  toggleSidebarDropdown() {
    this.isSidebarDropdownOpen = !this.isSidebarDropdownOpen;
  }
}
