"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function lessThan(threshold) {
    return function (alias, value) {
        if (value && value >= threshold) {
            return {
                error: alias + " deve ser menor que " + threshold + " ",
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
    return function (alias, value) {
        if (value && value > threshold) {
            return {
                error: alias + " deve ser menor ou igual a que " + threshold + " ",
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
    return function (alias, value) {
        if (value && value <= threshold) {
            return {
                error: alias + " deve ser maior que " + threshold + " ",
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
    return function (alias, value) {
        if (value && value < threshold) {
            return {
                error: alias + " deve ser maior ou igual a " + threshold + " ",
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
    return function (alias, value) {
        if (value && value.length <= threshold) {
            return {
                error: alias + " deve ser maior que " + threshold + " caracteres",
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
    return function (alias, value) {
        if (value && value.length > threshold) {
            return {
                error: alias + " deve ser maior que " + threshold + " caracteres",
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
exports.required = function (alias, value) {
    if (!value) {
        return {
            error: alias + " \u00E9 obrigatorio",
            invalid: true,
        };
    }
    return {
        error: '',
        invalid: false,
    };
};
function largerthanField(fieldName, fieldNameAlias) {
    return function (alias, value, data) {
        if (value <= data.data[fieldName]) {
            return {
                error: alias + " deve ser menor que " + fieldNameAlias,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvblJ1bGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vbGliL3ZhbGlkYXRpb25SdWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUtBLFNBQWdCLFFBQVEsQ0FBQyxTQUFpQjtJQUN4QyxPQUFPLFVBQUMsS0FBYSxFQUFFLEtBQWE7UUFDbEMsSUFBSSxLQUFLLElBQUksS0FBSyxJQUFJLFNBQVMsRUFBRTtZQUMvQixPQUFPO2dCQUNMLEtBQUssRUFBSyxLQUFLLDRCQUF1QixTQUFTLE1BQUc7Z0JBQ2xELE9BQU8sRUFBRSxJQUFJO2FBQ2QsQ0FBQztTQUNIO1FBQ0QsT0FBTztZQUNMLEtBQUssRUFBRSxFQUFFO1lBQ1QsT0FBTyxFQUFFLEtBQUs7U0FDZixDQUFDO0lBQ0osQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQWJELDRCQWFDO0FBRUQsU0FBZ0IsZUFBZSxDQUFDLFNBQWlCO0lBQy9DLE9BQU8sVUFBQyxLQUFhLEVBQUUsS0FBYTtRQUNsQyxJQUFJLEtBQUssSUFBSSxLQUFLLEdBQUcsU0FBUyxFQUFFO1lBQzlCLE9BQU87Z0JBQ0wsS0FBSyxFQUFLLEtBQUssdUNBQWtDLFNBQVMsTUFBRztnQkFDN0QsT0FBTyxFQUFFLElBQUk7YUFDZCxDQUFDO1NBQ0g7UUFDRCxPQUFPO1lBQ0wsS0FBSyxFQUFFLEVBQUU7WUFDVCxPQUFPLEVBQUUsS0FBSztTQUNmLENBQUM7SUFDSixDQUFDLENBQUM7QUFDSixDQUFDO0FBYkQsMENBYUM7QUFFRCxTQUFnQixVQUFVLENBQUMsU0FBaUI7SUFDMUMsT0FBTyxVQUFDLEtBQWEsRUFBRSxLQUFhO1FBQ2xDLElBQUksS0FBSyxJQUFJLEtBQUssSUFBSSxTQUFTLEVBQUU7WUFDL0IsT0FBTztnQkFDTCxLQUFLLEVBQUssS0FBSyw0QkFBdUIsU0FBUyxNQUFHO2dCQUNsRCxPQUFPLEVBQUUsSUFBSTthQUNkLENBQUM7U0FDSDtRQUNELE9BQU87WUFDTCxLQUFLLEVBQUUsRUFBRTtZQUNULE9BQU8sRUFBRSxLQUFLO1NBQ2YsQ0FBQztJQUNKLENBQUMsQ0FBQztBQUNKLENBQUM7QUFiRCxnQ0FhQztBQUVELFNBQWdCLGlCQUFpQixDQUFDLFNBQWlCO0lBQ2pELE9BQU8sVUFBQyxLQUFhLEVBQUUsS0FBYTtRQUNsQyxJQUFJLEtBQUssSUFBSSxLQUFLLEdBQUcsU0FBUyxFQUFFO1lBQzlCLE9BQU87Z0JBQ0wsS0FBSyxFQUFLLEtBQUssbUNBQThCLFNBQVMsTUFBRztnQkFDekQsT0FBTyxFQUFFLElBQUk7YUFDZCxDQUFDO1NBQ0g7UUFDRCxPQUFPO1lBQ0wsS0FBSyxFQUFFLEVBQUU7WUFDVCxPQUFPLEVBQUUsS0FBSztTQUNmLENBQUM7SUFDSixDQUFDLENBQUM7QUFDSixDQUFDO0FBYkQsOENBYUM7QUFFRCxTQUFnQixVQUFVLENBQUMsU0FBaUI7SUFDMUMsT0FBTyxVQUFDLEtBQWEsRUFBRSxLQUFhO1FBQ2xDLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksU0FBUyxFQUFFO1lBQ3RDLE9BQU87Z0JBQ0wsS0FBSyxFQUFLLEtBQUssNEJBQXVCLFNBQVMsZ0JBQWE7Z0JBQzVELE9BQU8sRUFBRSxJQUFJO2FBQ2QsQ0FBQztTQUNIO1FBQ0QsT0FBTztZQUNMLEtBQUssRUFBRSxFQUFFO1lBQ1QsT0FBTyxFQUFFLEtBQUs7U0FDZixDQUFDO0lBQ0osQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQWJELGdDQWFDO0FBRUQsU0FBZ0IsV0FBVyxDQUFDLFNBQWlCO0lBQzNDLE9BQU8sVUFBQyxLQUFhLEVBQUUsS0FBYTtRQUNsQyxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLFNBQVMsRUFBRTtZQUNyQyxPQUFPO2dCQUNMLEtBQUssRUFBSyxLQUFLLDRCQUF1QixTQUFTLGdCQUFhO2dCQUM1RCxPQUFPLEVBQUUsSUFBSTthQUNkLENBQUM7U0FDSDtRQUNELE9BQU87WUFDTCxLQUFLLEVBQUUsRUFBRTtZQUNULE9BQU8sRUFBRSxLQUFLO1NBQ2YsQ0FBQztJQUNKLENBQUMsQ0FBQztBQUNKLENBQUM7QUFiRCxrQ0FhQztBQUVZLFFBQUEsUUFBUSxHQUFtQixVQUFDLEtBQWEsRUFBRSxLQUFhO0lBQ25FLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDVixPQUFPO1lBQ0wsS0FBSyxFQUFLLEtBQUssd0JBQWdCO1lBQy9CLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQztLQUNIO0lBQ0QsT0FBTztRQUNMLEtBQUssRUFBRSxFQUFFO1FBQ1QsT0FBTyxFQUFFLEtBQUs7S0FDZixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsU0FBZ0IsZUFBZSxDQUFJLFNBQWlCLEVBQUUsY0FBc0I7SUFDMUUsT0FBTyxVQUFDLEtBQWEsRUFBRSxLQUFhLEVBQUUsSUFBdUI7UUFDM0QsSUFBSSxLQUFLLElBQUssSUFBSSxDQUFDLElBQVksQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUMxQyxPQUFPO2dCQUNMLEtBQUssRUFBSyxLQUFLLDRCQUF1QixjQUFnQjtnQkFDdEQsT0FBTyxFQUFFLElBQUk7YUFDZCxDQUFDO1NBQ0g7UUFDRCxPQUFPO1lBQ0wsS0FBSyxFQUFFLEVBQUU7WUFDVCxPQUFPLEVBQUUsS0FBSztTQUNmLENBQUM7SUFDSixDQUFDLENBQUM7QUFDSixDQUFDO0FBYkQsMENBYUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmFsaWRhdGlvbkRhdGEgZnJvbSAnLi9WYWxpZGF0aW9uRGF0YSc7XG5cbmV4cG9ydCB0eXBlIFZhbGlkYXRpb25SdWxlPFQgPSB7fT4gPSAoYWxpYXM6IHN0cmluZywgdmFsdWU6IGFueSwgZGF0YT86IFZhbGlkYXRpb25EYXRhPFQ+KSA9PiBcbiAgeyBpbnZhbGlkOiBib29sZWFuLCBlcnJvcjogc3RyaW5nfTtcblxuZXhwb3J0IGZ1bmN0aW9uIGxlc3NUaGFuKHRocmVzaG9sZDogbnVtYmVyKTpWYWxpZGF0aW9uUnVsZSB7XG4gIHJldHVybiAoYWxpYXM6IHN0cmluZywgdmFsdWU6IG51bWJlcikgPT4ge1xuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZSA+PSB0aHJlc2hvbGQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVycm9yOiBgJHthbGlhc30gZGV2ZSBzZXIgbWVub3IgcXVlICR7dGhyZXNob2xkfSBgLFxuICAgICAgICBpbnZhbGlkOiB0cnVlLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yOiAnJyxcbiAgICAgIGludmFsaWQ6IGZhbHNlLFxuICAgIH07XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZXNzVGhhbk9yRXF1YWwodGhyZXNob2xkOiBudW1iZXIpOlZhbGlkYXRpb25SdWxlIHtcbiAgcmV0dXJuIChhbGlhczogc3RyaW5nLCB2YWx1ZTogbnVtYmVyKSA9PiB7XG4gICAgaWYgKHZhbHVlICYmIHZhbHVlID4gdGhyZXNob2xkKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlcnJvcjogYCR7YWxpYXN9IGRldmUgc2VyIG1lbm9yIG91IGlndWFsIGEgcXVlICR7dGhyZXNob2xkfSBgLFxuICAgICAgICBpbnZhbGlkOiB0cnVlLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yOiAnJyxcbiAgICAgIGludmFsaWQ6IGZhbHNlLFxuICAgIH07XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYXJnZXJUaGFuKHRocmVzaG9sZDogbnVtYmVyKTpWYWxpZGF0aW9uUnVsZSB7XG4gIHJldHVybiAoYWxpYXM6IHN0cmluZywgdmFsdWU6IG51bWJlcikgPT4ge1xuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZSA8PSB0aHJlc2hvbGQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVycm9yOiBgJHthbGlhc30gZGV2ZSBzZXIgbWFpb3IgcXVlICR7dGhyZXNob2xkfSBgLFxuICAgICAgICBpbnZhbGlkOiB0cnVlLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yOiAnJyxcbiAgICAgIGludmFsaWQ6IGZhbHNlLFxuICAgIH07XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYXJnZXJUaGFuT3JFcXVhbCh0aHJlc2hvbGQ6IG51bWJlcik6VmFsaWRhdGlvblJ1bGUge1xuICByZXR1cm4gKGFsaWFzOiBzdHJpbmcsIHZhbHVlOiBudW1iZXIpID0+IHtcbiAgICBpZiAodmFsdWUgJiYgdmFsdWUgPCB0aHJlc2hvbGQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGVycm9yOiBgJHthbGlhc30gZGV2ZSBzZXIgbWFpb3Igb3UgaWd1YWwgYSAke3RocmVzaG9sZH0gYCxcbiAgICAgICAgaW52YWxpZDogdHJ1ZSxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBlcnJvcjogJycsXG4gICAgICBpbnZhbGlkOiBmYWxzZSxcbiAgICB9O1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9uZ2VyVGhhbih0aHJlc2hvbGQ6IG51bWJlcik6VmFsaWRhdGlvblJ1bGUge1xuICByZXR1cm4gKGFsaWFzOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICBpZiAodmFsdWUgJiYgdmFsdWUubGVuZ3RoIDw9IHRocmVzaG9sZCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZXJyb3I6IGAke2FsaWFzfSBkZXZlIHNlciBtYWlvciBxdWUgJHt0aHJlc2hvbGR9IGNhcmFjdGVyZXNgLFxuICAgICAgICBpbnZhbGlkOiB0cnVlLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yOiAnJyxcbiAgICAgIGludmFsaWQ6IGZhbHNlLFxuICAgIH07XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG9ydGVyVGhhbih0aHJlc2hvbGQ6IG51bWJlcik6VmFsaWRhdGlvblJ1bGUge1xuICByZXR1cm4gKGFsaWFzOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICBpZiAodmFsdWUgJiYgdmFsdWUubGVuZ3RoID4gdGhyZXNob2xkKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlcnJvcjogYCR7YWxpYXN9IGRldmUgc2VyIG1haW9yIHF1ZSAke3RocmVzaG9sZH0gY2FyYWN0ZXJlc2AsXG4gICAgICAgIGludmFsaWQ6IHRydWUsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3I6ICcnLFxuICAgICAgaW52YWxpZDogZmFsc2UsXG4gICAgfTtcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IHJlcXVpcmVkOiBWYWxpZGF0aW9uUnVsZSA9IChhbGlhczogc3RyaW5nLCB2YWx1ZTogbnVtYmVyKSA9PiB7XG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3I6IGAke2FsaWFzfSDDqSBvYnJpZ2F0b3Jpb2AsXG4gICAgICBpbnZhbGlkOiB0cnVlLFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBlcnJvcjogJycsXG4gICAgaW52YWxpZDogZmFsc2UsXG4gIH07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbGFyZ2VydGhhbkZpZWxkPFQ+KGZpZWxkTmFtZTogc3RyaW5nLCBmaWVsZE5hbWVBbGlhczogc3RyaW5nKTogVmFsaWRhdGlvblJ1bGUge1xuICByZXR1cm4gKGFsaWFzOiBzdHJpbmcsIHZhbHVlOiBudW1iZXIsIGRhdGE6IFZhbGlkYXRpb25EYXRhPFQ+KSA9PiB7XG4gICAgaWYgKHZhbHVlIDw9IChkYXRhLmRhdGEgYXMgYW55KVtmaWVsZE5hbWVdKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBlcnJvcjogYCR7YWxpYXN9IGRldmUgc2VyIG1lbm9yIHF1ZSAke2ZpZWxkTmFtZUFsaWFzfWAsXG4gICAgICAgIGludmFsaWQ6IHRydWUsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgZXJyb3I6ICcnLFxuICAgICAgaW52YWxpZDogZmFsc2UsXG4gICAgfTtcbiAgfTtcbn1cbiJdfQ==