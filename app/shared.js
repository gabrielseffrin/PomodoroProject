'use strict';

const USER_NAME = 'user.padrao';
const USER_TASKS = 'user.tasks';

$(function () {
    $('#footer').load('/footer.html');
    $('#header').load('/header.html');
});

export {
    USER_NAME,
    USER_TASKS
};