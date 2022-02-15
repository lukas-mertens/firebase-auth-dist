/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NbAuthJWTToken, NbAuthStrategyOptions, } from '@nebular/auth';
export class NbFirebaseIdentityProviderStrategyOptions extends NbAuthStrategyOptions {
    constructor() {
        super(...arguments);
        this.token = {
            class: NbAuthJWTToken,
        };
        this.logout = {
            redirect: {
                success: '/',
                failure: null,
            },
            defaultErrors: ['Something went wrong, please try again.'],
            defaultMessages: ['You have been successfully logged out.'],
        };
        this.authenticate = {
            redirect: {
                success: '/',
                failure: null,
            },
            defaultErrors: ['Something went wrong, please try again.'],
            defaultMessages: ['You have been successfully authenticated.'],
        };
        this.errors = {
            key: 'message',
            getter: (module, res, options) => options[module].defaultErrors,
        };
        this.messages = {
            key: 'message',
            getter: (module, res, options) => {
                return options[module].defaultMessages;
            },
        };
        this.scopes = [];
        this.customParameters = {};
    }
}
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2UtaWRlbnRpdHktcHJvdmlkZXItc3RyYXRlZ3kub3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvZmlyZWJhc2UtYXV0aC9zdHJhdGVnaWVzL2Jhc2UvZmlyZWJhc2UtaWRlbnRpdHktcHJvdmlkZXItc3RyYXRlZ3kub3B0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUdMLGNBQWMsRUFDZCxxQkFBcUIsR0FFdEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsTUFBTSxPQUFPLHlDQUEwQyxTQUFRLHFCQUFxQjtJQUFwRjs7UUFDRSxVQUFLLEdBQXFCO1lBQ3hCLEtBQUssRUFBRSxjQUFjO1NBQ3RCLENBQUM7UUFDRixXQUFNLEdBQXdDO1lBQzVDLFFBQVEsRUFBRTtnQkFDUixPQUFPLEVBQUUsR0FBRztnQkFDWixPQUFPLEVBQUUsSUFBSTthQUNkO1lBQ0QsYUFBYSxFQUFFLENBQUMseUNBQXlDLENBQUM7WUFDMUQsZUFBZSxFQUFFLENBQUMsd0NBQXdDLENBQUM7U0FDNUQsQ0FBQztRQUNGLGlCQUFZLEdBQXdDO1lBQ2xELFFBQVEsRUFBRTtnQkFDUixPQUFPLEVBQUUsR0FBRztnQkFDWixPQUFPLEVBQUUsSUFBSTthQUNkO1lBQ0QsYUFBYSxFQUFFLENBQUMseUNBQXlDLENBQUM7WUFDMUQsZUFBZSxFQUFFLENBQUMsMkNBQTJDLENBQUM7U0FDL0QsQ0FBQztRQUNGLFdBQU0sR0FBK0I7WUFDbkMsR0FBRyxFQUFFLFNBQVM7WUFDZCxNQUFNLEVBQUUsQ0FBQyxNQUFjLEVBQUUsR0FBRyxFQUFFLE9BQWtELEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxhQUFhO1NBQ25ILENBQUM7UUFDRixhQUFRLEdBQStCO1lBQ3JDLEdBQUcsRUFBRSxTQUFTO1lBQ2QsTUFBTSxFQUFFLENBQUMsTUFBYyxFQUFFLEdBQUcsRUFBRSxPQUFrRCxFQUFFLEVBQUU7Z0JBQ2xGLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGVBQWUsQ0FBQztZQUN6QyxDQUFDO1NBQ0YsQ0FBQztRQUNGLFdBQU0sR0FBYyxFQUFFLENBQUM7UUFDdkIscUJBQWdCLEdBQStCLEVBQUUsQ0FBQztJQUNwRCxDQUFDO0NBQUE7QUFBQSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuXG5pbXBvcnQge1xuICBOYlBhc3N3b3JkU3RyYXRlZ3lNZXNzYWdlLFxuICBOYlBhc3N3b3JkU3RyYXRlZ3lNb2R1bGUsXG4gIE5iQXV0aEpXVFRva2VuLFxuICBOYkF1dGhTdHJhdGVneU9wdGlvbnMsXG4gIE5iU3RyYXRlZ3lUb2tlbixcbn0gZnJvbSAnQG5lYnVsYXIvYXV0aCc7XG5cbmV4cG9ydCBjbGFzcyBOYkZpcmViYXNlSWRlbnRpdHlQcm92aWRlclN0cmF0ZWd5T3B0aW9ucyBleHRlbmRzIE5iQXV0aFN0cmF0ZWd5T3B0aW9ucyB7XG4gIHRva2VuPzogTmJTdHJhdGVneVRva2VuID0ge1xuICAgIGNsYXNzOiBOYkF1dGhKV1RUb2tlbixcbiAgfTtcbiAgbG9nb3V0PzogYm9vbGVhbiB8IE5iUGFzc3dvcmRTdHJhdGVneU1vZHVsZSA9IHtcbiAgICByZWRpcmVjdDoge1xuICAgICAgc3VjY2VzczogJy8nLFxuICAgICAgZmFpbHVyZTogbnVsbCxcbiAgICB9LFxuICAgIGRlZmF1bHRFcnJvcnM6IFsnU29tZXRoaW5nIHdlbnQgd3JvbmcsIHBsZWFzZSB0cnkgYWdhaW4uJ10sXG4gICAgZGVmYXVsdE1lc3NhZ2VzOiBbJ1lvdSBoYXZlIGJlZW4gc3VjY2Vzc2Z1bGx5IGxvZ2dlZCBvdXQuJ10sXG4gIH07XG4gIGF1dGhlbnRpY2F0ZT86IGJvb2xlYW4gfCBOYlBhc3N3b3JkU3RyYXRlZ3lNb2R1bGUgPSB7XG4gICAgcmVkaXJlY3Q6IHtcbiAgICAgIHN1Y2Nlc3M6ICcvJyxcbiAgICAgIGZhaWx1cmU6IG51bGwsXG4gICAgfSxcbiAgICBkZWZhdWx0RXJyb3JzOiBbJ1NvbWV0aGluZyB3ZW50IHdyb25nLCBwbGVhc2UgdHJ5IGFnYWluLiddLFxuICAgIGRlZmF1bHRNZXNzYWdlczogWydZb3UgaGF2ZSBiZWVuIHN1Y2Nlc3NmdWxseSBhdXRoZW50aWNhdGVkLiddLFxuICB9O1xuICBlcnJvcnM/OiBOYlBhc3N3b3JkU3RyYXRlZ3lNZXNzYWdlID0ge1xuICAgIGtleTogJ21lc3NhZ2UnLFxuICAgIGdldHRlcjogKG1vZHVsZTogc3RyaW5nLCByZXMsIG9wdGlvbnM6IE5iRmlyZWJhc2VJZGVudGl0eVByb3ZpZGVyU3RyYXRlZ3lPcHRpb25zKSA9PiBvcHRpb25zW21vZHVsZV0uZGVmYXVsdEVycm9ycyxcbiAgfTtcbiAgbWVzc2FnZXM/OiBOYlBhc3N3b3JkU3RyYXRlZ3lNZXNzYWdlID0ge1xuICAgIGtleTogJ21lc3NhZ2UnLFxuICAgIGdldHRlcjogKG1vZHVsZTogc3RyaW5nLCByZXMsIG9wdGlvbnM6IE5iRmlyZWJhc2VJZGVudGl0eVByb3ZpZGVyU3RyYXRlZ3lPcHRpb25zKSA9PiB7XG4gICAgICByZXR1cm4gb3B0aW9uc1ttb2R1bGVdLmRlZmF1bHRNZXNzYWdlcztcbiAgICB9LFxuICB9O1xuICBzY29wZXM/OiBzdHJpbmdbXSA9IFtdO1xuICBjdXN0b21QYXJhbWV0ZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xufTtcbiJdfQ==