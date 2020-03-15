interface Human {
    name: string;
    say(): void;
}

class Asian implements Human {
    constructor(name: string) {
        this.name = name;
    }

    name: string

    say(){
        console.log(1)
    }
}

class Auto {
    state = 1
}

interface AutoInterface extends Auto {

}

class C implements AutoInterface {
    state = 1
}

class Bus extends Auto implements AutoInterface {
    
}