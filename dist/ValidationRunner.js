"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidationData_1 = require("./ValidationData");
var crypto_1 = require("crypto");
var ValidationRunner = /** @class */ (function () {
    function ValidationRunner() {
        var validations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            validations[_i] = arguments[_i];
        }
        this.validations = validations.reduce(function (prev, curr) {
            var _a;
            return Object.assign(prev, (_a = {}, _a[curr.fieldName] = curr, _a));
        }, {});
    }
    /**
     * Runs validations for a single field, to be used for instance on an input onChange handler
     *
     * @param oldData the form data being submited, in case the validations need to compare the field with other attributes of
     * the same object
     * @param name the name of the field
     * @param value the value of the field being validated
     */
    ValidationRunner.prototype.run = function (oldData, name, value) {
        var internalFormData = oldData;
        var validation = this.validations[name];
        if (validation) {
            var _a = validation.validate(value), error = _a.error, invalid = _a.invalid;
            if (invalid) {
                internalFormData.errors[name] = error;
                internalFormData.invalid[name] = true;
            }
            else {
                internalFormData.errors[name] = undefined;
                internalFormData.invalid[name] = false;
                internalFormData.data[name] = validation.type === 'number' ? parseFloat(value) : value;
            }
        }
        else {
            internalFormData.data[name] = value;
        }
        return internalFormData;
    };
    /**
     * Runs all validations against a given object, to be used on form onSubmit handlers
     * @param data The form data being submitted
     */
    ValidationRunner.prototype.runAll = function (data) {
        var internalFormData = ValidationData_1.ValidationDataFactory(data);
        for (var _i = 0, _a = Object.keys(data); _i < _a.length; _i++) {
            var key = _a[_i];
            var validation = this.validations[key];
            if (validation) {
                var _b = validation.validate(data[key]), error = _b.error, invalid = _b.invalid;
                if (invalid) {
                    internalFormData.errors[key] = error;
                    internalFormData.invalid[key] = true;
                }
                else {
                    internalFormData.errors[key] = undefined;
                    internalFormData.invalid[key] = false;
                }
            }
        }
        // store data validity state
        this.validity[ValidationRunner.hashFormData(data)] = ValidationRunner.reduceValidity(internalFormData);
        return internalFormData;
    };
    ValidationRunner.hashFormData = function (data) {
        var hash = crypto_1.createHash('sha1');
        hash.update(JSON.stringify(data));
        return hash.digest('hex');
    };
    ValidationRunner.reduceValidity = function (data) {
        return !Object.values(data.invalid).reduce(function (prev, curr) { return curr || prev; }, false);
    };
    /**
     * Checks wheter an object passes all validations
     * @param data The form data to be validated
     */
    ValidationRunner.prototype.isValid = function (data) {
        var dataHash = ValidationRunner.hashFormData(data);
        // Runs validations in case we don't have validity state stored for the object
        if (this.validity[dataHash] === undefined)
            this.runAll(data);
        return this.validity[dataHash];
    };
    return ValidationRunner;
}());
exports.default = ValidationRunner;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsaWRhdGlvblJ1bm5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2xpYi9WYWxpZGF0aW9uUnVubmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsbURBQXlFO0FBQ3pFLGlDQUFvQztBQUVwQztJQUlFO1FBQVkscUJBQStCO2FBQS9CLFVBQStCLEVBQS9CLHFCQUErQixFQUEvQixJQUErQjtZQUEvQixnQ0FBK0I7O1FBQ3pDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQVMsRUFBRSxJQUFJOztZQUFLLE9BQUEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLFlBQUksR0FBQyxJQUFJLENBQUMsU0FBUyxJQUFHLElBQUksTUFBRztRQUEvQyxDQUErQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2xILENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0ksOEJBQUcsR0FBVixVQUFXLE9BQTBCLEVBQUUsSUFBWSxFQUFFLEtBQVU7UUFDN0QsSUFBTSxnQkFBZ0IsR0FBRyxPQUFPLENBQUM7UUFDakMsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUxQyxJQUFJLFVBQVUsRUFBRTtZQUNSLElBQUEsK0JBQStDLEVBQTdDLGdCQUFLLEVBQUUsb0JBQXNDLENBQUM7WUFFdEQsSUFBSSxPQUFPLEVBQUU7Z0JBQ1YsZ0JBQWdCLENBQUMsTUFBYyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztnQkFDOUMsZ0JBQWdCLENBQUMsT0FBZSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQzthQUNoRDtpQkFBTTtnQkFDSixnQkFBZ0IsQ0FBQyxNQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDO2dCQUNsRCxnQkFBZ0IsQ0FBQyxPQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO2dCQUMvQyxnQkFBZ0IsQ0FBQyxJQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1NBQ0Y7YUFBTTtZQUNKLGdCQUFnQixDQUFDLElBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7U0FDOUM7UUFFRCxPQUFPLGdCQUFnQixDQUFDO0lBQzFCLENBQUM7SUFFRDs7O09BR0c7SUFDSSxpQ0FBTSxHQUFiLFVBQWMsSUFBTztRQUNuQixJQUFNLGdCQUFnQixHQUFHLHNDQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXJELEtBQWlCLFVBQWlCLEVBQWpCLEtBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBakIsY0FBaUIsRUFBakIsSUFBaUIsRUFBRTtZQUFoQyxJQUFNLEdBQUcsU0FBQTtZQUNYLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFekMsSUFBSSxVQUFVLEVBQUU7Z0JBQ1IsSUFBQSxtQ0FBbUQsRUFBakQsZ0JBQUssRUFBRSxvQkFBMEMsQ0FBQztnQkFFMUQsSUFBSSxPQUFPLEVBQUU7b0JBQ1YsZ0JBQWdCLENBQUMsTUFBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztvQkFDN0MsZ0JBQWdCLENBQUMsT0FBZSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztpQkFDL0M7cUJBQU07b0JBQ0osZ0JBQWdCLENBQUMsTUFBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQztvQkFDakQsZ0JBQWdCLENBQUMsT0FBZSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztpQkFDaEQ7YUFDRjtTQUNGO1FBRUQsNEJBQTRCO1FBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDdkcsT0FBTyxnQkFBZ0IsQ0FBQztJQUMxQixDQUFDO0lBRWdCLDZCQUFZLEdBQTdCLFVBQThCLElBQVM7UUFDckMsSUFBTSxJQUFJLEdBQUcsbUJBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNsQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVnQiwrQkFBYyxHQUEvQixVQUFtQyxJQUF1QjtRQUN4RCxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBVSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBSSxFQUFFLElBQUksSUFBSyxPQUFBLElBQUksSUFBSSxJQUFJLEVBQVosQ0FBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzNGLENBQUM7SUFFRDs7O09BR0c7SUFDSSxrQ0FBTyxHQUFkLFVBQWUsSUFBTztRQUNwQixJQUFNLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFckQsOEVBQThFO1FBQzlFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxTQUFTO1lBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU3RCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQXhGRCxJQXdGQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWYWxpZGF0aW9uIGZyb20gJy4vVmFsaWRhdGlvbic7XG5pbXBvcnQgVmFsaWRhdGlvbkRhdGEsIHsgVmFsaWRhdGlvbkRhdGFGYWN0b3J5IH0gZnJvbSAnLi9WYWxpZGF0aW9uRGF0YSc7XG5pbXBvcnQgeyBjcmVhdGVIYXNoIH0gZnJvbSAnY3J5cHRvJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFsaWRhdGlvblJ1bm5lcjxUIGV4dGVuZHMge30+IHtcbiAgcHJvdGVjdGVkIHZhbGlkaXR5OiB7IFtzOiBzdHJpbmddOiBib29sZWFuIH07XG4gIHByb3RlY3RlZCB2YWxpZGF0aW9uczogeyBbczogc3RyaW5nXTogVmFsaWRhdGlvbjxUPn07XG5cbiAgY29uc3RydWN0b3IoLi4udmFsaWRhdGlvbnM6IFZhbGlkYXRpb248VD5bXSkge1xuICAgIHRoaXMudmFsaWRhdGlvbnMgPSB2YWxpZGF0aW9ucy5yZWR1Y2UoKHByZXY6IGFueSwgY3VycikgPT4gT2JqZWN0LmFzc2lnbihwcmV2LCB7IFtjdXJyLmZpZWxkTmFtZV06IGN1cnIgfSksIHt9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSdW5zIHZhbGlkYXRpb25zIGZvciBhIHNpbmdsZSBmaWVsZCwgdG8gYmUgdXNlZCBmb3IgaW5zdGFuY2Ugb24gYW4gaW5wdXQgb25DaGFuZ2UgaGFuZGxlclxuICAgKiBcbiAgICogQHBhcmFtIG9sZERhdGEgdGhlIGZvcm0gZGF0YSBiZWluZyBzdWJtaXRlZCwgaW4gY2FzZSB0aGUgdmFsaWRhdGlvbnMgbmVlZCB0byBjb21wYXJlIHRoZSBmaWVsZCB3aXRoIG90aGVyIGF0dHJpYnV0ZXMgb2ZcbiAgICogdGhlIHNhbWUgb2JqZWN0XG4gICAqIEBwYXJhbSBuYW1lIHRoZSBuYW1lIG9mIHRoZSBmaWVsZFxuICAgKiBAcGFyYW0gdmFsdWUgdGhlIHZhbHVlIG9mIHRoZSBmaWVsZCBiZWluZyB2YWxpZGF0ZWRcbiAgICovXG4gIHB1YmxpYyBydW4ob2xkRGF0YTogVmFsaWRhdGlvbkRhdGE8VD4sIG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk6IFZhbGlkYXRpb25EYXRhPFQ+IHtcbiAgICBjb25zdCBpbnRlcm5hbEZvcm1EYXRhID0gb2xkRGF0YTtcbiAgICBjb25zdCB2YWxpZGF0aW9uID0gdGhpcy52YWxpZGF0aW9uc1tuYW1lXTtcblxuICAgIGlmICh2YWxpZGF0aW9uKSB7XG4gICAgICBjb25zdCB7IGVycm9yLCBpbnZhbGlkIH0gPSB2YWxpZGF0aW9uLnZhbGlkYXRlKHZhbHVlKTtcbiAgICAgIFxuICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgKGludGVybmFsRm9ybURhdGEuZXJyb3JzIGFzIGFueSlbbmFtZV0gPSBlcnJvcjtcbiAgICAgICAgKGludGVybmFsRm9ybURhdGEuaW52YWxpZCBhcyBhbnkpW25hbWVdID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIChpbnRlcm5hbEZvcm1EYXRhLmVycm9ycyBhcyBhbnkpW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAoaW50ZXJuYWxGb3JtRGF0YS5pbnZhbGlkIGFzIGFueSlbbmFtZV0gPSBmYWxzZTtcbiAgICAgICAgKGludGVybmFsRm9ybURhdGEuZGF0YSBhcyBhbnkpW25hbWVdID0gdmFsaWRhdGlvbi50eXBlID09PSAnbnVtYmVyJyA/IHBhcnNlRmxvYXQodmFsdWUpIDogdmFsdWU7ICBcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgKGludGVybmFsRm9ybURhdGEuZGF0YSBhcyBhbnkpW25hbWVdID0gdmFsdWU7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBpbnRlcm5hbEZvcm1EYXRhO1xuICB9XG5cbiAgLyoqXG4gICAqIFJ1bnMgYWxsIHZhbGlkYXRpb25zIGFnYWluc3QgYSBnaXZlbiBvYmplY3QsIHRvIGJlIHVzZWQgb24gZm9ybSBvblN1Ym1pdCBoYW5kbGVyc1xuICAgKiBAcGFyYW0gZGF0YSBUaGUgZm9ybSBkYXRhIGJlaW5nIHN1Ym1pdHRlZFxuICAgKi9cbiAgcHVibGljIHJ1bkFsbChkYXRhOiBUKTogVmFsaWRhdGlvbkRhdGE8VD4ge1xuICAgIGNvbnN0IGludGVybmFsRm9ybURhdGEgPSBWYWxpZGF0aW9uRGF0YUZhY3RvcnkoZGF0YSk7XG5cbiAgICBmb3IoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGRhdGEpKSB7XG4gICAgICBjb25zdCB2YWxpZGF0aW9uID0gdGhpcy52YWxpZGF0aW9uc1trZXldO1xuXG4gICAgICBpZiAodmFsaWRhdGlvbikge1xuICAgICAgICBjb25zdCB7IGVycm9yLCBpbnZhbGlkIH0gPSB2YWxpZGF0aW9uLnZhbGlkYXRlKGRhdGFba2V5XSk7XG5cbiAgICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgICAoaW50ZXJuYWxGb3JtRGF0YS5lcnJvcnMgYXMgYW55KVtrZXldID0gZXJyb3I7XG4gICAgICAgICAgKGludGVybmFsRm9ybURhdGEuaW52YWxpZCBhcyBhbnkpW2tleV0gPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIChpbnRlcm5hbEZvcm1EYXRhLmVycm9ycyBhcyBhbnkpW2tleV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgKGludGVybmFsRm9ybURhdGEuaW52YWxpZCBhcyBhbnkpW2tleV0gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHN0b3JlIGRhdGEgdmFsaWRpdHkgc3RhdGVcbiAgICB0aGlzLnZhbGlkaXR5W1ZhbGlkYXRpb25SdW5uZXIuaGFzaEZvcm1EYXRhKGRhdGEpXSA9IFZhbGlkYXRpb25SdW5uZXIucmVkdWNlVmFsaWRpdHkoaW50ZXJuYWxGb3JtRGF0YSk7XG4gICAgcmV0dXJuIGludGVybmFsRm9ybURhdGE7XG4gIH1cblxuICBwcm90ZWN0ZWQgc3RhdGljIGhhc2hGb3JtRGF0YShkYXRhOiBhbnkpOiBzdHJpbmcge1xuICAgIGNvbnN0IGhhc2ggPSBjcmVhdGVIYXNoKCdzaGExJyk7XG4gICAgaGFzaC51cGRhdGUoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgIHJldHVybiBoYXNoLmRpZ2VzdCgnaGV4Jyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgc3RhdGljIHJlZHVjZVZhbGlkaXR5PFQ+KGRhdGE6IFZhbGlkYXRpb25EYXRhPFQ+KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICFPYmplY3QudmFsdWVzPGJvb2xlYW4+KGRhdGEuaW52YWxpZCkucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBjdXJyIHx8IHByZXYsIGZhbHNlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3Mgd2hldGVyIGFuIG9iamVjdCBwYXNzZXMgYWxsIHZhbGlkYXRpb25zXG4gICAqIEBwYXJhbSBkYXRhIFRoZSBmb3JtIGRhdGEgdG8gYmUgdmFsaWRhdGVkXG4gICAqL1xuICBwdWJsaWMgaXNWYWxpZChkYXRhOiBUKTogYm9vbGVhbiB7XG4gICAgY29uc3QgZGF0YUhhc2ggPSBWYWxpZGF0aW9uUnVubmVyLmhhc2hGb3JtRGF0YShkYXRhKTtcbiAgICBcbiAgICAvLyBSdW5zIHZhbGlkYXRpb25zIGluIGNhc2Ugd2UgZG9uJ3QgaGF2ZSB2YWxpZGl0eSBzdGF0ZSBzdG9yZWQgZm9yIHRoZSBvYmplY3RcbiAgICBpZiAodGhpcy52YWxpZGl0eVtkYXRhSGFzaF0gPT09IHVuZGVmaW5lZCkgdGhpcy5ydW5BbGwoZGF0YSk7XG4gICAgXG4gICAgcmV0dXJuIHRoaXMudmFsaWRpdHlbZGF0YUhhc2hdO1xuICB9XG59XG4iXX0=