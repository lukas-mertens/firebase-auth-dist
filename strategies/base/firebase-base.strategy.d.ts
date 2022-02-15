import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { NbAuthResult, NbAuthStrategy } from '@nebular/auth';
import firebase from 'firebase/compat/app';
import UserCredential = firebase.auth.UserCredential;
import * as i0 from "@angular/core";
export declare abstract class NbFirebaseBaseStrategy extends NbAuthStrategy {
    protected afAuth: AngularFireAuth;
    constructor(afAuth: AngularFireAuth);
    logout(): Observable<NbAuthResult>;
    register(data?: any): Observable<NbAuthResult>;
    requestPassword(data?: any): Observable<NbAuthResult>;
    resetPassword(data?: any): Observable<NbAuthResult>;
    refreshToken(data?: any): Observable<NbAuthResult>;
    protected processFailure(error: any, module: string): Observable<NbAuthResult>;
    protected processSuccess(res: UserCredential | null, module: string): Observable<NbAuthResult>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbFirebaseBaseStrategy, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbFirebaseBaseStrategy>;
}
