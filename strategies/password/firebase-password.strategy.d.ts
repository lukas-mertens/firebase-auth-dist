import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';
import { NbAuthStrategyOptions, NbAuthStrategyClass, NbAuthResult } from '@nebular/auth';
import { NbFirebaseBaseStrategy } from '../base/firebase-base.strategy';
import { NbFirebasePasswordStrategyOptions } from './firebase-password-strategy.options';
import * as i0 from "@angular/core";
export declare class NbFirebasePasswordStrategy extends NbFirebaseBaseStrategy {
    protected defaultOptions: NbFirebasePasswordStrategyOptions;
    static setup(options: NbFirebasePasswordStrategyOptions): [NbAuthStrategyClass, NbAuthStrategyOptions];
    authenticate({ email, password }: any): Observable<NbAuthResult>;
    refreshToken(data?: any): Observable<NbAuthResult>;
    register({ email, password }: any): Observable<NbAuthResult>;
    requestPassword({ email }: any): Observable<NbAuthResult>;
    resetPassword({ code, password }: {
        code: any;
        password: any;
    }): Observable<NbAuthResult>;
    protected updatePassword(user: any, password: any, module: any): Observable<NbAuthResult>;
    protected refreshIdToken(user: firebase.User, module: any): Observable<NbAuthResult>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbFirebasePasswordStrategy, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbFirebasePasswordStrategy>;
}
