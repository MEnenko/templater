function Templater() {
    
    var tags = {};

    this.run = function() {
        for (var key in tags) {
            var tagList = document.body.querySelectorAll(key);
            for (tag of tagList) {
                tag.outerHTML = render(tag, tags[key]);    
            }            
        } 
    } 
      
    function render(tag, templat) {
        var attributes = templat.match(/[^{}]+(?=})/g);

        attributes.forEach(function(element) {
            var valueAttributes;

            var reg = new RegExp('{{'+element+'}}');
           
            if (templat.includes(element) && element == 'html') {
                valueAttributes = tag.innerHTML;
                templat = templat.replace(reg, valueAttributes);
            } else if(templat.includes(element)) {
                valueAttributes = tag.getAttribute(element);
                templat = templat.replace(reg, valueAttributes);
            } 
        });        

        return templat;
    }
    
    this.addTag = function(tag, templat) {
        tags[tag] = templat;        
    }    
}

var templater = new Templater();


            
        