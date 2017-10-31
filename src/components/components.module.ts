import { NgModule } from '@angular/core';
import { SearchComponent } from './search/search';
import { ResultKartComponent } from './result-kart/result-kart';
@NgModule({
	declarations: [SearchComponent,
    ResultKartComponent],
	imports: [],
	exports: [SearchComponent,
    ResultKartComponent]
})
export class ComponentsModule {}
