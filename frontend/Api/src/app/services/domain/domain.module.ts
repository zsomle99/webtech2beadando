import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Optional } from '@angular/core';
import { SkipSelf } from '@angular/core';
import { HttpUserController } from './auth/http-user-controller.service';
import { UserController } from './auth/user.controller.service';
import { HttpProductController } from './settings/foci/http-foci-controller.service';
import { FociController } from './settings/foci/foci.controller.service';
import { FociGuard } from 'src/app/pages/fociPage/foci.guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:
    [
      FociGuard,
      { provide: UserController, useClass: HttpUserController },
      { provide: FociController, useClass: HttpProductController },
    ]
})
export class DomainModule {
  constructor(@Optional() @SkipSelf() parentModule: DomainModule) {
    if (parentModule) {
      throw new Error(
        'DomainModule is already loaded. Import it in the AppModule only');
    }
  }
}
