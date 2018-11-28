"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Validation = /** @class */ (function () {
    function Validation(fieldName, alias, type, validationRules) {
        this.fieldName = fieldName;
        this.alias = alias;
        this.type = type;
        this.validationRules = validationRules;
    }
    Validation.prototype.validate = function (value) {
        var _this = this;
        var out = this.validationRules.reduce(function (prev, currentRule) {
            var _a = currentRule(_this.alias, value), error = _a.error, invalid = _a.invalid;
            return {
                error: error ? prev.error.concat([error]) : prev.error,
                invalid: prev.invalid || invalid,
            };
        }, { error: [], invalid: false });
        return {
            error: out.error.join(', '),
            invalid: out.invalid,
        };
    };
    return Validation;
}());
exports.default = Validation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsaWRhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2xpYi9WYWxpZGF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDRSxvQkFDUyxTQUFpQixFQUNqQixLQUFhLEVBQ2IsSUFBWSxFQUNULGVBQW9DO1FBSHZDLGNBQVMsR0FBVCxTQUFTLENBQVE7UUFDakIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLFNBQUksR0FBSixJQUFJLENBQVE7UUFDVCxvQkFBZSxHQUFmLGVBQWUsQ0FBcUI7SUFDN0MsQ0FBQztJQUVHLDZCQUFRLEdBQWYsVUFBZ0IsS0FBVTtRQUExQixpQkFpQkM7UUFoQkMsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQ3JDLFVBQUMsSUFBMEMsRUFBRSxXQUFXO1lBQ2hELElBQUEsb0NBQW1ELEVBQWpELGdCQUFLLEVBQUUsb0JBQTBDLENBQUM7WUFFMUQsT0FBTztnQkFDTCxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBSyxJQUFJLENBQUMsS0FBSyxTQUFFLEtBQUssR0FBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUs7Z0JBQ2xELE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxJQUFJLE9BQU87YUFDakMsQ0FBQztRQUNKLENBQUMsRUFDRCxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUM5QixDQUFDO1FBRUYsT0FBTztZQUNMLEtBQUssRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDM0IsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPO1NBQ3JCLENBQUM7SUFDSixDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDLEFBMUJELElBMEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsaWRhdGlvblJ1bGUgfSBmcm9tICcuL3ZhbGlkYXRpb25SdWxlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZhbGlkYXRpb248VD4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZmllbGROYW1lOiBzdHJpbmcsXG4gICAgcHVibGljIGFsaWFzOiBzdHJpbmcsXG4gICAgcHVibGljIHR5cGU6IHN0cmluZyxcbiAgICBwcm90ZWN0ZWQgdmFsaWRhdGlvblJ1bGVzOiBWYWxpZGF0aW9uUnVsZTxUPltdLFxuICApIHt9XG5cbiAgcHVibGljIHZhbGlkYXRlKHZhbHVlOiBhbnkpOiB7IGVycm9yOiBzdHJpbmcsIGludmFsaWQ6IGJvb2xlYW59IHtcbiAgICBjb25zdCBvdXQgPSB0aGlzLnZhbGlkYXRpb25SdWxlcy5yZWR1Y2UoXG4gICAgICAocHJldjogeyBlcnJvcjogc3RyaW5nW10sIGludmFsaWQ6IGJvb2xlYW59LCBjdXJyZW50UnVsZSkgPT4ge1xuICAgICAgICBjb25zdCB7IGVycm9yLCBpbnZhbGlkIH0gPSBjdXJyZW50UnVsZSh0aGlzLmFsaWFzLCB2YWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBlcnJvcjogZXJyb3IgPyBbLi4ucHJldi5lcnJvciwgZXJyb3JdIDogcHJldi5lcnJvcixcbiAgICAgICAgICBpbnZhbGlkOiBwcmV2LmludmFsaWQgfHwgaW52YWxpZCxcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICB7IGVycm9yOiBbXSwgaW52YWxpZDogZmFsc2UgfSxcbiAgICApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yOiBvdXQuZXJyb3Iuam9pbignLCAnKSxcbiAgICAgIGludmFsaWQ6IG91dC5pbnZhbGlkLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==