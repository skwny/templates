// This is for reference only

// ----------------------------------------------------------------//
// This is the observable shared by all tags. Access observable with the code
riot.mixin('sharedObservable', {
		observable: riot.observable()
	});

// To load and access the observable within tag <script> block:
/*
	// Load the mixin
		this.mixin('sharedObservable');

	// Access the mixin
		this.observable.on('eventName', function(){
			// ..
		})

	this.observable.trigger('eventName');

		// etc.
*/
// ----------------------------------------------------------------//
