/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { NbFirebasePasswordStrategy } from './strategies/password/firebase-password.strategy';
import { NbFirebaseGoogleStrategy } from './strategies/google/firebase-google.strategy';
import { NbFirebaseFacebookStrategy } from './strategies/facebook/firebase-facebook.strategy';
import { NbFirebaseTwitteStrategy } from './strategies/twitter/firebase-twitter.strategy';
import * as i0 from "@angular/core";
export class NbFirebaseAuthModule {
}
NbFirebaseAuthModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbFirebaseAuthModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NbFirebaseAuthModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbFirebaseAuthModule });
NbFirebaseAuthModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbFirebaseAuthModule, providers: [
        NbFirebasePasswordStrategy,
        NbFirebaseGoogleStrategy,
        NbFirebaseFacebookStrategy,
        NbFirebaseTwitteStrategy,
    ] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbFirebaseAuthModule, decorators: [{
            type: NgModule,
            args: [{
                    providers: [
                        NbFirebasePasswordStrategy,
                        NbFirebaseGoogleStrategy,
                        NbFirebaseFacebookStrategy,
                        NbFirebaseTwitteStrategy,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2UtYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZnJhbWV3b3JrL2ZpcmViYXNlLWF1dGgvZmlyZWJhc2UtYXV0aC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUdILE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDOUYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDeEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDOUYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7O0FBVzFGLE1BQU0sT0FBTyxvQkFBb0I7O2lIQUFwQixvQkFBb0I7a0hBQXBCLG9CQUFvQjtrSEFBcEIsb0JBQW9CLGFBUHBCO1FBQ1QsMEJBQTBCO1FBQzFCLHdCQUF3QjtRQUN4QiwwQkFBMEI7UUFDMUIsd0JBQXdCO0tBQ3pCOzJGQUVVLG9CQUFvQjtrQkFSaEMsUUFBUTttQkFBQztvQkFDUixTQUFTLEVBQUU7d0JBQ1QsMEJBQTBCO3dCQUMxQix3QkFBd0I7d0JBQ3hCLDBCQUEwQjt3QkFDMUIsd0JBQXdCO3FCQUN6QjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5cbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5iRmlyZWJhc2VQYXNzd29yZFN0cmF0ZWd5IH0gZnJvbSAnLi9zdHJhdGVnaWVzL3Bhc3N3b3JkL2ZpcmViYXNlLXBhc3N3b3JkLnN0cmF0ZWd5JztcbmltcG9ydCB7IE5iRmlyZWJhc2VHb29nbGVTdHJhdGVneSB9IGZyb20gJy4vc3RyYXRlZ2llcy9nb29nbGUvZmlyZWJhc2UtZ29vZ2xlLnN0cmF0ZWd5JztcbmltcG9ydCB7IE5iRmlyZWJhc2VGYWNlYm9va1N0cmF0ZWd5IH0gZnJvbSAnLi9zdHJhdGVnaWVzL2ZhY2Vib29rL2ZpcmViYXNlLWZhY2Vib29rLnN0cmF0ZWd5JztcbmltcG9ydCB7IE5iRmlyZWJhc2VUd2l0dGVTdHJhdGVneSB9IGZyb20gJy4vc3RyYXRlZ2llcy90d2l0dGVyL2ZpcmViYXNlLXR3aXR0ZXIuc3RyYXRlZ3knO1xuXG5cbkBOZ01vZHVsZSh7XG4gIHByb3ZpZGVyczogW1xuICAgIE5iRmlyZWJhc2VQYXNzd29yZFN0cmF0ZWd5LFxuICAgIE5iRmlyZWJhc2VHb29nbGVTdHJhdGVneSxcbiAgICBOYkZpcmViYXNlRmFjZWJvb2tTdHJhdGVneSxcbiAgICBOYkZpcmViYXNlVHdpdHRlU3RyYXRlZ3ksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIE5iRmlyZWJhc2VBdXRoTW9kdWxlIHsgfVxuIl19