/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Injectable } from '@angular/core';
import { of as observableOf, from } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { NbAuthResult, NbAuthIllegalTokenError, NbAuthStrategy } from '@nebular/auth';
import * as i0 from "@angular/core";
import * as i1 from "@angular/fire/compat/auth";
export class NbFirebaseBaseStrategy extends NbAuthStrategy {
    constructor(afAuth) {
        super();
        this.afAuth = afAuth;
    }
    logout() {
        const module = 'logout';
        return from(this.afAuth.signOut()).pipe(map(() => {
            return new NbAuthResult(true, null, this.getOption(`${module}.redirect.success`), [], this.getOption(`${module}.defaultMessages`));
        }), catchError((error) => this.processFailure(error, module)));
    }
    register(data) {
        throw new Error(`'register' is not supported by '${this.constructor.name}', use 'authenticate'.`);
    }
    requestPassword(data) {
        throw new Error(`'requestPassword' is not supported by '${this.constructor.name}', use 'authenticate'.`);
    }
    resetPassword(data = {}) {
        throw new Error(`'resetPassword' is not supported by '${this.constructor.name}', use 'authenticate'.`);
    }
    refreshToken(data = {}) {
        throw new Error(`'refreshToken' is not supported by '${this.constructor.name}', use 'authenticate'.`);
    }
    processFailure(error, module) {
        const errorMessages = [];
        if (error instanceof NbAuthIllegalTokenError) {
            errorMessages.push(error.message);
        }
        else {
            errorMessages.push(this.getOption('errors.getter')(module, error, this.options));
        }
        return observableOf(new NbAuthResult(false, error, this.getOption(`${module}.redirect.failure`), errorMessages, []));
    }
    processSuccess(res, module) {
        return this.afAuth.idToken.pipe(map((token) => {
            return new NbAuthResult(true, res, this.getOption(`${module}.redirect.success`), [], this.getOption('messages.getter')(module, res, this.options), this.createToken(token));
        }));
    }
}
NbFirebaseBaseStrategy.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbFirebaseBaseStrategy, deps: [{ token: i1.AngularFireAuth }], target: i0.ɵɵFactoryTarget.Injectable });
NbFirebaseBaseStrategy.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbFirebaseBaseStrategy });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbFirebaseBaseStrategy, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.AngularFireAuth }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2UtYmFzZS5zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvZmlyZWJhc2UtYXV0aC9zdHJhdGVnaWVzL2Jhc2UvZmlyZWJhc2UtYmFzZS5zdHJhdGVneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQWMsRUFBRSxJQUFJLFlBQVksRUFBRSxJQUFJLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDNUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsWUFBWSxFQUFFLHVCQUF1QixFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBTXRGLE1BQU0sT0FBZ0Isc0JBQXVCLFNBQVEsY0FBYztJQUNqRSxZQUFzQixNQUF1QjtRQUMzQyxLQUFLLEVBQUUsQ0FBQztRQURZLFdBQU0sR0FBTixNQUFNLENBQWlCO0lBRTdDLENBQUM7SUFFRCxNQUFNO1FBQ0osTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQ3JDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7WUFDUCxPQUFPLElBQUksWUFBWSxDQUNyQixJQUFJLEVBQ0osSUFBSSxFQUNKLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxNQUFNLG1CQUFtQixDQUFDLEVBQzVDLEVBQUUsRUFDRixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsTUFBTSxrQkFBa0IsQ0FBQyxDQUM1QyxDQUFDO1FBQ0osQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUMxRCxDQUFDO0lBQ0osQ0FBQztJQUVELFFBQVEsQ0FBQyxJQUFVO1FBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQUMsbUNBQW1DLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSx3QkFBd0IsQ0FBQyxDQUFDO0lBQ3BHLENBQUM7SUFFRCxlQUFlLENBQUMsSUFBVTtRQUN4QixNQUFNLElBQUksS0FBSyxDQUFDLDBDQUEwQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksd0JBQXdCLENBQUMsQ0FBQztJQUMzRyxDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQVksRUFBRTtRQUMxQixNQUFNLElBQUksS0FBSyxDQUFDLHdDQUF3QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksd0JBQXdCLENBQUMsQ0FBQztJQUN6RyxDQUFDO0lBRUQsWUFBWSxDQUFDLE9BQVksRUFBRTtRQUN6QixNQUFNLElBQUksS0FBSyxDQUFDLHVDQUF1QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksd0JBQXdCLENBQUMsQ0FBQztJQUN4RyxDQUFDO0lBRVMsY0FBYyxDQUFDLEtBQVUsRUFBRSxNQUFjO1FBQ2pELE1BQU0sYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUV6QixJQUFJLEtBQUssWUFBWSx1QkFBdUIsRUFBRTtZQUM1QyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNuQzthQUFNO1lBQ0wsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDbEY7UUFFRCxPQUFPLFlBQVksQ0FDakIsSUFBSSxZQUFZLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsTUFBTSxtQkFBbUIsQ0FBQyxFQUFFLGFBQWEsRUFBRSxFQUFFLENBQUMsQ0FDaEcsQ0FBQztJQUNKLENBQUM7SUFFUyxjQUFjLENBQUMsR0FBMEIsRUFBRSxNQUFjO1FBQ2pFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUM3QixHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNaLE9BQU8sSUFBSSxZQUFZLENBQ3JCLElBQUksRUFDSixHQUFHLEVBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLE1BQU0sbUJBQW1CLENBQUMsRUFDNUMsRUFBRSxFQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsRUFDNUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FDeEIsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzttSEFoRW1CLHNCQUFzQjt1SEFBdEIsc0JBQXNCOzJGQUF0QixzQkFBc0I7a0JBRDNDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW5ndWxhckZpcmVBdXRoIH0gZnJvbSAnQGFuZ3VsYXIvZmlyZS9jb21wYXQvYXV0aCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiBhcyBvYnNlcnZhYmxlT2YsIGZyb20gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE5iQXV0aFJlc3VsdCwgTmJBdXRoSWxsZWdhbFRva2VuRXJyb3IsIE5iQXV0aFN0cmF0ZWd5IH0gZnJvbSAnQG5lYnVsYXIvYXV0aCc7XG5cbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9jb21wYXQvYXBwJztcbmltcG9ydCBVc2VyQ3JlZGVudGlhbCA9IGZpcmViYXNlLmF1dGguVXNlckNyZWRlbnRpYWw7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBOYkZpcmViYXNlQmFzZVN0cmF0ZWd5IGV4dGVuZHMgTmJBdXRoU3RyYXRlZ3kge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYWZBdXRoOiBBbmd1bGFyRmlyZUF1dGgpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgbG9nb3V0KCk6IE9ic2VydmFibGU8TmJBdXRoUmVzdWx0PiB7XG4gICAgY29uc3QgbW9kdWxlID0gJ2xvZ291dCc7XG4gICAgcmV0dXJuIGZyb20odGhpcy5hZkF1dGguc2lnbk91dCgpKS5waXBlKFxuICAgICAgbWFwKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBOYkF1dGhSZXN1bHQoXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIHRoaXMuZ2V0T3B0aW9uKGAke21vZHVsZX0ucmVkaXJlY3Quc3VjY2Vzc2ApLFxuICAgICAgICAgIFtdLFxuICAgICAgICAgIHRoaXMuZ2V0T3B0aW9uKGAke21vZHVsZX0uZGVmYXVsdE1lc3NhZ2VzYCksXG4gICAgICAgICk7XG4gICAgICB9KSxcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yKSA9PiB0aGlzLnByb2Nlc3NGYWlsdXJlKGVycm9yLCBtb2R1bGUpKSxcbiAgICApO1xuICB9XG5cbiAgcmVnaXN0ZXIoZGF0YT86IGFueSk6IE9ic2VydmFibGU8TmJBdXRoUmVzdWx0PiB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGAncmVnaXN0ZXInIGlzIG5vdCBzdXBwb3J0ZWQgYnkgJyR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfScsIHVzZSAnYXV0aGVudGljYXRlJy5gKTtcbiAgfVxuXG4gIHJlcXVlc3RQYXNzd29yZChkYXRhPzogYW55KTogT2JzZXJ2YWJsZTxOYkF1dGhSZXN1bHQ+IHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYCdyZXF1ZXN0UGFzc3dvcmQnIGlzIG5vdCBzdXBwb3J0ZWQgYnkgJyR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfScsIHVzZSAnYXV0aGVudGljYXRlJy5gKTtcbiAgfVxuXG4gIHJlc2V0UGFzc3dvcmQoZGF0YTogYW55ID0ge30pOiBPYnNlcnZhYmxlPE5iQXV0aFJlc3VsdD4ge1xuICAgIHRocm93IG5ldyBFcnJvcihgJ3Jlc2V0UGFzc3dvcmQnIGlzIG5vdCBzdXBwb3J0ZWQgYnkgJyR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfScsIHVzZSAnYXV0aGVudGljYXRlJy5gKTtcbiAgfVxuXG4gIHJlZnJlc2hUb2tlbihkYXRhOiBhbnkgPSB7fSk6IE9ic2VydmFibGU8TmJBdXRoUmVzdWx0PiB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGAncmVmcmVzaFRva2VuJyBpcyBub3Qgc3VwcG9ydGVkIGJ5ICcke3RoaXMuY29uc3RydWN0b3IubmFtZX0nLCB1c2UgJ2F1dGhlbnRpY2F0ZScuYCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcHJvY2Vzc0ZhaWx1cmUoZXJyb3I6IGFueSwgbW9kdWxlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE5iQXV0aFJlc3VsdD4ge1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZXMgPSBbXTtcblxuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIE5iQXV0aElsbGVnYWxUb2tlbkVycm9yKSB7XG4gICAgICBlcnJvck1lc3NhZ2VzLnB1c2goZXJyb3IubWVzc2FnZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVycm9yTWVzc2FnZXMucHVzaCh0aGlzLmdldE9wdGlvbignZXJyb3JzLmdldHRlcicpKG1vZHVsZSwgZXJyb3IsIHRoaXMub3B0aW9ucykpO1xuICAgIH1cblxuICAgIHJldHVybiBvYnNlcnZhYmxlT2YoXG4gICAgICBuZXcgTmJBdXRoUmVzdWx0KGZhbHNlLCBlcnJvciwgdGhpcy5nZXRPcHRpb24oYCR7bW9kdWxlfS5yZWRpcmVjdC5mYWlsdXJlYCksIGVycm9yTWVzc2FnZXMsIFtdKSxcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIHByb2Nlc3NTdWNjZXNzKHJlczogVXNlckNyZWRlbnRpYWwgfCBudWxsLCBtb2R1bGU6IHN0cmluZyk6IE9ic2VydmFibGU8TmJBdXRoUmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuYWZBdXRoLmlkVG9rZW4ucGlwZShcbiAgICAgIG1hcCgodG9rZW4pID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBOYkF1dGhSZXN1bHQoXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICByZXMsXG4gICAgICAgICAgdGhpcy5nZXRPcHRpb24oYCR7bW9kdWxlfS5yZWRpcmVjdC5zdWNjZXNzYCksXG4gICAgICAgICAgW10sXG4gICAgICAgICAgdGhpcy5nZXRPcHRpb24oJ21lc3NhZ2VzLmdldHRlcicpKG1vZHVsZSwgcmVzLCB0aGlzLm9wdGlvbnMpLFxuICAgICAgICAgIHRoaXMuY3JlYXRlVG9rZW4odG9rZW4pLFxuICAgICAgICApO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxufVxuIl19