export class Model{
     user;
     items; 

    constructor(){
        this.user = "Adam";
        this.items = [new ToDoItem("Buy flowers",false),
                      new ToDoItem("Get Shoes",false),
                      new ToDoItem("Collect Tickets",true),
                      new ToDoItem("Call Joe",false) ];
    }
}

export class ToDoItem{

    private action;
    private done;
    
    constructor(action,done){
        this.action = action;
        this.done = done;
    }

    set setAction(action){this.action = action}
    get getAction(){return this.action}

    set setDone(done){this.done = done}
    get getDone(){return this.done}
}