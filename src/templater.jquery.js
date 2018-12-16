$.fn.templater = function(options) {    
    var tags = options.tags;
    
    $(this).each(function(element) {
    	var templater = new Templater(element);

	    for (var key in tags) {
	        templater.addTag(key, tags[key])
	    }

	    templater.run();
	});
}     