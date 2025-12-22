import { Component } from '@angular/core';
import { MainService } from '../../services/main-service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [NgClass],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
constructor(public service:MainService){ 

} public toggleSidebar() {
    this.service.toggleSidebar();
  }
}
