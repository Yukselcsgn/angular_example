import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Sidebar } from './sidebar/sidebar';
import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  imports: [Navbar,Sidebar, RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export default class Layout {

}
