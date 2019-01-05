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
        this.validity = {};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsaWRhdGlvblJ1bm5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2xpYi9WYWxpZGF0aW9uUnVubmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsbURBQXlFO0FBQ3pFLGlDQUFvQztBQUVwQztJQUlFO1FBQVkscUJBQStCO2FBQS9CLFVBQStCLEVBQS9CLHFCQUErQixFQUEvQixJQUErQjtZQUEvQixnQ0FBK0I7O1FBSGpDLGFBQVEsR0FBNkIsRUFBRSxDQUFDO1FBSWhELElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQVMsRUFBRSxJQUFJOztZQUFLLE9BQUEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLFlBQUksR0FBQyxJQUFJLENBQUMsU0FBUyxJQUFHLElBQUksTUFBRztRQUEvQyxDQUErQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2xILENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0ksOEJBQUcsR0FBVixVQUFXLE9BQTBCLEVBQUUsSUFBWSxFQUFFLEtBQVU7UUFDN0QsSUFBTSxnQkFBZ0IsR0FBRyxPQUFPLENBQUM7UUFDakMsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUxQyxJQUFJLFVBQVUsRUFBRTtZQUNSLElBQUEsK0JBQStDLEVBQTdDLGdCQUFLLEVBQUUsb0JBQXNDLENBQUM7WUFFdEQsSUFBSSxPQUFPLEVBQUU7Z0JBQ1YsZ0JBQWdCLENBQUMsTUFBYyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztnQkFDOUMsZ0JBQWdCLENBQUMsT0FBZSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQzthQUNoRDtpQkFBTTtnQkFDSixnQkFBZ0IsQ0FBQyxNQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDO2dCQUNsRCxnQkFBZ0IsQ0FBQyxPQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO2dCQUMvQyxnQkFBZ0IsQ0FBQyxJQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQ2pHO1NBQ0Y7YUFBTTtZQUNKLGdCQUFnQixDQUFDLElBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7U0FDOUM7UUFFRCxPQUFPLGdCQUFnQixDQUFDO0lBQzFCLENBQUM7SUFFRDs7O09BR0c7SUFDSSxpQ0FBTSxHQUFiLFVBQWMsSUFBTztRQUNuQixJQUFNLGdCQUFnQixHQUFHLHNDQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXJELEtBQWlCLFVBQWlCLEVBQWpCLEtBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBakIsY0FBaUIsRUFBakIsSUFBaUIsRUFBRTtZQUFoQyxJQUFNLEdBQUcsU0FBQTtZQUNYLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFekMsSUFBSSxVQUFVLEVBQUU7Z0JBQ1IsSUFBQSxtQ0FBbUQsRUFBakQsZ0JBQUssRUFBRSxvQkFBMEMsQ0FBQztnQkFFMUQsSUFBSSxPQUFPLEVBQUU7b0JBQ1YsZ0JBQWdCLENBQUMsTUFBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztvQkFDN0MsZ0JBQWdCLENBQUMsT0FBZSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztpQkFDL0M7cUJBQU07b0JBQ0osZ0JBQWdCLENBQUMsTUFBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQztvQkFDakQsZ0JBQWdCLENBQUMsT0FBZSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztpQkFDaEQ7YUFDRjtTQUNGO1FBRUQsNEJBQTRCO1FBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDdkcsT0FBTyxnQkFBZ0IsQ0FBQztJQUMxQixDQUFDO0lBRWdCLDZCQUFZLEdBQTdCLFVBQThCLElBQVM7UUFDckMsSUFBTSxJQUFJLEdBQUcsbUJBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNsQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVnQiwrQkFBYyxHQUEvQixVQUFtQyxJQUF1QjtRQUN4RCxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBVSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBSSxFQUFFLElBQUksSUFBSyxPQUFBLElBQUksSUFBSSxJQUFJLEVBQVosQ0FBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzNGLENBQUM7SUFFRDs7O09BR0c7SUFDSSxrQ0FBTyxHQUFkLFVBQWUsSUFBTztRQUNwQixJQUFNLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFckQsOEVBQThFO1FBQzlFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxTQUFTO1lBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU3RCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQXhGRCxJQXdGQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWYWxpZGF0aW9uIGZyb20gJy4vVmFsaWRhdGlvbic7XG5pbXBvcnQgVmFsaWRhdGlvbkRhdGEsIHsgVmFsaWRhdGlvbkRhdGFGYWN0b3J5IH0gZnJvbSAnLi9WYWxpZGF0aW9uRGF0YSc7XG5pbXBvcnQgeyBjcmVhdGVIYXNoIH0gZnJvbSAnY3J5cHRvJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFsaWRhdGlvblJ1bm5lcjxUIGV4dGVuZHMge30+IHtcbiAgcHJvdGVjdGVkIHZhbGlkaXR5OiB7IFtzOiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcbiAgcHJvdGVjdGVkIHZhbGlkYXRpb25zOiB7IFtzOiBzdHJpbmddOiBWYWxpZGF0aW9uPFQ+fTtcblxuICBjb25zdHJ1Y3RvciguLi52YWxpZGF0aW9uczogVmFsaWRhdGlvbjxUPltdKSB7XG4gICAgdGhpcy52YWxpZGF0aW9ucyA9IHZhbGlkYXRpb25zLnJlZHVjZSgocHJldjogYW55LCBjdXJyKSA9PiBPYmplY3QuYXNzaWduKHByZXYsIHsgW2N1cnIuZmllbGROYW1lXTogY3VyciB9KSwge30pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJ1bnMgdmFsaWRhdGlvbnMgZm9yIGEgc2luZ2xlIGZpZWxkLCB0byBiZSB1c2VkIGZvciBpbnN0YW5jZSBvbiBhbiBpbnB1dCBvbkNoYW5nZSBoYW5kbGVyXG4gICAqIFxuICAgKiBAcGFyYW0gb2xkRGF0YSB0aGUgZm9ybSBkYXRhIGJlaW5nIHN1Ym1pdGVkLCBpbiBjYXNlIHRoZSB2YWxpZGF0aW9ucyBuZWVkIHRvIGNvbXBhcmUgdGhlIGZpZWxkIHdpdGggb3RoZXIgYXR0cmlidXRlcyBvZlxuICAgKiB0aGUgc2FtZSBvYmplY3RcbiAgICogQHBhcmFtIG5hbWUgdGhlIG5hbWUgb2YgdGhlIGZpZWxkXG4gICAqIEBwYXJhbSB2YWx1ZSB0aGUgdmFsdWUgb2YgdGhlIGZpZWxkIGJlaW5nIHZhbGlkYXRlZFxuICAgKi9cbiAgcHVibGljIHJ1bihvbGREYXRhOiBWYWxpZGF0aW9uRGF0YTxUPiwgbmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KTogVmFsaWRhdGlvbkRhdGE8VD4ge1xuICAgIGNvbnN0IGludGVybmFsRm9ybURhdGEgPSBvbGREYXRhO1xuICAgIGNvbnN0IHZhbGlkYXRpb24gPSB0aGlzLnZhbGlkYXRpb25zW25hbWVdO1xuXG4gICAgaWYgKHZhbGlkYXRpb24pIHtcbiAgICAgIGNvbnN0IHsgZXJyb3IsIGludmFsaWQgfSA9IHZhbGlkYXRpb24udmFsaWRhdGUodmFsdWUpO1xuICAgICAgXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAoaW50ZXJuYWxGb3JtRGF0YS5lcnJvcnMgYXMgYW55KVtuYW1lXSA9IGVycm9yO1xuICAgICAgICAoaW50ZXJuYWxGb3JtRGF0YS5pbnZhbGlkIGFzIGFueSlbbmFtZV0gPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgKGludGVybmFsRm9ybURhdGEuZXJyb3JzIGFzIGFueSlbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIChpbnRlcm5hbEZvcm1EYXRhLmludmFsaWQgYXMgYW55KVtuYW1lXSA9IGZhbHNlO1xuICAgICAgICAoaW50ZXJuYWxGb3JtRGF0YS5kYXRhIGFzIGFueSlbbmFtZV0gPSB2YWxpZGF0aW9uLnR5cGUgPT09ICdudW1iZXInID8gcGFyc2VGbG9hdCh2YWx1ZSkgOiB2YWx1ZTsgIFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAoaW50ZXJuYWxGb3JtRGF0YS5kYXRhIGFzIGFueSlbbmFtZV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGludGVybmFsRm9ybURhdGE7XG4gIH1cblxuICAvKipcbiAgICogUnVucyBhbGwgdmFsaWRhdGlvbnMgYWdhaW5zdCBhIGdpdmVuIG9iamVjdCwgdG8gYmUgdXNlZCBvbiBmb3JtIG9uU3VibWl0IGhhbmRsZXJzXG4gICAqIEBwYXJhbSBkYXRhIFRoZSBmb3JtIGRhdGEgYmVpbmcgc3VibWl0dGVkXG4gICAqL1xuICBwdWJsaWMgcnVuQWxsKGRhdGE6IFQpOiBWYWxpZGF0aW9uRGF0YTxUPiB7XG4gICAgY29uc3QgaW50ZXJuYWxGb3JtRGF0YSA9IFZhbGlkYXRpb25EYXRhRmFjdG9yeShkYXRhKTtcblxuICAgIGZvcihjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoZGF0YSkpIHtcbiAgICAgIGNvbnN0IHZhbGlkYXRpb24gPSB0aGlzLnZhbGlkYXRpb25zW2tleV07XG5cbiAgICAgIGlmICh2YWxpZGF0aW9uKSB7XG4gICAgICAgIGNvbnN0IHsgZXJyb3IsIGludmFsaWQgfSA9IHZhbGlkYXRpb24udmFsaWRhdGUoZGF0YVtrZXldKTtcblxuICAgICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAgIChpbnRlcm5hbEZvcm1EYXRhLmVycm9ycyBhcyBhbnkpW2tleV0gPSBlcnJvcjtcbiAgICAgICAgICAoaW50ZXJuYWxGb3JtRGF0YS5pbnZhbGlkIGFzIGFueSlba2V5XSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgKGludGVybmFsRm9ybURhdGEuZXJyb3JzIGFzIGFueSlba2V5XSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAoaW50ZXJuYWxGb3JtRGF0YS5pbnZhbGlkIGFzIGFueSlba2V5XSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gc3RvcmUgZGF0YSB2YWxpZGl0eSBzdGF0ZVxuICAgIHRoaXMudmFsaWRpdHlbVmFsaWRhdGlvblJ1bm5lci5oYXNoRm9ybURhdGEoZGF0YSldID0gVmFsaWRhdGlvblJ1bm5lci5yZWR1Y2VWYWxpZGl0eShpbnRlcm5hbEZvcm1EYXRhKTtcbiAgICByZXR1cm4gaW50ZXJuYWxGb3JtRGF0YTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzdGF0aWMgaGFzaEZvcm1EYXRhKGRhdGE6IGFueSk6IHN0cmluZyB7XG4gICAgY29uc3QgaGFzaCA9IGNyZWF0ZUhhc2goJ3NoYTEnKTtcbiAgICBoYXNoLnVwZGF0ZShKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgcmV0dXJuIGhhc2guZGlnZXN0KCdoZXgnKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzdGF0aWMgcmVkdWNlVmFsaWRpdHk8VD4oZGF0YTogVmFsaWRhdGlvbkRhdGE8VD4pOiBib29sZWFuIHtcbiAgICByZXR1cm4gIU9iamVjdC52YWx1ZXM8Ym9vbGVhbj4oZGF0YS5pbnZhbGlkKS5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IGN1cnIgfHwgcHJldiwgZmFsc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0ZXIgYW4gb2JqZWN0IHBhc3NlcyBhbGwgdmFsaWRhdGlvbnNcbiAgICogQHBhcmFtIGRhdGEgVGhlIGZvcm0gZGF0YSB0byBiZSB2YWxpZGF0ZWRcbiAgICovXG4gIHB1YmxpYyBpc1ZhbGlkKGRhdGE6IFQpOiBib29sZWFuIHtcbiAgICBjb25zdCBkYXRhSGFzaCA9IFZhbGlkYXRpb25SdW5uZXIuaGFzaEZvcm1EYXRhKGRhdGEpO1xuICAgIFxuICAgIC8vIFJ1bnMgdmFsaWRhdGlvbnMgaW4gY2FzZSB3ZSBkb24ndCBoYXZlIHZhbGlkaXR5IHN0YXRlIHN0b3JlZCBmb3IgdGhlIG9iamVjdFxuICAgIGlmICh0aGlzLnZhbGlkaXR5W2RhdGFIYXNoXSA9PT0gdW5kZWZpbmVkKSB0aGlzLnJ1bkFsbChkYXRhKTtcbiAgICBcbiAgICByZXR1cm4gdGhpcy52YWxpZGl0eVtkYXRhSGFzaF07XG4gIH1cbn1cbiJdfQ==