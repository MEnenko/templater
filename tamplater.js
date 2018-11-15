function Tamplater(){
    this.run = function() {
        document.body.style.background = '';
        var bootstrapButton = document.body.querySelector('bootstrap_button');
        bootstrapButton.remove()
        
        var botton = document.createElement('button');
        botton.setAttribute('class', 'btn btn-default');
        botton.setAttribute('type', 'submit');
        botton.innerHTML = "change button";
        document.body.append(botton);
    } 

}
var tamplater = new Tamplater();
var T = 'hellow';

            
        