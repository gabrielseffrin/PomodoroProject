import {
    User
} from "../model/user.js";

import {
    USER_NAME
} from "../shared.js";

import {
    timeToFocus
} from "../util/countdown.js";

function initializeUsers() {
    if (localStorage.getItem(USER_NAME != null)) {
        return false
    }

    var user = new User(
        USER_NAME,
        '12345',
        [],
        0
    )

    localStorage.setItem(USER_NAME, JSON.stringify(user))
}

window.onload = function () {
    initializeUsers()
}