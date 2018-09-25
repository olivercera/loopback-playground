import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoopBackAuth } from '../apiclient/services';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private loopBackAuth: LoopBackAuth) {

    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Promise<boolean> | boolean {
        if (this.isAuthenticated()) {
            console.log('authenticated');
            return true;
        } else {
            console.log('NOt authenticated');
            return false;
        }
    }

    isAuthenticated(): boolean {
        return !!this.loopBackAuth.getAccessTokenId();
    }

}
