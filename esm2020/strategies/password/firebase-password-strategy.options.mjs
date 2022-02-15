/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { getDeepFromObject, NbAuthJWTToken, NbAuthStrategyOptions, } from '@nebular/auth';
export class NbFirebasePasswordStrategyOptions extends NbAuthStrategyOptions {
    constructor() {
        super(...arguments);
        this.token = {
            class: NbAuthJWTToken,
        };
        this.register = {
            redirect: {
                success: '/',
                failure: null,
            },
            defaultErrors: ['Something went wrong, please try again.'],
            defaultMessages: ['You have been successfully registered.'],
        };
        this.login = {
            redirect: {
                success: '/',
                failure: null,
            },
            defaultErrors: ['Login/Email combination is not correct, please try again.'],
            defaultMessages: ['You have been successfully logged in.'],
        };
        this.logout = {
            redirect: {
                success: '/',
                failure: null,
            },
            defaultErrors: ['Something went wrong, please try again.'],
            defaultMessages: ['You have been successfully logged out.'],
        };
        this.refreshToken = {
            redirect: {
                success: null,
                failure: null,
            },
            defaultErrors: ['Something went wrong, please try again.'],
            defaultMessages: ['Your token has been successfully refreshed.'],
        };
        this.requestPassword = {
            redirect: {
                success: '/',
                failure: null,
            },
            defaultErrors: ['Something went wrong, please try again.'],
            defaultMessages: ['Reset password instructions have been sent to your email.'],
        };
        this.resetPassword = {
            redirect: {
                success: '/',
                failure: null,
            },
            defaultErrors: ['Something went wrong, please try again.'],
            defaultMessages: ['Your password has been successfully changed.'],
        };
        this.errors = {
            key: 'message',
            getter: (module, res, options) => getDeepFromObject(res, options.errors.key, options[module].defaultErrors),
        };
        this.messages = {
            key: 'messages',
            getter: (module, res, options) => getDeepFromObject(res.body, options.messages.key, options[module].defaultMessages),
        };
    }
}
// eslint-disable-next-line max-len
export const firebasePasswordStrategyOptions = new NbFirebasePasswordStrategyOptions();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2UtcGFzc3dvcmQtc3RyYXRlZ3kub3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvZmlyZWJhc2UtYXV0aC9zdHJhdGVnaWVzL3Bhc3N3b3JkL2ZpcmViYXNlLXBhc3N3b3JkLXN0cmF0ZWd5Lm9wdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsY0FBYyxFQUNkLHFCQUFxQixHQUl0QixNQUFNLGVBQWUsQ0FBQztBQUV2QixNQUFNLE9BQU8saUNBQWtDLFNBQVEscUJBQXFCO0lBQTVFOztRQUNFLFVBQUssR0FBcUI7WUFDeEIsS0FBSyxFQUFFLGNBQWM7U0FDdEIsQ0FBQztRQUNGLGFBQVEsR0FBd0M7WUFDOUMsUUFBUSxFQUFFO2dCQUNSLE9BQU8sRUFBRSxHQUFHO2dCQUNaLE9BQU8sRUFBRSxJQUFJO2FBQ2Q7WUFDRCxhQUFhLEVBQUUsQ0FBQyx5Q0FBeUMsQ0FBQztZQUMxRCxlQUFlLEVBQUUsQ0FBQyx3Q0FBd0MsQ0FBQztTQUM1RCxDQUFDO1FBQ0YsVUFBSyxHQUF3QztZQUMzQyxRQUFRLEVBQUU7Z0JBQ1IsT0FBTyxFQUFFLEdBQUc7Z0JBQ1osT0FBTyxFQUFFLElBQUk7YUFDZDtZQUNELGFBQWEsRUFBRSxDQUFDLDJEQUEyRCxDQUFDO1lBQzVFLGVBQWUsRUFBRSxDQUFDLHVDQUF1QyxDQUFDO1NBQzNELENBQUM7UUFDRixXQUFNLEdBQXdDO1lBQzVDLFFBQVEsRUFBRTtnQkFDUixPQUFPLEVBQUUsR0FBRztnQkFDWixPQUFPLEVBQUUsSUFBSTthQUNkO1lBQ0QsYUFBYSxFQUFFLENBQUMseUNBQXlDLENBQUM7WUFDMUQsZUFBZSxFQUFFLENBQUMsd0NBQXdDLENBQUM7U0FDNUQsQ0FBQztRQUNGLGlCQUFZLEdBQXdDO1lBQ2xELFFBQVEsRUFBRTtnQkFDUixPQUFPLEVBQUUsSUFBSTtnQkFDYixPQUFPLEVBQUUsSUFBSTthQUNkO1lBQ0QsYUFBYSxFQUFFLENBQUMseUNBQXlDLENBQUM7WUFDMUQsZUFBZSxFQUFFLENBQUMsNkNBQTZDLENBQUM7U0FDakUsQ0FBQztRQUNGLG9CQUFlLEdBQXdDO1lBQ3JELFFBQVEsRUFBRTtnQkFDUixPQUFPLEVBQUUsR0FBRztnQkFDWixPQUFPLEVBQUUsSUFBSTthQUNkO1lBQ0QsYUFBYSxFQUFFLENBQUMseUNBQXlDLENBQUM7WUFDMUQsZUFBZSxFQUFFLENBQUMsMkRBQTJELENBQUM7U0FDL0UsQ0FBQztRQUNGLGtCQUFhLEdBQXdDO1lBQ25ELFFBQVEsRUFBRTtnQkFDUixPQUFPLEVBQUUsR0FBRztnQkFDWixPQUFPLEVBQUUsSUFBSTthQUNkO1lBQ0QsYUFBYSxFQUFFLENBQUMseUNBQXlDLENBQUM7WUFDMUQsZUFBZSxFQUFFLENBQUMsOENBQThDLENBQUM7U0FDbEUsQ0FBQztRQUNGLFdBQU0sR0FBK0I7WUFDbkMsR0FBRyxFQUFFLFNBQVM7WUFDZCxNQUFNLEVBQUUsQ0FBQyxNQUFjLEVBQUUsR0FBRyxFQUFFLE9BQTBDLEVBQUUsRUFBRSxDQUFDLGlCQUFpQixDQUM1RixHQUFHLEVBQ0gsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQ2xCLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxhQUFhLENBQzlCO1NBQ0YsQ0FBQztRQUNGLGFBQVEsR0FBK0I7WUFDckMsR0FBRyxFQUFFLFVBQVU7WUFDZixNQUFNLEVBQUUsQ0FBQyxNQUFjLEVBQUUsR0FBRyxFQUFFLE9BQTBDLEVBQUUsRUFBRSxDQUFDLGlCQUFpQixDQUM1RixHQUFHLENBQUMsSUFBSSxFQUNSLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUNwQixPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsZUFBZSxDQUNoQztTQUNGLENBQUM7SUFDSixDQUFDO0NBQUE7QUFFRCxtQ0FBbUM7QUFDbkMsTUFBTSxDQUFDLE1BQU0sK0JBQStCLEdBQXNDLElBQUksaUNBQWlDLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cblxuaW1wb3J0IHtcbiAgZ2V0RGVlcEZyb21PYmplY3QsXG4gIE5iQXV0aEpXVFRva2VuLFxuICBOYkF1dGhTdHJhdGVneU9wdGlvbnMsXG4gIE5iUGFzc3dvcmRTdHJhdGVneU1lc3NhZ2UsXG4gIE5iUGFzc3dvcmRTdHJhdGVneU1vZHVsZSxcbiAgTmJTdHJhdGVneVRva2VuLFxufSBmcm9tICdAbmVidWxhci9hdXRoJztcblxuZXhwb3J0IGNsYXNzIE5iRmlyZWJhc2VQYXNzd29yZFN0cmF0ZWd5T3B0aW9ucyBleHRlbmRzIE5iQXV0aFN0cmF0ZWd5T3B0aW9ucyB7XG4gIHRva2VuPzogTmJTdHJhdGVneVRva2VuID0ge1xuICAgIGNsYXNzOiBOYkF1dGhKV1RUb2tlbixcbiAgfTtcbiAgcmVnaXN0ZXI/OiBib29sZWFuIHwgTmJQYXNzd29yZFN0cmF0ZWd5TW9kdWxlID0ge1xuICAgIHJlZGlyZWN0OiB7XG4gICAgICBzdWNjZXNzOiAnLycsXG4gICAgICBmYWlsdXJlOiBudWxsLFxuICAgIH0sXG4gICAgZGVmYXVsdEVycm9yczogWydTb21ldGhpbmcgd2VudCB3cm9uZywgcGxlYXNlIHRyeSBhZ2Fpbi4nXSxcbiAgICBkZWZhdWx0TWVzc2FnZXM6IFsnWW91IGhhdmUgYmVlbiBzdWNjZXNzZnVsbHkgcmVnaXN0ZXJlZC4nXSxcbiAgfTtcbiAgbG9naW4/OiBib29sZWFuIHwgTmJQYXNzd29yZFN0cmF0ZWd5TW9kdWxlID0ge1xuICAgIHJlZGlyZWN0OiB7XG4gICAgICBzdWNjZXNzOiAnLycsXG4gICAgICBmYWlsdXJlOiBudWxsLFxuICAgIH0sXG4gICAgZGVmYXVsdEVycm9yczogWydMb2dpbi9FbWFpbCBjb21iaW5hdGlvbiBpcyBub3QgY29ycmVjdCwgcGxlYXNlIHRyeSBhZ2Fpbi4nXSxcbiAgICBkZWZhdWx0TWVzc2FnZXM6IFsnWW91IGhhdmUgYmVlbiBzdWNjZXNzZnVsbHkgbG9nZ2VkIGluLiddLFxuICB9O1xuICBsb2dvdXQ/OiBib29sZWFuIHwgTmJQYXNzd29yZFN0cmF0ZWd5TW9kdWxlID0ge1xuICAgIHJlZGlyZWN0OiB7XG4gICAgICBzdWNjZXNzOiAnLycsXG4gICAgICBmYWlsdXJlOiBudWxsLFxuICAgIH0sXG4gICAgZGVmYXVsdEVycm9yczogWydTb21ldGhpbmcgd2VudCB3cm9uZywgcGxlYXNlIHRyeSBhZ2Fpbi4nXSxcbiAgICBkZWZhdWx0TWVzc2FnZXM6IFsnWW91IGhhdmUgYmVlbiBzdWNjZXNzZnVsbHkgbG9nZ2VkIG91dC4nXSxcbiAgfTtcbiAgcmVmcmVzaFRva2VuPzogYm9vbGVhbiB8IE5iUGFzc3dvcmRTdHJhdGVneU1vZHVsZSA9IHtcbiAgICByZWRpcmVjdDoge1xuICAgICAgc3VjY2VzczogbnVsbCxcbiAgICAgIGZhaWx1cmU6IG51bGwsXG4gICAgfSxcbiAgICBkZWZhdWx0RXJyb3JzOiBbJ1NvbWV0aGluZyB3ZW50IHdyb25nLCBwbGVhc2UgdHJ5IGFnYWluLiddLFxuICAgIGRlZmF1bHRNZXNzYWdlczogWydZb3VyIHRva2VuIGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSByZWZyZXNoZWQuJ10sXG4gIH07XG4gIHJlcXVlc3RQYXNzd29yZD86IGJvb2xlYW4gfCBOYlBhc3N3b3JkU3RyYXRlZ3lNb2R1bGUgPSB7XG4gICAgcmVkaXJlY3Q6IHtcbiAgICAgIHN1Y2Nlc3M6ICcvJyxcbiAgICAgIGZhaWx1cmU6IG51bGwsXG4gICAgfSxcbiAgICBkZWZhdWx0RXJyb3JzOiBbJ1NvbWV0aGluZyB3ZW50IHdyb25nLCBwbGVhc2UgdHJ5IGFnYWluLiddLFxuICAgIGRlZmF1bHRNZXNzYWdlczogWydSZXNldCBwYXNzd29yZCBpbnN0cnVjdGlvbnMgaGF2ZSBiZWVuIHNlbnQgdG8geW91ciBlbWFpbC4nXSxcbiAgfTtcbiAgcmVzZXRQYXNzd29yZD86IGJvb2xlYW4gfCBOYlBhc3N3b3JkU3RyYXRlZ3lNb2R1bGUgPSB7XG4gICAgcmVkaXJlY3Q6IHtcbiAgICAgIHN1Y2Nlc3M6ICcvJyxcbiAgICAgIGZhaWx1cmU6IG51bGwsXG4gICAgfSxcbiAgICBkZWZhdWx0RXJyb3JzOiBbJ1NvbWV0aGluZyB3ZW50IHdyb25nLCBwbGVhc2UgdHJ5IGFnYWluLiddLFxuICAgIGRlZmF1bHRNZXNzYWdlczogWydZb3VyIHBhc3N3b3JkIGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSBjaGFuZ2VkLiddLFxuICB9O1xuICBlcnJvcnM/OiBOYlBhc3N3b3JkU3RyYXRlZ3lNZXNzYWdlID0ge1xuICAgIGtleTogJ21lc3NhZ2UnLFxuICAgIGdldHRlcjogKG1vZHVsZTogc3RyaW5nLCByZXMsIG9wdGlvbnM6IE5iRmlyZWJhc2VQYXNzd29yZFN0cmF0ZWd5T3B0aW9ucykgPT4gZ2V0RGVlcEZyb21PYmplY3QoXG4gICAgICByZXMsXG4gICAgICBvcHRpb25zLmVycm9ycy5rZXksXG4gICAgICBvcHRpb25zW21vZHVsZV0uZGVmYXVsdEVycm9ycyxcbiAgICApLFxuICB9O1xuICBtZXNzYWdlcz86IE5iUGFzc3dvcmRTdHJhdGVneU1lc3NhZ2UgPSB7XG4gICAga2V5OiAnbWVzc2FnZXMnLFxuICAgIGdldHRlcjogKG1vZHVsZTogc3RyaW5nLCByZXMsIG9wdGlvbnM6IE5iRmlyZWJhc2VQYXNzd29yZFN0cmF0ZWd5T3B0aW9ucykgPT4gZ2V0RGVlcEZyb21PYmplY3QoXG4gICAgICByZXMuYm9keSxcbiAgICAgIG9wdGlvbnMubWVzc2FnZXMua2V5LFxuICAgICAgb3B0aW9uc1ttb2R1bGVdLmRlZmF1bHRNZXNzYWdlcyxcbiAgICApLFxuICB9O1xufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuZXhwb3J0IGNvbnN0IGZpcmViYXNlUGFzc3dvcmRTdHJhdGVneU9wdGlvbnM6IE5iRmlyZWJhc2VQYXNzd29yZFN0cmF0ZWd5T3B0aW9ucyA9IG5ldyBOYkZpcmViYXNlUGFzc3dvcmRTdHJhdGVneU9wdGlvbnMoKTtcbiJdfQ==