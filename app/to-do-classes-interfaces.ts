module ToDoList {

  // Interface
  export interface IPerson {
    name: string;
    email: string;
  }
  export interface ITask {
    description: string;
    done: boolean;
    priority: string;
    markDone(): void; //void means that the method takes no arguments and returns no values
    assignedTo?: IPerson;
  }
  // Base Object(s)

  export class Task implements ITask{
    done:boolean = false;
    constructor(public description: string, public priority:string, public assignedTo?: IPerson) {}
    markDone() {
      this.done = true;
    }
  }

  // Child Objects

  export class HomeTask extends Task {
    constructor(public description: string, public priority: string, public assignedTo?: IPerson){
          super(description, priority); // ASK QUESTION, WHY DID THE SUPER HAVE TO BE DECLARED
    }
  }



  export class WorkTask extends Task {
    constructor(public dueDate: Date, public description: string, public priority: string, public assignedTo: IPerson) {
      super(description, priority, assignedTo); // ASK QUESTION
    }
  }

  export class HobbyTask extends Task {
    constructor(public description:string) {
      super(description, "low");
    }
  }
}
