export class User {
    constructor(userName, password, task, minutes) {
        this.task = new Array()
        this.task.push(task)
        this.username = userName;
        this.password = password;
    }

    get _task() {
        return
    }

    get _minutes() {
        return this.minutes
    }
}