import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPersonalComponent } from './pages/main-personal/main-personal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainPersonalComponent],
  imports: [CommonModule, FormsModule],
  exports: [MainPersonalComponent],
})
export class PersonalModule {}
