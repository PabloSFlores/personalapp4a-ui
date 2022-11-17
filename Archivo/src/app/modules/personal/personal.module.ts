import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPersonalComponent } from './pages/main-personal/main-personal.component';

@NgModule({
  declarations: [MainPersonalComponent],
  imports: [CommonModule],
  exports: [MainPersonalComponent],
})
export class PersonalModule {}
