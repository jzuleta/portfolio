'use strict';

(function () {
    function init() {
        var router = new Router([
            new Route('summary', 'summary.html', true),            
            new Route('experience', 'experience.html'),
            new Route('education', 'education.html'),
            new Route('skills', 'skills.html'),
            new Route('work', 'work.html')          
        ]);
    }
    init();
}());