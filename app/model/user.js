'use strict';
export class User {
    constructor(userName, minutes) {
        this._task = new Array();
        /* this._task.push(task); */
        this._username = userName;
        //this._password = password;
        this._minutes = minutes;
    }

    task() {
        return this._task;
    }

    minutes() {
        return this._minutes;
    }

    hours() {
        return 0;
    }

    addTaskUser(task) {
        this._task.push(task);
    }

    updateMinutes(minutes) {
        this._minutes += minutes;
    }
}