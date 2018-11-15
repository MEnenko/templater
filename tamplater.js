function Tamplater(){
    var bankTag = [];
    var bankTemlate = [];
    this.run = function() {
        
        for (var i = 0; i < bankTag.length; i++) {
            var bootstrap = document.body.querySelector(bankTag[i]);
            bootstrap.outerHTML = bankTemlate[i];
        } 
        /*
        document.body.style.background = '';
        var bootstrapButton = document.body.querySelector('bootstrap_button');
        bootstrapButton.remove()
        //bootstrapButton.outerHTML = '<p>Новый элемент!</p>';
        var botton = document.createElement('button');
        botton.setAttribute('class', 'btn btn-default');
        botton.setAttribute('type', 'submit');
        botton.innerHTML = "change button";
        document.body.append(botton);
        */
    } 
    this.addTag = function(tag, template){
        bankTag.push(tag);
        bankTemlate.push(template);
    }

}
var tamplater = new Tamplater();


            
        