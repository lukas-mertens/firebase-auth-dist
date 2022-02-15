/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NgModule } from '@angular/core';
import { NbFirebasePasswordStrategy } from './strategies/password/firebase-password.strategy';
import { NbFirebaseGoogleStrategy } from './strategies/google/firebase-google.strategy';
import { NbFirebaseAppleStrategy } from './strategies/apple/firebase-apple.strategy';
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
        NbFirebaseAppleStrategy,
        NbFirebaseFacebookStrategy,
        NbFirebaseTwitteStrategy,
    ] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbFirebaseAuthModule, decorators: [{
            type: NgModule,
            args: [{
                    providers: [
                        NbFirebasePasswordStrategy,
                        NbFirebaseGoogleStrategy,
                        NbFirebaseAppleStrategy,
                        NbFirebaseFacebookStrategy,
                        NbFirebaseTwitteStrategy,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2UtYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZnJhbWV3b3JrL2ZpcmViYXNlLWF1dGgvZmlyZWJhc2UtYXV0aC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDOUYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDeEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDckYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDOUYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7O0FBVzFGLE1BQU0sT0FBTyxvQkFBb0I7O2lIQUFwQixvQkFBb0I7a0hBQXBCLG9CQUFvQjtrSEFBcEIsb0JBQW9CLGFBUnBCO1FBQ1QsMEJBQTBCO1FBQzFCLHdCQUF3QjtRQUN4Qix1QkFBdUI7UUFDdkIsMEJBQTBCO1FBQzFCLHdCQUF3QjtLQUN6QjsyRkFFVSxvQkFBb0I7a0JBVGhDLFFBQVE7bUJBQUM7b0JBQ1IsU0FBUyxFQUFFO3dCQUNULDBCQUEwQjt3QkFDMUIsd0JBQXdCO3dCQUN4Qix1QkFBdUI7d0JBQ3ZCLDBCQUEwQjt3QkFDMUIsd0JBQXdCO3FCQUN6QjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOYkZpcmViYXNlUGFzc3dvcmRTdHJhdGVneSB9IGZyb20gJy4vc3RyYXRlZ2llcy9wYXNzd29yZC9maXJlYmFzZS1wYXNzd29yZC5zdHJhdGVneSc7XG5pbXBvcnQgeyBOYkZpcmViYXNlR29vZ2xlU3RyYXRlZ3kgfSBmcm9tICcuL3N0cmF0ZWdpZXMvZ29vZ2xlL2ZpcmViYXNlLWdvb2dsZS5zdHJhdGVneSc7XG5pbXBvcnQgeyBOYkZpcmViYXNlQXBwbGVTdHJhdGVneSB9IGZyb20gJy4vc3RyYXRlZ2llcy9hcHBsZS9maXJlYmFzZS1hcHBsZS5zdHJhdGVneSc7XG5pbXBvcnQgeyBOYkZpcmViYXNlRmFjZWJvb2tTdHJhdGVneSB9IGZyb20gJy4vc3RyYXRlZ2llcy9mYWNlYm9vay9maXJlYmFzZS1mYWNlYm9vay5zdHJhdGVneSc7XG5pbXBvcnQgeyBOYkZpcmViYXNlVHdpdHRlU3RyYXRlZ3kgfSBmcm9tICcuL3N0cmF0ZWdpZXMvdHdpdHRlci9maXJlYmFzZS10d2l0dGVyLnN0cmF0ZWd5JztcblxuQE5nTW9kdWxlKHtcbiAgcHJvdmlkZXJzOiBbXG4gICAgTmJGaXJlYmFzZVBhc3N3b3JkU3RyYXRlZ3ksXG4gICAgTmJGaXJlYmFzZUdvb2dsZVN0cmF0ZWd5LFxuICAgIE5iRmlyZWJhc2VBcHBsZVN0cmF0ZWd5LFxuICAgIE5iRmlyZWJhc2VGYWNlYm9va1N0cmF0ZWd5LFxuICAgIE5iRmlyZWJhc2VUd2l0dGVTdHJhdGVneSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTmJGaXJlYmFzZUF1dGhNb2R1bGUge31cbiJdfQ==