enum StateTask {
    Pending,
    InProgress,
    Todo,
    Done
}
export interface ITask {
    name: string;
    time: string,
    state: string 
}
/*
export interface ITask {
    name: string;
    state: StateTask;
    time: string;
}
*/

