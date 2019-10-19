import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ContactPageModule } from './contact/contact.module';
import { AboutPageModule } from './about/about.module';
import { HomePageModule } from './home/home.module';
import { DetailPageModule } from './detail/detail.module';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';
import {TabsPageRoutingModule} from './app-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    AboutPageModule,
    ContactPageModule,
    DetailPageModule,
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}




