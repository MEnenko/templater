
function Templater() {
    var tags = {};

    this.run = function() {
        while (isCheckCustomTags(tags)) {
            for (var key in tags) {
                var tagList = document.body.querySelectorAll(key);
                for (tag of tagList) {
                    tag.outerHTML = render(tag, tags[key]);  
                }                      
            } 
        }
    }    

    function render(tag, template) {
        attributes = getAttributesTags(template);
        if (attributes) {
            attributes.forEach(function(attribute) {
                var value;
                var reg = getRegExp(attribute);
                if (!template.includes(attribute)) {
                    return;
                }
                value = getValueAttribute(attribute, tag)
                template = getTemplateWithReplacedAttribute(template, reg, value);
            });
        }
		return template;
    }

    this.addTag = function(tag, templat) {
        tags[tag] = templat;        
    } 

    function getValueAttribute(attribute, tag, value) {
        if (attribute == 'html') {
            return tag.innerHTML;
        } else {
            return tag.getAttribute(attribute) || '';
        }
    }

	function getAttributesTags(template) {
        return template.match(/[^{}]+(?=})/g);
    }

    function isCheckCustomTags(tags) {
        for (var key in tags) {
            if (document.body.querySelectorAll(key).length > 0) {
                return true;
            }
        }
        return false;
    }    

	function getTemplateWithReplacedAttribute(template, reg, value) {
		return template.replace(reg, value);
	}

	function getRegExp(attribute) {
		return (new RegExp('{{' + attribute + '}}'));
    }    
}
var templater = new Templater();


    