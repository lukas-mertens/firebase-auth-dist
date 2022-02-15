import { Observable } from 'rxjs';
import { NbAuthStrategyClass, NbAuthResult, NbAuthStrategyOptions } from '@nebular/auth';
import { NbFirebaseBaseStrategy } from '../base/firebase-base.strategy';
import { NbFirebaseIdentityProviderStrategyOptions } from '../base/firebase-identity-provider-strategy.options';
import 'firebase/compat/auth';
import * as i0 from "@angular/core";
export declare class NbFirebaseTwitteStrategy extends NbFirebaseBaseStrategy {
    protected defaultOptions: NbFirebaseIdentityProviderStrategyOptions;
    static setup(options: NbFirebaseIdentityProviderStrategyOptions): [NbAuthStrategyClass, NbAuthStrategyOptions];
    authenticate(data?: any): Observable<NbAuthResult>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbFirebaseTwitteStrategy, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NbFirebaseTwitteStrategy>;
}
