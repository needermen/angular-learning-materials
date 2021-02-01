import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { NavigationChildComponent } from './navigation-child/navigation-child.component';
import { Routes, RouterModule } from '@angular/router';
import { TabOneComponent } from './tab-one/tab-one.component';
import { TabTwoComponent } from './tab-two/tab-two.component';
import { TabThreeComponent } from './tab-three/tab-three.component';

export const navRoutes: Routes = [
  {
    path: "navigation",
    component: NavigationComponent,
    data: { description: 'bla bla' },
    children: [
      {
        path: "child-route",
        component: NavigationChildComponent
      },
      {
        path: "child-route/:id",
        component: NavigationChildComponent
      }
    ]
  },

  {
    path: "navigation/:userId",
    component: NavigationComponent,
    children: [
      {
        path: "tab-one",
        component: TabOneComponent
      },
      {
        path: "tab-two",
        component: TabTwoComponent
      },
      {
        path: "tab-three",
        component: TabThreeComponent
      }
    ]
  }
]

// @NgModule({
//   declarations: [],
//   imports: [
//     RouterModule.forChild(navRoutes)
//   ],
//   exports: [
//     RouterModule
//   ]
// })
// export class NavRoutingModule { }
