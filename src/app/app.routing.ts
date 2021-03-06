import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { DashboardProdutosComponent } from './dashboard-produtos/dashboard-produtos.component';
import {PerfilComponent} from './perfil/perfil.component';

const APP_ROUTES: Routes = [
    { path: 'cadastro', component: CadastroComponent },
    { path: 'login', component: LoginComponent },
    { path: 'perfil', component: PerfilComponent },
    { path: '', component: HomeComponent },
    { path: 'pedidos', component: PedidosComponent },
    { path: 'dashboard', component: DashboardProdutosComponent },
    { path: 'produtos', component: ProdutosComponent },
    
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);