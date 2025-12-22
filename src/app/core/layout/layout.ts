import { Component } from '@angular/core';
import { Sidebar } from "./sidebar/sidebar";
import { Navbar } from "./navbar/navbar";

import { MainService } from '../services/main-service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-layout',
  imports: [Sidebar, Navbar, NgClass],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
constructor(public service:MainService){

}
}
