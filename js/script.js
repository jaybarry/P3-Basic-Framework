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
	    if (!Modernizr.input.placeholder)
	    {
	 
	        // set placeholder values
	        $(this).find('[placeholder]').each(function()
	        {
	            $(this).val( $(this).attr('placeholder') );
	        });
	 
	        // focus and blur of placeholders
	        $('[placeholder]').focus(function()
	        {
	            if ($(this).val() == $(this).attr('placeholder'))
	            {
	                $(this).val('');
	                $(this).removeClass('placeholder');
	            }
	        }).blur(function()
	        {
	            if ($(this).val() == '' || $(this).val() == $(this).attr('placeholder'))
	            {
	                $(this).val($(this).attr('placeholder'));
	                $(this).addClass('placeholder');
	            }
	        });
	 
	        // remove placeholders on submit
	        $('[placeholder]').closest('form').submit(function()
	        {
	            $(this).find('[placeholder]').each(function()
	            {
	                if ($(this).val() == $(this).attr('placeholder'))
	                {
	                    $(this).val('');
	                }
	            })
	        });
	 
	    }
	});
	
});

