$.fn.templater = function(options) {    
    var tags = {};
    $.extend(tags, options.tags);
    for(var key in tags) {
        templater.addTag(key, tags[key])
    }
    templater.run();
}     