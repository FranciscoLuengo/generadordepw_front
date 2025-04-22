import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

interface NavItem {
  label: string;
  route: string;
}
@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule, ButtonModule, RippleModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  mobileMenuOpen = false;
  darkMode = false;
  isAuthenticated = false; // Cambiar según tu lógica de autenticación

  navItems: NavItem[] = [
    { label: 'Inicio', route: '/' },
    { label: 'Productos', route: '/products' },
    { label: 'Servicios', route: '/services' },
    { label: 'Contacto', route: '/contact' },
    { label: 'Acerca de', route: '/about' }
  ];

  ngOnInit(): void {
    // Verificar el tema al cargar el componente
    this.checkDarkMode();
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  toggleTheme(): void {
    this.darkMode = !this.darkMode;
    if (this.darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }

  private checkDarkMode(): void {
    // Verificar preferencias del sistema o localStorage
    if (localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      this.darkMode = true;
      document.documentElement.classList.add('dark');
    } else {
      this.darkMode = false;
      document.documentElement.classList.remove('dark');
    }
  }
}
