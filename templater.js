(function() {
	$.fn.templater = function(options) {
		var tags = {};
		$.extend(tags, options.tags);
        var collection = $(this);        
        while(isCheckCustomTags(collection, tags)) {            
            for (var key in tags) {
                collection.find(key).each(function() {
                    var tag = $(this);
                    tag.replaceWith(render(tag, tags[key]))
                });
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
                if (attribute == 'html') {
                    value = tag.html();
                } else {
                    value = tag.attr(attribute) || '';
                }
                template = getTemplateWithReplacedAttribute(template, reg, value);
            });
        }
		return template;
	}

	function getAttributesTags(template) {
        return template.match(/[^{}]+(?=})/g);
    }

    function isCheckCustomTags(collection, tags) {
        for (var tag in tags) {
            if (collection.find(tag).length > 0) {
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
})()