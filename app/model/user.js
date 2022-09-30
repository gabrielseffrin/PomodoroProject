'use strict';
export class User {
    constructor(userName, password, task, minutes) {
        this.task = []
        this.task.push(task)
        this.username = userName;
        this.password = password;
        this.minutes = minutes
    }

    get _task() {
        return
    }

    get _minutes() {
        return this.minutes * 60
    }

    get hours() {
        return 0
    }
}