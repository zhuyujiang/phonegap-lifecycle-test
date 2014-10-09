var app = {
    
	// on initialise set up listebers for application lifectycle events
    initialize: function() {
      	document.addEventListener('deviceready', this.onDeviceReady, false);
    },
	
    // deviceready Event Handler
    onDeviceReady: function() {
		alert('deviceready Event');
		//cannot add lifecycle event listeners until device is ready
		document.addEventListener("pause", this.onPause, false);
		document.addEventListener("resume", this.onResume, false);
        
		this.receivedEvent('deviceready');
		
    },
	
	 // deviceready Event Handler
    onResume: function() {
        app.receivedEvent('resume');
    },
	
	 // deviceready Event Handler
    onPause: function() {
        app.receivedEvent('pause');
    },
	
	
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        
		alert('Received Event: ' + id);
		
		var parentElement = document.getElementById(id);
        
		var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
		var resumeElement = parentElement.querySelector('.resumed');
        var pausedElement = parentElement.querySelector('.paused');

		listeningElement.setAttribute('style', 'display:none;');
		receivedElement.setAttribute('style', 'display:none;');
		resumeElement.setAttribute('style', 'display:none;');
        pausedElement.setAttribute('style', 'display:none;');
		
		switch (id) {
			
			case "deviceready": 
				receivedElement.setAttribute('style', 'display:block;');
				break;
			
			case "resume":
				resumeElement.setAttribute('style', 'display:block;');
				break;
			
			case "pause":
				pausedElement.setAttribute('style', 'display:block;');
				break;
		}
		
        
    }
};
