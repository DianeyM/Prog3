class Stack {
    constructor(){
        this.stack = [];
    }

    push(element){
        this.stack.push(element);
        return this.stack;
    }

    pop(){
        return this.stack.pop();
    }

    peek(){
        return this.stack[this.stack.length - 1];
    }

    size(){
        return this.stack.length;
    }

    print(){
        console.log(this.stack);
    }
}

 const stack = new Stack();
    console.log('SIZE: ' + stack.size());
    console.log('push jos.fel: ' + stack.push('Jose Feliciano'));
    console.log('push el puma: ' + stack.push('El puma'));
    console.log('SIZE: ' + stack.size());
    stack.print();
    console.log('pop: ' + stack.pop());
    console.log('peek: ' + stack.peek());
    console.log(stack);