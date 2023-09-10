export interface FormlyTemplateOptions {
    type?: string;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    options?: string[];
    rows?: number;
    cols?: number;
    description?: string;
    hidden?: boolean;
    max?: number;
    min?: number;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    required?: boolean;
    tabindex?: number;
    readonly?: boolean;
    step?: number;
}

export const JSONSchemaFTO = {
    "$ref": "#/definitions/FormlyTemplateOptions",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "definitions": {
        "FormlyTemplateOptions": {
            "additionalProperties": false,
            "properties": {
                "cols": {
                    "type": "number"
                },
                "description": {
                    "type": "string"
                },
                "disabled": {
                    "type": "boolean"
                },
                "hidden": {
                    "type": "boolean"
                },
                "label": {
                    "type": "string"
                },
                "max": {
                    "type": "number"
                },
                "maxLength": {
                    "type": "number"
                },
                "min": {
                    "type": "number"
                },
                "minLength": {
                    "type": "number"
                },
                "options": {
                    "items": {
                        "type": "string"
                    },
                    "type": "array"
                },
                "pattern": {
                    "type": "string"
                },
                "placeholder": {
                    "type": "string"
                },
                "readonly": {
                    "type": "boolean"
                },
                "required": {
                    "type": "boolean"
                },
                "rows": {
                    "type": "number"
                },
                "step": {
                    "type": "number"
                },
                "tabindex": {
                    "type": "number"
                },
                "type": {
                    "type": "string"
                }
            },
            "type": "object"
        }
    }
};