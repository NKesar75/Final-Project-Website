"use strict";
var testing_1 = require("@angular/core/testing");
var auth_guard_service_1 = require("./auth-guard.service");
describe('AuthGuardService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [auth_guard_service_1.AuthGuardService]
        });
    });
    it('should be created', testing_1.inject([auth_guard_service_1.AuthGuardService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=auth-guard.service.spec.js.map