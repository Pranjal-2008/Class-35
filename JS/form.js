class Form {
    constructor(){
        this.title = createElement('h1');
        this.input = createInput("Name");
        this.button1 = createButton("Play");
        this.button2 = createButton("Reset");
        this.greeting = createElement('h1');
    }

    display(){
        this.title.html("Car Racing Game");
        this.title.position (displayWidth/2 - 100, 50);
        this.input.position (displayWidth/2 - 100 , displayHeight/2 - 50);
        this.button1.position (displayWidth/2 - 50, displayHeight/2);
        this.button2.position (displayWidth - 100 , 80);
        
    }
}