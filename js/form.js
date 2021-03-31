class Form{
    constructor(){

    }
    
    display(){
        var title = createElement('h2')
        title.html('Multiplayer Car racer game')
        title.position(130,0)
        
        var input = createInput("Name")
        input.position(400,160)

        var button = createButton('play')
        button.position(400,200)

        var greeting = createElement('h3')

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();
            
            playerCount+=1;
            player.update(name)
            player.updateCount(playerCount)

            greeting.html("Welcome!" + name)
            greeting.position(450,160)
        })
          
        }
}