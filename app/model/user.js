'use strict';
export class User {
    constructor(userName, password, minutes) {
        this._task = new Array();
        /* this._task.push(task); */
        this._username = userName;
        this._password = password;
        this._minutes = minutes;
    }

    get task() {
        return this._task;
    }

    get minutes() {
        return this.minutes * 60;
    }

    get hours() {
        return 0;
    }

    addTaskUser(task) {
        this._task.push(task);
    }
}