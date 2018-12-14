
describe("Stage 5", function() {
    it("must create method `templater` for `jQuery.fn`", function() {
        assert.isFunction(jQuery.fn.templater);
    }); 

    it("Cmust find 2 tags `panel`", function() {       
        assert.equal($('panel').length, 2);
    });    
    
    it("must replace element with tag `panel` to colection with tags `div`", function() {
        $('panel').replaceWith(render($('panel'), '<div class="panel"><div class="panel-heading">{{heading}}</div><div class="panel-body">{{html}}</div></div>'));
        
        var replaced = $('.panel');
        assert.equal(replaced.length, 1, 'Colection with `div` tags was not created. Amount of `panel` elements in DOM');
        assert.equal(replaced.attr('class'), 'panel',  'Element with `div` tag has wrong class. It has class')
        var someHtmlColection = '<div class="panel-heading">Outer Panel</div><div class="panel-body"><div>Some outer content</div><panel heading="Inner Panel"><div>Some Inner content</div></panel></div>';
        assert.equal(replaced.html().replace(/[\s]+(?=<)/g, ""), someHtmlColection, 'Element with `div` tag innerHTML');

    });  
    it("Cmust find 1 tag `panel`", function() {       
        assert.equal($('panel').length, 1);
    });  
    it("must replace element with tag `panel` to colection with tags `div`", function() {
        $('panel').replaceWith(render($('panel'), '<div class="panel"><div class="panel-heading">{{heading}}</div><div class="panel-body">{{html}}</div></div>'));
        
        var replaced = $('.panel');
        assert.equal(replaced.length, 2, 'Colection with `div` tags was not created. Amount of `panel` elements in DOM');
        assert.equal(replaced.attr('class'), 'panel',  'Element with `div` tag has wrong class. It has class')
        var someHtmlColection = '<div class="panel-heading">Outer Panel</div><div class="panel-body"><div>Some outer content</div><div class="panel"><div class="panel-heading">Inner Panel</div><div class="panel-body"><div>Some Inner content</div></div></div></div>';
        assert.equal(replaced.html().replace(/[\s]+(?=<)/g, ""), someHtmlColection, 'Element with `div` tag innerHTML');

    });   
    
});