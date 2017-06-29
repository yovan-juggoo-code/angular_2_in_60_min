import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import {UserComponent} from './components/user/component/user.component';
import {AboutComponent} from './components/about/component/about.component';


const appRoutes: Routes  = [
	{
		path: '',
		component: UserComponent
	},
	{
		path: 'about',
		component: AboutComponent
	},
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);