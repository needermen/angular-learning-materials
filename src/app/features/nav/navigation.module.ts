import { NgModule } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';
import { NavigationChildComponent } from './navigation-child/navigation-child.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TabOneComponent } from './tab-one/tab-one.component';
import { TabTwoComponent } from './tab-two/tab-two.component';
import { TabThreeComponent } from './tab-three/tab-three.component';

@NgModule({
  declarations: [
    NavigationComponent,
    NavigationChildComponent,
    TabOneComponent,
    TabTwoComponent,
    TabThreeComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
})
export class NavigationModule { }
