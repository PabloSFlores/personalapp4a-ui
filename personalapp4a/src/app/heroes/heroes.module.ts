import { NgModule } from '@angular/core';
import { HeroesMainPageComponent } from './main-page/main-page.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [HeroesMainPageComponent, ListComponent], //Todos los componentes del modulo
  imports: [], //Solo se agregan otros modulos
  providers: [], //Se agregan los servicios
  exports: [HeroesMainPageComponent],
})

export class HeroesModule{

}
