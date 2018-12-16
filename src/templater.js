'use strict'

function Templater(wrapper) {
    var tags = {};
    if (!wrapper) {
        wrapper = document.body;
    } 

    this.run = function() {
        while (isCustomTagsExists(tags, wrapper)) {
            for (var key in tags) {
                var tagList = wrapper.querySelectorAll(key);

                for (var tag of tagList) {
                    tag.outerHTML = render(tag, tags[key]);  
                }                      
            } 
        }
    }    

    this.addTag = function(tag, templat) {
        tags[tag] = templat;        
    }

    function render(tag, template) {
        var attributes = getAttributesTags(template);

        attributes.forEach(function(attribute) {
            var reg = getAttributeSelectRegExp(attribute);

            if (!template.includes(attribute)) {
                return;
            }

            var value = getValueAttribute(attribute, tag)
            template = getTemplateWithReplacedAttribute(template, attribute, value);
        });

		return template;
    }

    function getValueAttribute(attribute, tag, value) {
        if (attribute == 'html') {
            return tag.innerHTML;
        } else {
            return tag.getAttribute(attribute) || '';
        }
    }

	function getAttributesTags(template) {
        return template.match(/[^{}]+(?=})/g) || [];
    }

    function isCustomTagsExists(tags, wrapper) {
        for (var key in tags) {
            if (wrapper.querySelectorAll(key).length > 0) {
                return true;
            }
        }

        return false;
    }    

	function getTemplateWithReplacedAttribute(template, attribute, value) {
		return template.replace(getAttributeSelectRegExp(attribute), value);
	}

	function getAttributeSelectRegExp(attribute) {
		return (new RegExp('{{' + attribute + '}}'));
    }    
}

if (typeof module !== 'undefined') {
    module.exports = Templater;
}




    