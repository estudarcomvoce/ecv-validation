"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
                internalFormData.values[name] = validation.type === 'number' ? parseFloat(value) : value;
            }
        }
        else {
            internalFormData.values[name] = value;
        }
        return internalFormData;
    };
    ValidationRunner.prototype.runAll = function (data) {
        var internalFormData = {
            values: data,
            errors: {},
            invalid: {},
        };
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
        return internalFormData;
    };
    ValidationRunner.isValid = function (data) {
        return Object.values(data.invalid).reduce(function (prev, curr) { return curr || prev; }, false);
    };
    return ValidationRunner;
}());
exports.default = ValidationRunner;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsaWRhdGlvblJ1bm5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2xpYi9WYWxpZGF0aW9uUnVubmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0E7SUFHRTtRQUFZLHFCQUErQjthQUEvQixVQUErQixFQUEvQixxQkFBK0IsRUFBL0IsSUFBK0I7WUFBL0IsZ0NBQStCOztRQUN6QyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFTLEVBQUUsSUFBSTs7WUFBSyxPQUFBLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxZQUFJLEdBQUMsSUFBSSxDQUFDLFNBQVMsSUFBRyxJQUFJLE1BQUc7UUFBL0MsQ0FBK0MsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNsSCxDQUFDO0lBRU0sOEJBQUcsR0FBVixVQUFXLE9BQW9CLEVBQUUsSUFBWSxFQUFFLEtBQVU7UUFDdkQsSUFBTSxnQkFBZ0IsR0FBRyxPQUFPLENBQUM7UUFDakMsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUxQyxJQUFJLFVBQVUsRUFBRTtZQUNSLElBQUEsK0JBQStDLEVBQTdDLGdCQUFLLEVBQUUsb0JBQXNDLENBQUM7WUFFdEQsSUFBSSxPQUFPLEVBQUU7Z0JBQ1YsZ0JBQWdCLENBQUMsTUFBYyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztnQkFDOUMsZ0JBQWdCLENBQUMsT0FBZSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQzthQUNoRDtpQkFBTTtnQkFDSixnQkFBZ0IsQ0FBQyxNQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDO2dCQUNsRCxnQkFBZ0IsQ0FBQyxPQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO2dCQUMvQyxnQkFBZ0IsQ0FBQyxNQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQ25HO1NBQ0Y7YUFBTTtZQUNKLGdCQUFnQixDQUFDLE1BQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7U0FDaEQ7UUFFRCxPQUFPLGdCQUFnQixDQUFDO0lBQzFCLENBQUM7SUFFTSxpQ0FBTSxHQUFiLFVBQWMsSUFBTztRQUNuQixJQUFNLGdCQUFnQixHQUFnQjtZQUNwQyxNQUFNLEVBQUUsSUFBSTtZQUNaLE1BQU0sRUFBRSxFQUFFO1lBQ1YsT0FBTyxFQUFFLEVBQUU7U0FDWixDQUFDO1FBRUYsS0FBaUIsVUFBaUIsRUFBakIsS0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFqQixjQUFpQixFQUFqQixJQUFpQixFQUFFO1lBQWhDLElBQU0sR0FBRyxTQUFBO1lBQ1gsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUV6QyxJQUFJLFVBQVUsRUFBRTtnQkFDUixJQUFBLG1DQUFtRCxFQUFqRCxnQkFBSyxFQUFFLG9CQUEwQyxDQUFDO2dCQUUxRCxJQUFJLE9BQU8sRUFBRTtvQkFDVixnQkFBZ0IsQ0FBQyxNQUFjLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO29CQUM3QyxnQkFBZ0IsQ0FBQyxPQUFlLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO2lCQUMvQztxQkFBTTtvQkFDSixnQkFBZ0IsQ0FBQyxNQUFjLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDO29CQUNqRCxnQkFBZ0IsQ0FBQyxPQUFlLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO2lCQUNoRDthQUNGO1NBQ0Y7UUFDRCxPQUFPLGdCQUFnQixDQUFDO0lBQzFCLENBQUM7SUFFYSx3QkFBTyxHQUFyQixVQUFvQyxJQUFpQjtRQUNuRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQVUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQUksRUFBRSxJQUFJLElBQUssT0FBQSxJQUFJLElBQUksSUFBSSxFQUFaLENBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMxRixDQUFDO0lBQ0gsdUJBQUM7QUFBRCxDQUFDLEFBekRELElBeURDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZhbGlkYXRpb24gZnJvbSAnLi9WYWxpZGF0aW9uJztcbmltcG9ydCBGb3JtRGF0YSBmcm9tICcuL0Zvcm1EYXRhJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFsaWRhdGlvblJ1bm5lcjxUIGV4dGVuZHMge30+IHtcbiAgcHJvdGVjdGVkIHZhbGlkYXRpb25zOiB7IFtzOiBzdHJpbmddOiBWYWxpZGF0aW9uPFQ+fTtcblxuICBjb25zdHJ1Y3RvciguLi52YWxpZGF0aW9uczogVmFsaWRhdGlvbjxUPltdKSB7XG4gICAgdGhpcy52YWxpZGF0aW9ucyA9IHZhbGlkYXRpb25zLnJlZHVjZSgocHJldjogYW55LCBjdXJyKSA9PiBPYmplY3QuYXNzaWduKHByZXYsIHsgW2N1cnIuZmllbGROYW1lXTogY3VyciB9KSwge30pO1xuICB9XG5cbiAgcHVibGljIHJ1bihvbGREYXRhOiBGb3JtRGF0YTxUPiwgbmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KTogRm9ybURhdGE8VD4ge1xuICAgIGNvbnN0IGludGVybmFsRm9ybURhdGEgPSBvbGREYXRhO1xuICAgIGNvbnN0IHZhbGlkYXRpb24gPSB0aGlzLnZhbGlkYXRpb25zW25hbWVdO1xuXG4gICAgaWYgKHZhbGlkYXRpb24pIHtcbiAgICAgIGNvbnN0IHsgZXJyb3IsIGludmFsaWQgfSA9IHZhbGlkYXRpb24udmFsaWRhdGUodmFsdWUpO1xuICAgICAgXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAoaW50ZXJuYWxGb3JtRGF0YS5lcnJvcnMgYXMgYW55KVtuYW1lXSA9IGVycm9yO1xuICAgICAgICAoaW50ZXJuYWxGb3JtRGF0YS5pbnZhbGlkIGFzIGFueSlbbmFtZV0gPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgKGludGVybmFsRm9ybURhdGEuZXJyb3JzIGFzIGFueSlbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIChpbnRlcm5hbEZvcm1EYXRhLmludmFsaWQgYXMgYW55KVtuYW1lXSA9IGZhbHNlO1xuICAgICAgICAoaW50ZXJuYWxGb3JtRGF0YS52YWx1ZXMgYXMgYW55KVtuYW1lXSA9IHZhbGlkYXRpb24udHlwZSA9PT0gJ251bWJlcicgPyBwYXJzZUZsb2F0KHZhbHVlKSA6IHZhbHVlOyAgXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIChpbnRlcm5hbEZvcm1EYXRhLnZhbHVlcyBhcyBhbnkpW25hbWVdID0gdmFsdWU7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBpbnRlcm5hbEZvcm1EYXRhO1xuICB9XG5cbiAgcHVibGljIHJ1bkFsbChkYXRhOiBUKTogRm9ybURhdGE8VD4ge1xuICAgIGNvbnN0IGludGVybmFsRm9ybURhdGE6IEZvcm1EYXRhPFQ+ID0ge1xuICAgICAgdmFsdWVzOiBkYXRhLFxuICAgICAgZXJyb3JzOiB7fSxcbiAgICAgIGludmFsaWQ6IHt9LFxuICAgIH07XG5cbiAgICBmb3IoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGRhdGEpKSB7XG4gICAgICBjb25zdCB2YWxpZGF0aW9uID0gdGhpcy52YWxpZGF0aW9uc1trZXldO1xuXG4gICAgICBpZiAodmFsaWRhdGlvbikge1xuICAgICAgICBjb25zdCB7IGVycm9yLCBpbnZhbGlkIH0gPSB2YWxpZGF0aW9uLnZhbGlkYXRlKGRhdGFba2V5XSk7XG5cbiAgICAgICAgaWYgKGludmFsaWQpIHtcbiAgICAgICAgICAoaW50ZXJuYWxGb3JtRGF0YS5lcnJvcnMgYXMgYW55KVtrZXldID0gZXJyb3I7XG4gICAgICAgICAgKGludGVybmFsRm9ybURhdGEuaW52YWxpZCBhcyBhbnkpW2tleV0gPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIChpbnRlcm5hbEZvcm1EYXRhLmVycm9ycyBhcyBhbnkpW2tleV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgKGludGVybmFsRm9ybURhdGEuaW52YWxpZCBhcyBhbnkpW2tleV0gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaW50ZXJuYWxGb3JtRGF0YTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaXNWYWxpZDxUIGV4dGVuZHMge30+KGRhdGE6IEZvcm1EYXRhPFQ+KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXM8Ym9vbGVhbj4oZGF0YS5pbnZhbGlkKS5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IGN1cnIgfHwgcHJldiwgZmFsc2UpO1xuICB9XG59XG4iXX0=