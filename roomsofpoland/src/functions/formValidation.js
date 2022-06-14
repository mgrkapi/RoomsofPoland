import React from 'react';

function validate(values) {
    const errorMessages = {};

    if (values.username.length <= 2) {
        errorMessages.username = 'musi być dłuższy niż 2 znaki';
    }
    if (value.tel.length <= 9 ||
        typeof parseInt(value.tel) !== "number"
)
    {
        errorMessages.tel = "musi być dłuższy niż 9 znaków";
    }

    if (values.email.length <= 8 ||
        !values.email.includes("@") ||
        !values.email.includes("."))
    {
        errorMessages.email = 'email jest niepoprawny';
    }
    return Object.keys(errorMessages).length > 0
        ? errorMessages
        : null;
}

export default validate;