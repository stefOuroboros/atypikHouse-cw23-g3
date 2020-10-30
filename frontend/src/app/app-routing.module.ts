import { Routes, RouterModule } from '@angular/router';

import { Role } from './_models';

import { AuthGuard } from './_helpers';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AdminComponent } from './admin/admin/admin.component';
import { UserComponent } from './user/user/user.component';
import { LandlordComponent } from './landlord/landlord/landlord.component';
import { LambdaComponent } from './lambda/lambda/lambda.component';

import { ModifyParametersComponent } from './admin/modify-parameters/modify-parameters.component';
import { ModifyUserComponent } from './admin/modify-user/modify-user.component';
import { ModifyHouseComponent } from './admin/modify-house/modify-house.component';
import { LandlordModifyHouseComponent } from './landlord/landlord-modify-house/landlord-modify-house.component';
import { LandlordModifyProfilComponent } from './landlord/landlord-modify-profil/landlord-modify-profil.component';
import { LandlordManageReservationComponent } from './landlord/landlord-manage-reservation/landlord-manage-reservation.component';
import { SearchComponent } from './lambda/search/search.component';
import { HouseComponent } from './lambda/house/house.component';
import { HomeComponent } from './lambda/home/home.component';
import { UserProfilComponent } from './user/user-profil/user-profil.component';
import { ReservationsComponent } from './user/reservations/reservations.component';
import { UserReserveComponent } from './user/user-reserve/user-reserve.component';




const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: { roles: [Role.Admin] }, children:[
    { path: 'parameters', component: ModifyParametersComponent},
    { path: 'users', component: ModifyUserComponent},
    { path: 'houses', component: ModifyHouseComponent},

  ]},

  { path: 'landlord', component: LandlordComponent, canActivate: [AuthGuard], data: { roles: [Role.Landlord] }, children:[
    { path: 'modify', component: LandlordModifyHouseComponent},
    { path: 'profil', component: LandlordModifyProfilComponent},
    { path: 'reservations', component: LandlordManageReservationComponent},
  ]},

  { path: 'user', component: UserComponent, canActivate: [AuthGuard], data: { roles: [Role.User] }, children:[
    { path: 'reserve', component: UserReserveComponent},
    { path: 'profil', component: UserProfilComponent},
    { path: 'reservations', component: ReservationsComponent},
  ]},

  { path: '', component: HomeComponent},
  { path: 'search', component: SearchComponent},
  { path: 'house', component: HouseComponent},

  { path: '**', redirectTo: '' },
];

export const appRoutingModule = RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
});
