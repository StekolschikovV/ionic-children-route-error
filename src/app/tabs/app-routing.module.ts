import {HomePageModule} from './../home/home.module';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TabsPage} from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadChildren: './../home/home.module#HomePageModule'
                    },
                    {
                        path: 'detail',
                        loadChildren: './../detail/detail.module#DetailPageModule'
                    }
                ]
            },
            {
                path: 'about',
                children: [
                    {
                        path: '',
                        loadChildren: './../about/about.module#AboutPageModule'
                    }
                ]
            },
            {
                path: 'contact',
                children: [
                    {
                        path: '',
                        loadChildren: './../contact/contact.module#ContactPageModule'
                    }
                ]
            }
            ,
            {
                path: 'test',
                children: [
                    {
                        path: '',
                        loadChildren: './test/test.module#TestPageModule'
                    }
                ]
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
    }
    ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {
}
