"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function lessThan(threshold) {
    return (alias, value) => {
        if (value && value >= threshold) {
            return {
                error: `${alias} deve ser menor que ${threshold} `,
                invalid: true,
            };
        }
        return {
            error: '',
            invalid: false,
        };
    };
}
exports.lessThan = lessThan;
function lessThanOrEqual(threshold) {
    return (alias, value) => {
        if (value && value > threshold) {
            return {
                error: `${alias} deve ser menor ou igual a que ${threshold} `,
                invalid: true,
            };
        }
        return {
            error: '',
            invalid: false,
        };
    };
}
exports.lessThanOrEqual = lessThanOrEqual;
function largerThan(threshold) {
    return (alias, value) => {
        if (value && value <= threshold) {
            return {
                error: `${alias} deve ser maior que ${threshold} `,
                invalid: true,
            };
        }
        return {
            error: '',
            invalid: false,
        };
    };
}
exports.largerThan = largerThan;
function largerThanOrEqual(threshold) {
    return (alias, value) => {
        if (value && value < threshold) {
            return {
                error: `${alias} deve ser maior ou igual a ${threshold} `,
                invalid: true,
            };
        }
        return {
            error: '',
            invalid: false,
        };
    };
}
exports.largerThanOrEqual = largerThanOrEqual;
function longerThan(threshold) {
    return (alias, value) => {
        if (value && value.length <= threshold) {
            return {
                error: `${alias} deve ser maior que ${threshold} caracteres`,
                invalid: true,
            };
        }
        return {
            error: '',
            invalid: false,
        };
    };
}
exports.longerThan = longerThan;
function shorterThan(threshold) {
    return (alias, value) => {
        if (value && value.length > threshold) {
            return {
                error: `${alias} deve ser maior que ${threshold} caracteres`,
                invalid: true,
            };
        }
        return {
            error: '',
            invalid: false,
        };
    };
}
exports.shorterThan = shorterThan;
exports.required = (alias, value) => {
    if (!value) {
        return {
            error: `${alias} é obrigatorio`,
            invalid: true,
        };
    }
    return {
        error: '',
        invalid: false,
    };
};
function largerthanField(fieldName, fieldNameAlias) {
    return (alias, value, data) => {
        if (value <= data.values[fieldName]) {
            return {
                error: `${alias} deve ser menor que ${fieldNameAlias}`,
                invalid: true,
            };
        }
        return {
            error: '',
            invalid: false,
        };
    };
}
exports.largerthanField = largerthanField;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvblJ1bGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vbGliL3ZhbGlkYXRpb25SdWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUtBLFNBQWdCLFFBQVEsQ0FBQyxTQUFpQjtJQUN4QyxPQUFPLENBQUMsS0FBYSxFQUFFLEtBQWEsRUFBRSxFQUFFO1FBQ3RDLElBQUksS0FBSyxJQUFJLEtBQUssSUFBSSxTQUFTLEVBQUU7WUFDL0IsT0FBTztnQkFDTCxLQUFLLEVBQUUsR0FBRyxLQUFLLHVCQUF1QixTQUFTLEdBQUc7Z0JBQ2xELE9BQU8sRUFBRSxJQUFJO2FBQ2QsQ0FBQztTQUNIO1FBQ0QsT0FBTztZQUNMLEtBQUssRUFBRSxFQUFFO1lBQ1QsT0FBTyxFQUFFLEtBQUs7U0FDZixDQUFDO0lBQ0osQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQWJELDRCQWFDO0FBRUQsU0FBZ0IsZUFBZSxDQUFDLFNBQWlCO0lBQy9DLE9BQU8sQ0FBQyxLQUFhLEVBQUUsS0FBYSxFQUFFLEVBQUU7UUFDdEMsSUFBSSxLQUFLLElBQUksS0FBSyxHQUFHLFNBQVMsRUFBRTtZQUM5QixPQUFPO2dCQUNMLEtBQUssRUFBRSxHQUFHLEtBQUssa0NBQWtDLFNBQVMsR0FBRztnQkFDN0QsT0FBTyxFQUFFLElBQUk7YUFDZCxDQUFDO1NBQ0g7UUFDRCxPQUFPO1lBQ0wsS0FBSyxFQUFFLEVBQUU7WUFDVCxPQUFPLEVBQUUsS0FBSztTQUNmLENBQUM7SUFDSixDQUFDLENBQUM7QUFDSixDQUFDO0FBYkQsMENBYUM7QUFFRCxTQUFnQixVQUFVLENBQUMsU0FBaUI7SUFDMUMsT0FBTyxDQUFDLEtBQWEsRUFBRSxLQUFhLEVBQUUsRUFBRTtRQUN0QyxJQUFJLEtBQUssSUFBSSxLQUFLLElBQUksU0FBUyxFQUFFO1lBQy9CLE9BQU87Z0JBQ0wsS0FBSyxFQUFFLEdBQUcsS0FBSyx1QkFBdUIsU0FBUyxHQUFHO2dCQUNsRCxPQUFPLEVBQUUsSUFBSTthQUNkLENBQUM7U0FDSDtRQUNELE9BQU87WUFDTCxLQUFLLEVBQUUsRUFBRTtZQUNULE9BQU8sRUFBRSxLQUFLO1NBQ2YsQ0FBQztJQUNKLENBQUMsQ0FBQztBQUNKLENBQUM7QUFiRCxnQ0FhQztBQUVELFNBQWdCLGlCQUFpQixDQUFDLFNBQWlCO0lBQ2pELE9BQU8sQ0FBQyxLQUFhLEVBQUUsS0FBYSxFQUFFLEVBQUU7UUFDdEMsSUFBSSxLQUFLLElBQUksS0FBSyxHQUFHLFNBQVMsRUFBRTtZQUM5QixPQUFPO2dCQUNMLEtBQUssRUFBRSxHQUFHLEtBQUssOEJBQThCLFNBQVMsR0FBRztnQkFDekQsT0FBTyxFQUFFLElBQUk7YUFDZCxDQUFDO1NBQ0g7UUFDRCxPQUFPO1lBQ0wsS0FBSyxFQUFFLEVBQUU7WUFDVCxPQUFPLEVBQUUsS0FBSztTQUNmLENBQUM7SUFDSixDQUFDLENBQUM7QUFDSixDQUFDO0FBYkQsOENBYUM7QUFFRCxTQUFnQixVQUFVLENBQUMsU0FBaUI7SUFDMUMsT0FBTyxDQUFDLEtBQWEsRUFBRSxLQUFhLEVBQUUsRUFBRTtRQUN0QyxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLFNBQVMsRUFBRTtZQUN0QyxPQUFPO2dCQUNMLEtBQUssRUFBRSxHQUFHLEtBQUssdUJBQXVCLFNBQVMsYUFBYTtnQkFDNUQsT0FBTyxFQUFFLElBQUk7YUFDZCxDQUFDO1NBQ0g7UUFDRCxPQUFPO1lBQ0wsS0FBSyxFQUFFLEVBQUU7WUFDVCxPQUFPLEVBQUUsS0FBSztTQUNmLENBQUM7SUFDSixDQUFDLENBQUM7QUFDSixDQUFDO0FBYkQsZ0NBYUM7QUFFRCxTQUFnQixXQUFXLENBQUMsU0FBaUI7SUFDM0MsT0FBTyxDQUFDLEtBQWEsRUFBRSxLQUFhLEVBQUUsRUFBRTtRQUN0QyxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLFNBQVMsRUFBRTtZQUNyQyxPQUFPO2dCQUNMLEtBQUssRUFBRSxHQUFHLEtBQUssdUJBQXVCLFNBQVMsYUFBYTtnQkFDNUQsT0FBTyxFQUFFLElBQUk7YUFDZCxDQUFDO1NBQ0g7UUFDRCxPQUFPO1lBQ0wsS0FBSyxFQUFFLEVBQUU7WUFDVCxPQUFPLEVBQUUsS0FBSztTQUNmLENBQUM7SUFDSixDQUFDLENBQUM7QUFDSixDQUFDO0FBYkQsa0NBYUM7QUFFWSxRQUFBLFFBQVEsR0FBbUIsQ0FBQyxLQUFhLEVBQUUsS0FBYSxFQUFFLEVBQUU7SUFDdkUsSUFBSSxDQUFDLEtBQUssRUFBRTtRQUNWLE9BQU87WUFDTCxLQUFLLEVBQUUsR0FBRyxLQUFLLGdCQUFnQjtZQUMvQixPQUFPLEVBQUUsSUFBSTtTQUNkLENBQUM7S0FDSDtJQUNELE9BQU87UUFDTCxLQUFLLEVBQUUsRUFBRTtRQUNULE9BQU8sRUFBRSxLQUFLO0tBQ2YsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLFNBQWdCLGVBQWUsQ0FBSSxTQUFpQixFQUFFLGNBQXNCO0lBQzFFLE9BQU8sQ0FBQyxLQUFhLEVBQUUsS0FBYSxFQUFFLElBQWlCLEVBQUUsRUFBRTtRQUN6RCxJQUFJLEtBQUssSUFBSyxJQUFJLENBQUMsTUFBYyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQzVDLE9BQU87Z0JBQ0wsS0FBSyxFQUFFLEdBQUcsS0FBSyx1QkFBdUIsY0FBYyxFQUFFO2dCQUN0RCxPQUFPLEVBQUUsSUFBSTthQUNkLENBQUM7U0FDSDtRQUNELE9BQU87WUFDTCxLQUFLLEVBQUUsRUFBRTtZQUNULE9BQU8sRUFBRSxLQUFLO1NBQ2YsQ0FBQztJQUNKLENBQUMsQ0FBQztBQUNKLENBQUM7QUFiRCwwQ0FhQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGb3JtRGF0YSBmcm9tICcuL0Zvcm1EYXRhJztcblxuZXhwb3J0IHR5cGUgVmFsaWRhdGlvblJ1bGU8VCA9IHt9PiA9IChhbGlhczogc3RyaW5nLCB2YWx1ZTogYW55LCBkYXRhPzogRm9ybURhdGE8VD4pID0+IFxuICB7IGludmFsaWQ6IGJvb2xlYW4sIGVycm9yOiBzdHJpbmd9O1xuXG5leHBvcnQgZnVuY3Rpb24gbGVzc1RoYW4odGhyZXNob2xkOiBudW1iZXIpOlZhbGlkYXRpb25SdWxlIHtcbiAgcmV0dXJuIChhbGlhczogc3RyaW5nLCB2YWx1ZTogbnVtYmVyKSA9PiB7XG4gICAgaWYgKHZhbHVlICYmIHZhbHVlID49IHRocmVzaG9sZCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZXJyb3I6IGAke2FsaWFzfSBkZXZlIHNlciBtZW5vciBxdWUgJHt0aHJlc2hvbGR9IGAsXG4gICAgICAgIGludmFsaWQ6IHRydWUsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3I6ICcnLFxuICAgICAgaW52YWxpZDogZmFsc2UsXG4gICAgfTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlc3NUaGFuT3JFcXVhbCh0aHJlc2hvbGQ6IG51bWJlcik6VmFsaWRhdGlvblJ1bGUge1xuICByZXR1cm4gKGFsaWFzOiBzdHJpbmcsIHZhbHVlOiBudW1iZXIpID0+IHtcbiAgICBpZiAodmFsdWUgJiYgdmFsdWUgPiB0aHJlc2hvbGQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVycm9yOiBgJHthbGlhc30gZGV2ZSBzZXIgbWVub3Igb3UgaWd1YWwgYSBxdWUgJHt0aHJlc2hvbGR9IGAsXG4gICAgICAgIGludmFsaWQ6IHRydWUsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3I6ICcnLFxuICAgICAgaW52YWxpZDogZmFsc2UsXG4gICAgfTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhcmdlclRoYW4odGhyZXNob2xkOiBudW1iZXIpOlZhbGlkYXRpb25SdWxlIHtcbiAgcmV0dXJuIChhbGlhczogc3RyaW5nLCB2YWx1ZTogbnVtYmVyKSA9PiB7XG4gICAgaWYgKHZhbHVlICYmIHZhbHVlIDw9IHRocmVzaG9sZCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZXJyb3I6IGAke2FsaWFzfSBkZXZlIHNlciBtYWlvciBxdWUgJHt0aHJlc2hvbGR9IGAsXG4gICAgICAgIGludmFsaWQ6IHRydWUsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3I6ICcnLFxuICAgICAgaW52YWxpZDogZmFsc2UsXG4gICAgfTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhcmdlclRoYW5PckVxdWFsKHRocmVzaG9sZDogbnVtYmVyKTpWYWxpZGF0aW9uUnVsZSB7XG4gIHJldHVybiAoYWxpYXM6IHN0cmluZywgdmFsdWU6IG51bWJlcikgPT4ge1xuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZSA8IHRocmVzaG9sZCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZXJyb3I6IGAke2FsaWFzfSBkZXZlIHNlciBtYWlvciBvdSBpZ3VhbCBhICR7dGhyZXNob2xkfSBgLFxuICAgICAgICBpbnZhbGlkOiB0cnVlLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yOiAnJyxcbiAgICAgIGludmFsaWQ6IGZhbHNlLFxuICAgIH07XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb25nZXJUaGFuKHRocmVzaG9sZDogbnVtYmVyKTpWYWxpZGF0aW9uUnVsZSB7XG4gIHJldHVybiAoYWxpYXM6IHN0cmluZywgdmFsdWU6IHN0cmluZykgPT4ge1xuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5sZW5ndGggPD0gdGhyZXNob2xkKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlcnJvcjogYCR7YWxpYXN9IGRldmUgc2VyIG1haW9yIHF1ZSAke3RocmVzaG9sZH0gY2FyYWN0ZXJlc2AsXG4gICAgICAgIGludmFsaWQ6IHRydWUsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3I6ICcnLFxuICAgICAgaW52YWxpZDogZmFsc2UsXG4gICAgfTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3J0ZXJUaGFuKHRocmVzaG9sZDogbnVtYmVyKTpWYWxpZGF0aW9uUnVsZSB7XG4gIHJldHVybiAoYWxpYXM6IHN0cmluZywgdmFsdWU6IHN0cmluZykgPT4ge1xuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5sZW5ndGggPiB0aHJlc2hvbGQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVycm9yOiBgJHthbGlhc30gZGV2ZSBzZXIgbWFpb3IgcXVlICR7dGhyZXNob2xkfSBjYXJhY3RlcmVzYCxcbiAgICAgICAgaW52YWxpZDogdHJ1ZSxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBlcnJvcjogJycsXG4gICAgICBpbnZhbGlkOiBmYWxzZSxcbiAgICB9O1xuICB9O1xufVxuXG5leHBvcnQgY29uc3QgcmVxdWlyZWQ6IFZhbGlkYXRpb25SdWxlID0gKGFsaWFzOiBzdHJpbmcsIHZhbHVlOiBudW1iZXIpID0+IHtcbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvcjogYCR7YWxpYXN9IMOpIG9icmlnYXRvcmlvYCxcbiAgICAgIGludmFsaWQ6IHRydWUsXG4gICAgfTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGVycm9yOiAnJyxcbiAgICBpbnZhbGlkOiBmYWxzZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBsYXJnZXJ0aGFuRmllbGQ8VD4oZmllbGROYW1lOiBzdHJpbmcsIGZpZWxkTmFtZUFsaWFzOiBzdHJpbmcpOiBWYWxpZGF0aW9uUnVsZSB7XG4gIHJldHVybiAoYWxpYXM6IHN0cmluZywgdmFsdWU6IG51bWJlciwgZGF0YTogRm9ybURhdGE8VD4pID0+IHtcbiAgICBpZiAodmFsdWUgPD0gKGRhdGEudmFsdWVzIGFzIGFueSlbZmllbGROYW1lXSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZXJyb3I6IGAke2FsaWFzfSBkZXZlIHNlciBtZW5vciBxdWUgJHtmaWVsZE5hbWVBbGlhc31gLFxuICAgICAgICBpbnZhbGlkOiB0cnVlLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yOiAnJyxcbiAgICAgIGludmFsaWQ6IGZhbHNlLFxuICAgIH07XG4gIH07XG59XG4iXX0=