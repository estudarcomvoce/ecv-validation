"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function lessThan(threshold) {
    return (alias, value) => {
        if (value >= threshold) {
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
        if (value > threshold) {
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
        if (value <= threshold) {
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
        if (value < threshold) {
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
        if (value <= threshold) {
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
        if (value > threshold) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvblJ1bGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vbGliL3ZhbGlkYXRpb25SdWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUtBLFNBQWdCLFFBQVEsQ0FBQyxTQUFpQjtJQUN4QyxPQUFPLENBQUMsS0FBYSxFQUFFLEtBQWEsRUFBRSxFQUFFO1FBQ3RDLElBQUksS0FBSyxJQUFJLFNBQVMsRUFBRTtZQUN0QixPQUFPO2dCQUNMLEtBQUssRUFBRSxHQUFHLEtBQUssdUJBQXVCLFNBQVMsR0FBRztnQkFDbEQsT0FBTyxFQUFFLElBQUk7YUFDZCxDQUFDO1NBQ0g7UUFDRCxPQUFPO1lBQ0wsS0FBSyxFQUFFLEVBQUU7WUFDVCxPQUFPLEVBQUUsS0FBSztTQUNmLENBQUM7SUFDSixDQUFDLENBQUM7QUFDSixDQUFDO0FBYkQsNEJBYUM7QUFFRCxTQUFnQixlQUFlLENBQUMsU0FBaUI7SUFDL0MsT0FBTyxDQUFDLEtBQWEsRUFBRSxLQUFhLEVBQUUsRUFBRTtRQUN0QyxJQUFJLEtBQUssR0FBRyxTQUFTLEVBQUU7WUFDckIsT0FBTztnQkFDTCxLQUFLLEVBQUUsR0FBRyxLQUFLLGtDQUFrQyxTQUFTLEdBQUc7Z0JBQzdELE9BQU8sRUFBRSxJQUFJO2FBQ2QsQ0FBQztTQUNIO1FBQ0QsT0FBTztZQUNMLEtBQUssRUFBRSxFQUFFO1lBQ1QsT0FBTyxFQUFFLEtBQUs7U0FDZixDQUFDO0lBQ0osQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQWJELDBDQWFDO0FBRUQsU0FBZ0IsVUFBVSxDQUFDLFNBQWlCO0lBQzFDLE9BQU8sQ0FBQyxLQUFhLEVBQUUsS0FBYSxFQUFFLEVBQUU7UUFDdEMsSUFBSSxLQUFLLElBQUksU0FBUyxFQUFFO1lBQ3RCLE9BQU87Z0JBQ0wsS0FBSyxFQUFFLEdBQUcsS0FBSyx1QkFBdUIsU0FBUyxHQUFHO2dCQUNsRCxPQUFPLEVBQUUsSUFBSTthQUNkLENBQUM7U0FDSDtRQUNELE9BQU87WUFDTCxLQUFLLEVBQUUsRUFBRTtZQUNULE9BQU8sRUFBRSxLQUFLO1NBQ2YsQ0FBQztJQUNKLENBQUMsQ0FBQztBQUNKLENBQUM7QUFiRCxnQ0FhQztBQUVELFNBQWdCLGlCQUFpQixDQUFDLFNBQWlCO0lBQ2pELE9BQU8sQ0FBQyxLQUFhLEVBQUUsS0FBYSxFQUFFLEVBQUU7UUFDdEMsSUFBSSxLQUFLLEdBQUcsU0FBUyxFQUFFO1lBQ3JCLE9BQU87Z0JBQ0wsS0FBSyxFQUFFLEdBQUcsS0FBSyw4QkFBOEIsU0FBUyxHQUFHO2dCQUN6RCxPQUFPLEVBQUUsSUFBSTthQUNkLENBQUM7U0FDSDtRQUNELE9BQU87WUFDTCxLQUFLLEVBQUUsRUFBRTtZQUNULE9BQU8sRUFBRSxLQUFLO1NBQ2YsQ0FBQztJQUNKLENBQUMsQ0FBQztBQUNKLENBQUM7QUFiRCw4Q0FhQztBQUVELFNBQWdCLFVBQVUsQ0FBQyxTQUFpQjtJQUMxQyxPQUFPLENBQUMsS0FBYSxFQUFFLEtBQWEsRUFBRSxFQUFFO1FBQ3RDLElBQUksS0FBSyxJQUFJLFNBQVMsRUFBRTtZQUN0QixPQUFPO2dCQUNMLEtBQUssRUFBRSxHQUFHLEtBQUssdUJBQXVCLFNBQVMsYUFBYTtnQkFDNUQsT0FBTyxFQUFFLElBQUk7YUFDZCxDQUFDO1NBQ0g7UUFDRCxPQUFPO1lBQ0wsS0FBSyxFQUFFLEVBQUU7WUFDVCxPQUFPLEVBQUUsS0FBSztTQUNmLENBQUM7SUFDSixDQUFDLENBQUM7QUFDSixDQUFDO0FBYkQsZ0NBYUM7QUFFRCxTQUFnQixXQUFXLENBQUMsU0FBaUI7SUFDM0MsT0FBTyxDQUFDLEtBQWEsRUFBRSxLQUFhLEVBQUUsRUFBRTtRQUN0QyxJQUFJLEtBQUssR0FBRyxTQUFTLEVBQUU7WUFDckIsT0FBTztnQkFDTCxLQUFLLEVBQUUsR0FBRyxLQUFLLHVCQUF1QixTQUFTLGFBQWE7Z0JBQzVELE9BQU8sRUFBRSxJQUFJO2FBQ2QsQ0FBQztTQUNIO1FBQ0QsT0FBTztZQUNMLEtBQUssRUFBRSxFQUFFO1lBQ1QsT0FBTyxFQUFFLEtBQUs7U0FDZixDQUFDO0lBQ0osQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQWJELGtDQWFDO0FBRVksUUFBQSxRQUFRLEdBQW1CLENBQUMsS0FBYSxFQUFFLEtBQWEsRUFBRSxFQUFFO0lBQ3ZFLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDVixPQUFPO1lBQ0wsS0FBSyxFQUFFLEdBQUcsS0FBSyxnQkFBZ0I7WUFDL0IsT0FBTyxFQUFFLElBQUk7U0FDZCxDQUFDO0tBQ0g7SUFDRCxPQUFPO1FBQ0wsS0FBSyxFQUFFLEVBQUU7UUFDVCxPQUFPLEVBQUUsS0FBSztLQUNmLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixTQUFnQixlQUFlLENBQUksU0FBaUIsRUFBRSxjQUFzQjtJQUMxRSxPQUFPLENBQUMsS0FBYSxFQUFFLEtBQWEsRUFBRSxJQUFpQixFQUFFLEVBQUU7UUFDekQsSUFBSSxLQUFLLElBQUssSUFBSSxDQUFDLE1BQWMsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUM1QyxPQUFPO2dCQUNMLEtBQUssRUFBRSxHQUFHLEtBQUssdUJBQXVCLGNBQWMsRUFBRTtnQkFDdEQsT0FBTyxFQUFFLElBQUk7YUFDZCxDQUFDO1NBQ0g7UUFDRCxPQUFPO1lBQ0wsS0FBSyxFQUFFLEVBQUU7WUFDVCxPQUFPLEVBQUUsS0FBSztTQUNmLENBQUM7SUFDSixDQUFDLENBQUM7QUFDSixDQUFDO0FBYkQsMENBYUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRm9ybURhdGEgZnJvbSAnLi9Gb3JtRGF0YSc7XG5cbmV4cG9ydCB0eXBlIFZhbGlkYXRpb25SdWxlPFQgPSB7fT4gPSAoYWxpYXM6IHN0cmluZywgdmFsdWU6IGFueSwgZGF0YT86IEZvcm1EYXRhPFQ+KSA9PiBcbiAgeyBpbnZhbGlkOiBib29sZWFuLCBlcnJvcjogc3RyaW5nfTtcblxuZXhwb3J0IGZ1bmN0aW9uIGxlc3NUaGFuKHRocmVzaG9sZDogbnVtYmVyKTpWYWxpZGF0aW9uUnVsZSB7XG4gIHJldHVybiAoYWxpYXM6IHN0cmluZywgdmFsdWU6IG51bWJlcikgPT4ge1xuICAgIGlmICh2YWx1ZSA+PSB0aHJlc2hvbGQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVycm9yOiBgJHthbGlhc30gZGV2ZSBzZXIgbWVub3IgcXVlICR7dGhyZXNob2xkfSBgLFxuICAgICAgICBpbnZhbGlkOiB0cnVlLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yOiAnJyxcbiAgICAgIGludmFsaWQ6IGZhbHNlLFxuICAgIH07XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZXNzVGhhbk9yRXF1YWwodGhyZXNob2xkOiBudW1iZXIpOlZhbGlkYXRpb25SdWxlIHtcbiAgcmV0dXJuIChhbGlhczogc3RyaW5nLCB2YWx1ZTogbnVtYmVyKSA9PiB7XG4gICAgaWYgKHZhbHVlID4gdGhyZXNob2xkKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlcnJvcjogYCR7YWxpYXN9IGRldmUgc2VyIG1lbm9yIG91IGlndWFsIGEgcXVlICR7dGhyZXNob2xkfSBgLFxuICAgICAgICBpbnZhbGlkOiB0cnVlLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yOiAnJyxcbiAgICAgIGludmFsaWQ6IGZhbHNlLFxuICAgIH07XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYXJnZXJUaGFuKHRocmVzaG9sZDogbnVtYmVyKTpWYWxpZGF0aW9uUnVsZSB7XG4gIHJldHVybiAoYWxpYXM6IHN0cmluZywgdmFsdWU6IG51bWJlcikgPT4ge1xuICAgIGlmICh2YWx1ZSA8PSB0aHJlc2hvbGQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVycm9yOiBgJHthbGlhc30gZGV2ZSBzZXIgbWFpb3IgcXVlICR7dGhyZXNob2xkfSBgLFxuICAgICAgICBpbnZhbGlkOiB0cnVlLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yOiAnJyxcbiAgICAgIGludmFsaWQ6IGZhbHNlLFxuICAgIH07XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYXJnZXJUaGFuT3JFcXVhbCh0aHJlc2hvbGQ6IG51bWJlcik6VmFsaWRhdGlvblJ1bGUge1xuICByZXR1cm4gKGFsaWFzOiBzdHJpbmcsIHZhbHVlOiBudW1iZXIpID0+IHtcbiAgICBpZiAodmFsdWUgPCB0aHJlc2hvbGQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVycm9yOiBgJHthbGlhc30gZGV2ZSBzZXIgbWFpb3Igb3UgaWd1YWwgYSAke3RocmVzaG9sZH0gYCxcbiAgICAgICAgaW52YWxpZDogdHJ1ZSxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBlcnJvcjogJycsXG4gICAgICBpbnZhbGlkOiBmYWxzZSxcbiAgICB9O1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9uZ2VyVGhhbih0aHJlc2hvbGQ6IG51bWJlcik6VmFsaWRhdGlvblJ1bGUge1xuICByZXR1cm4gKGFsaWFzOiBzdHJpbmcsIHZhbHVlOiBudW1iZXIpID0+IHtcbiAgICBpZiAodmFsdWUgPD0gdGhyZXNob2xkKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlcnJvcjogYCR7YWxpYXN9IGRldmUgc2VyIG1haW9yIHF1ZSAke3RocmVzaG9sZH0gY2FyYWN0ZXJlc2AsXG4gICAgICAgIGludmFsaWQ6IHRydWUsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3I6ICcnLFxuICAgICAgaW52YWxpZDogZmFsc2UsXG4gICAgfTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3J0ZXJUaGFuKHRocmVzaG9sZDogbnVtYmVyKTpWYWxpZGF0aW9uUnVsZSB7XG4gIHJldHVybiAoYWxpYXM6IHN0cmluZywgdmFsdWU6IG51bWJlcikgPT4ge1xuICAgIGlmICh2YWx1ZSA+IHRocmVzaG9sZCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZXJyb3I6IGAke2FsaWFzfSBkZXZlIHNlciBtYWlvciBxdWUgJHt0aHJlc2hvbGR9IGNhcmFjdGVyZXNgLFxuICAgICAgICBpbnZhbGlkOiB0cnVlLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yOiAnJyxcbiAgICAgIGludmFsaWQ6IGZhbHNlLFxuICAgIH07XG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCByZXF1aXJlZDogVmFsaWRhdGlvblJ1bGUgPSAoYWxpYXM6IHN0cmluZywgdmFsdWU6IG51bWJlcikgPT4ge1xuICBpZiAoIXZhbHVlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yOiBgJHthbGlhc30gw6kgb2JyaWdhdG9yaW9gLFxuICAgICAgaW52YWxpZDogdHJ1ZSxcbiAgICB9O1xuICB9XG4gIHJldHVybiB7XG4gICAgZXJyb3I6ICcnLFxuICAgIGludmFsaWQ6IGZhbHNlLFxuICB9O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGxhcmdlcnRoYW5GaWVsZDxUPihmaWVsZE5hbWU6IHN0cmluZywgZmllbGROYW1lQWxpYXM6IHN0cmluZyk6IFZhbGlkYXRpb25SdWxlIHtcbiAgcmV0dXJuIChhbGlhczogc3RyaW5nLCB2YWx1ZTogbnVtYmVyLCBkYXRhOiBGb3JtRGF0YTxUPikgPT4ge1xuICAgIGlmICh2YWx1ZSA8PSAoZGF0YS52YWx1ZXMgYXMgYW55KVtmaWVsZE5hbWVdKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlcnJvcjogYCR7YWxpYXN9IGRldmUgc2VyIG1lbm9yIHF1ZSAke2ZpZWxkTmFtZUFsaWFzfWAsXG4gICAgICAgIGludmFsaWQ6IHRydWUsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3I6ICcnLFxuICAgICAgaW52YWxpZDogZmFsc2UsXG4gICAgfTtcbiAgfTtcbn1cbiJdfQ==