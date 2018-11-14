"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ValidationRunner {
    constructor(...validations) {
        this.validations = validations.reduce((prev, curr) => Object.assign(prev, { [curr.fieldName]: curr }), {});
    }
    run(oldData, name, value) {
        const internalFormData = oldData;
        const validation = this.validations[name];
        if (validation) {
            const { error, invalid } = validation.validate(value);
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
    }
}
exports.default = ValidationRunner;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsaWRhdGlvblJ1bm5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2xpYi9WYWxpZGF0aW9uUnVubmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EsTUFBcUIsZ0JBQWdCO0lBR25DLFlBQVksR0FBRyxXQUE0QjtRQUN6QyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDbEgsQ0FBQztJQUVNLEdBQUcsQ0FBQyxPQUFvQixFQUFFLElBQVksRUFBRSxLQUFVO1FBQ3ZELE1BQU0sZ0JBQWdCLEdBQUcsT0FBTyxDQUFDO1FBQ2pDLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFMUMsSUFBSSxVQUFVLEVBQUU7WUFDZCxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFdEQsSUFBSSxPQUFPLEVBQUU7Z0JBQ1YsZ0JBQWdCLENBQUMsTUFBYyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztnQkFDOUMsZ0JBQWdCLENBQUMsT0FBZSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQzthQUNoRDtpQkFBTTtnQkFDSixnQkFBZ0IsQ0FBQyxNQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDO2dCQUNsRCxnQkFBZ0IsQ0FBQyxPQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO2dCQUMvQyxnQkFBZ0IsQ0FBQyxNQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO2FBQ25HO1NBQ0Y7YUFBTTtZQUNKLGdCQUFnQixDQUFDLE1BQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7U0FDaEQ7UUFFRCxPQUFPLGdCQUFnQixDQUFDO0lBQzFCLENBQUM7Q0FDRjtBQTVCRCxtQ0E0QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmFsaWRhdGlvbiBmcm9tICcuL1ZhbGlkYXRpb24nO1xuaW1wb3J0IEZvcm1EYXRhIGZyb20gJy4vRm9ybURhdGEnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYWxpZGF0aW9uUnVubmVyPFQ+IHtcbiAgcHJvdGVjdGVkIHZhbGlkYXRpb25zOiB7IFtzOiBzdHJpbmddOiBWYWxpZGF0aW9uPFQ+fTtcblxuICBjb25zdHJ1Y3RvciguLi52YWxpZGF0aW9uczogVmFsaWRhdGlvbjxUPltdKSB7XG4gICAgdGhpcy52YWxpZGF0aW9ucyA9IHZhbGlkYXRpb25zLnJlZHVjZSgocHJldjogYW55LCBjdXJyKSA9PiBPYmplY3QuYXNzaWduKHByZXYsIHsgW2N1cnIuZmllbGROYW1lXTogY3VyciB9KSwge30pO1xuICB9XG5cbiAgcHVibGljIHJ1bihvbGREYXRhOiBGb3JtRGF0YTxUPiwgbmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KTogRm9ybURhdGE8VD4ge1xuICAgIGNvbnN0IGludGVybmFsRm9ybURhdGEgPSBvbGREYXRhO1xuICAgIGNvbnN0IHZhbGlkYXRpb24gPSB0aGlzLnZhbGlkYXRpb25zW25hbWVdO1xuXG4gICAgaWYgKHZhbGlkYXRpb24pIHtcbiAgICAgIGNvbnN0IHsgZXJyb3IsIGludmFsaWQgfSA9IHZhbGlkYXRpb24udmFsaWRhdGUodmFsdWUpO1xuICAgICAgXG4gICAgICBpZiAoaW52YWxpZCkge1xuICAgICAgICAoaW50ZXJuYWxGb3JtRGF0YS5lcnJvcnMgYXMgYW55KVtuYW1lXSA9IGVycm9yO1xuICAgICAgICAoaW50ZXJuYWxGb3JtRGF0YS5pbnZhbGlkIGFzIGFueSlbbmFtZV0gPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgKGludGVybmFsRm9ybURhdGEuZXJyb3JzIGFzIGFueSlbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIChpbnRlcm5hbEZvcm1EYXRhLmludmFsaWQgYXMgYW55KVtuYW1lXSA9IGZhbHNlO1xuICAgICAgICAoaW50ZXJuYWxGb3JtRGF0YS52YWx1ZXMgYXMgYW55KVtuYW1lXSA9IHZhbGlkYXRpb24udHlwZSA9PT0gJ251bWJlcicgPyBwYXJzZUZsb2F0KHZhbHVlKSA6IHZhbHVlOyAgXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIChpbnRlcm5hbEZvcm1EYXRhLnZhbHVlcyBhcyBhbnkpW25hbWVdID0gdmFsdWU7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBpbnRlcm5hbEZvcm1EYXRhO1xuICB9XG59XG4iXX0=