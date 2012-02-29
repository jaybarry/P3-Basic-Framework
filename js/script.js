$(document).ready(function() {
	
	$(function()
	{	
		//Replace svg in img tag with png of same name
		/*
		if(!Modernizr.svg)
		{
			
			var imgs = document.getElementsByTagName('img');
			var i=0;
			var l = imgs.length;
			for (; i != l; ++i) {
			    if (imgs[i].src.match(/.*\.svg$/)) {
			        imgs[i].src = imgs[i].src.slice(0, -3) + "png";
			    }
			}

		}
		*/
		
	    // check placeholder browser support
		Modernizr.load({
		  test: Modernizr.input.placeholder,
		  nope: 'plugins/jquery.placeholder.min.js',
		  complete: function () {
		   	$('input, textarea').placeholder();
		  }
		});

	});

});

