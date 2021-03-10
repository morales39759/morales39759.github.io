(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.platform = window.opspark.platform || {};
    
    let platform = window.opspark.platform;
    
    /**
     * init: This function initializes the platforms for the level.
     * 
     * GOAL: Add as many platforms necessary to make your level challenging.
     * 
     * Use the createPlatform Function to create platforms for the level. 
     * 
     * createPlatform() takes these arguments:
     *      
     *      createPlatform(x, y, scaleX, scaleY);
     * 
     *      x: The x coordineate for the platform.
     *      y: The y coordineate for the platform.
     *      scaleX: OPTIONAL The scale factor on the x-axis, this value will 
     *              stretch the platform in width.
     *      scaleY: OPTIONAL The scale factor on the y-axis, this value will 
     *              stretch the platform in height.
     */ 
    function init(game) {
        let createPlatform = platform.create;

        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        
        
         createPlatform(600, 100);
         createPlatform(120, 250);
         createPlatform(580, 380, 0.5);
         createPlatform(200, 480, 0.6);
         createPlatform(600, 580, 0.6,);

        createPlatform(0, game.world.height - 32, 3, 2);    // DO NOT DELETE

     
        
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    }
    platform.init = init;
})(window);