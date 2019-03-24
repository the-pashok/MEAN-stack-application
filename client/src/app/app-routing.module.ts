import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// components
import {HomeComponent} from './components/home/home.component';
import {DashboardComponent} from './components/dashboard/dashboard.component'
import {BlogComponent} from "./components/blog/blog.component";
import {AboutComponent} from "./components/about/about.component";
import {ErrorComponent} from "./components/error/error.component";
import {ArticleComponent} from "./components/article/article.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";

const appRoutes: Routes = [
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'dashboard', component: DashboardComponent
    },
    {
        path: 'blog', component: BlogComponent
    },
    {
        path: 'blog/post/:id', component: ArticleComponent
    },
    {
        path: 'about', component: AboutComponent
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'register', component: RegisterComponent
    },
    {
        path: '**', component: ErrorComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
