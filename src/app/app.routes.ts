import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { 
        path: '', 
        redirectTo: '/home', 
        pathMatch: 'full'
    },
    { 
        path: 'home', 
        component: HomeComponent, // Carga normal - se usa siempre
        title: 'Generador de Contraseñas'
    },
    { 
        path: 'auth/login', 
        loadComponent: () => import('./pages/auth/login/login.component')
            .then(m => m.LoginComponent), // Lazy loading - no todos los usuarios hacen login
        title: 'Iniciar Sesión'
    },
    { 
        path: '**', 
        redirectTo: '/home' 
    }
];