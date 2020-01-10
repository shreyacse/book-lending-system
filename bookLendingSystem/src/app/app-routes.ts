import { Routes } from '@angular/router';
import { RentComponent} from './rent/rent.component';
import { ReturnComponent} from './return/return.component';
export const routes: Routes = [
  {
    path: 'rent',
    component: RentComponent
  },
  {
    path: 'return',
    component: ReturnComponent
  }
];


