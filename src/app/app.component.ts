import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class AppComponent implements OnInit {
  title = 'Livre';
  
  constructor(public authService: AuthService, private router: Router) {}
  
  ngOnInit() {}
  
  onLogout() {
    this.authService.logout();
  }
}