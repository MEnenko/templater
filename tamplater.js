function Tamplater() {
    var bankTag = [];
    var bankTemlate = [];
    this.run = function() {
        
        for (var i = 0; i < bankTag.length; i++) {
            var bootstrap = document.body.querySelector(bankTag[i]);

            bootstrap.outerHTML = render(bankTemlate[i], bootstrap)
        } 
    } 
    
    function render(templater, element) {
        var values = templater.match(/[^{}]+(?=})/g);

        for (var i = 0; i < values.length; i++) {
            var strValue, reg;
            
            if (values[i] == 'class') {
                strValue = element.getAttribute(values[i]);
                reg = /{{class}}/g;
            }else if (values[i] == 'type') {
                strValue = element.getAttribute(values[i]);
                reg = /{{type}}/g;
            }else if (values[i] == 'html') {
                strValue = element.innerHTML;
                reg = /{{html}}/g;
            }
            templater = templater.replace(reg, strValue);
        }
        return templater;
    }
    
    this.addTag = function(tag, template) {
        bankTag.push(tag);
        bankTemlate.push(template);
    }
}
var tamplater = new Tamplater();


            
        