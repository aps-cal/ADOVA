(function( $ ){

  var settings;
 

  var methods = {
  
     

     init : function( options ) {  

		$this = $(this);
		
		$this.html("");

		//Size target div
		$this.width(settings.containerWidth).height(settings.containerHeight).css({ 'position' : 'relative', 'overflow' : 'hidden' });

		//Add controls, caption and slide container
		$this.append('<div>&lsaquo;</div>');
		$this.append('<div>&rsaquo;</div>');
		$this.append('<div />');
		$this.append('<div />');
		$this.append('<div />');

		


		 if($("#edit-link").length > 0) { 
				$this.append('<div><a href="http://www2.warwick.ac.uk' + settings.slidesUrl + '">Edit</a></div>');
				$this.children().eq(5).css({
						'background-color' : 'rgba(0,0,0,0.6)',
						'display' : 'block',
						'color' : '#ffffff',
						'position' : 'absolute',
						'top' : 5,
						'left' : settings.containerWidth - 30,
						'z-index' : '20',
						'padding' : '2px',
						'font-size' : '12px',
						'line-height' : '12px',
						'font-weight' : 'normal'
		    		});
		    }



		$this.children().eq(2).css({
						'z-index' : '10',
						'position' : 'absolute',
						'color' : '#ffffff',
						'background-color' : 'rgba(0,0,0,0.7)'
		});


		$this.children().slice(0,2).css({
						'background' : settings.controlBackground,
						'z-index' : '10',
						'position' : 'absolute',
						'font-weight' : 'bold',
						'text-align' : 'center',
						'cursor' : 'pointer',
						'color' : settings.controlColor,
						
						
		});


		$this.children().slice(0,2).addClass("no-select");

		if(settings.htmlData == '') {
			methods['grabSlides'].apply(this);
		} else {
			methods['grabHtml'].apply(this);
		}
						
		
    },


    grabSlides : function() {

		$this = $(this);
		$methodObj = this;
		var $tags = '';
		
		if(settings.jsonTags != ""){

			$tags = "&tag=" + settings.jsonTags.replace(' ', '&tag=');

		}

		$.get('/sitebuilder2/api/dataentry/entries.json?page='+ settings.slidesUrl + '&sort=date' + $tags, function(listOfItems) { 

			var slides = new Array();
			var sourceUrl  = listOfItems.id;
			var noOfImg = listOfItems.items.length;
			var classNo = new Array();
			
			$.each(listOfItems.items, function(i, val) {
if (window.console && 'function' === typeof window.console.log) {
	//console.log($this.children());
}

				slides[i] = $(val.content.replace(/src=\"/g,'src=\"' + sourceUrl));
				$this.children().eq(3).append($("img",slides[i]).css({'width' : settings.containerWidth, 'position' : 'absolute' , 'left' : Math.min(i,2) * settings.containerWidth}));
				$this.children().eq(2).append('<div style="display: none; margin: 10px; line-height: normal;" ><h4>' + val.title + '</h4>' + 
									val.content.replace(/(<p>|<\/p>|<img.*?>)/g,"") + '<a href="'+ val.url.href +'">more &raquo;</a></div>');
				classNo[i] = i;
			});

		$this.children().eq(2).children().eq(1).css('display' , 'block');


		$this.data('classNot',classNo);

		methods['resize'].apply($methodObj);	
		methods['moveSlides'].apply($methodObj);	

		});

		

    },
	
	
    grabHtml : function() {

		$this = $(this);
		$methodObj = this;
		var classNo = new Array();

		$.each(settings.htmlData, function(i, val) {
		
			$this.children().eq(3).append($(val).css({'position' : 'absolute' , 'left' : Math.min(i,2) * settings.containerWidth}));
			classNo[i] = i;
		
		});
		

		if(classNo.length == 1) { 
				$this.children().eq(3).children().css({'position' : 'absolute' , 'left' : settings.containerWidth}); 
				$this.children().slice(0,2).css({ 'display' : 'none'});
		} else if(classNo.length == 2) { 
				$this.children().eq(3).append($(settings.htmlData[0]).css({'position' : 'absolute' , 'left' : 2 * settings.containerWidth}));
				$this.children().eq(3).append($(settings.htmlData[1]).css({'position' : 'absolute' , 'left' : 2 * settings.containerWidth}));
				classNo[2] = 2;
				classNo[3] = 3;
		}


		$this.data('classNot',classNo);

		$this.children().eq(3).children().width(settings.containerWidth).height(settings.containerHeight);
		$this.children().eq(5).css('display' , 'none' );
		methods['resize'].apply($methodObj);
		methods['moveSlides'].apply($methodObj);	
			
	

    },
  
    resize : function() { 	

		$this = $(this);

		//Grab settings and calculate placements
		var captionWidth = settings.captionWidth;
		var captionHeight = settings.captionHeight;
		var captionX =  settings.captionX;
		var captionY =  settings.captionY;
		var containerWidth = settings.containerWidth;

		 
		var controlFont = Math.floor((settings.controlHeight / 100) * settings.containerHeight);
		var paddingCorrection = Math.floor(controlFont / 6);

		
		$this.children().eq(2).css({ 'top' : captionY , 'left' : captionX, 'width' : captionWidth , 'height' : captionHeight });
		$this.children().slice(0,2).css({ 'font-size' : controlFont , 'line-height' : 'normal', 'padding' : '0px 2px ' + paddingCorrection + 'px 2px' });


		var controlHeight = $(this).children().eq(1).height() + paddingCorrection;
		var controlY = Math.floor(settings.containerHeight / 2) - (controlHeight / 2) - paddingCorrection;
		var controlRightX = containerWidth - $(this).children().eq(1).width() - 4;

		$this.children().slice(0,2).css({ 'top' : controlY })
		$this.children().eq(1).css({ 'left' : controlRightX });

		var sliderWidth = 3 * containerWidth;

		$this.children().eq(3).css({ 'position' : 'absolute', 'left' : -containerWidth , 'width' : sliderWidth, 'height' : settings.containerHeight });

		
    },


    moveSlides : function() {

		$this = $(this);

		$this.children().eq(0).click(slideLeft);
		$this.children().eq(1).on('click.' + $this.attr("id"), slideRight);

		
		var longSlide = $this.width() * 2;
		var shortSlide = $this.width();
		var timerSlide;

		setSlideTimer($this.children().eq(1));		
		

		if(settings.controlHover == 'true'){

			$this.children().slice(0,2).css({ 'display' : 'none' });

			$this.hover(function() { 
				$this.children().slice(0,2).stop().fadeIn();	
        		}, function() {
            			$this.children().slice(0,2).hide();
	        	});
		}

		function slideRight () {

			var classNo = new Array();

			var $outerDiv
			if($(this)[0].nodeName) { 
				$outerDiv = $(this).parent();
				
			} else {
				$outerDiv = $this;
			}
			//var $outerDiv = $(this).parent();

			$outerDiv.children().eq(0).unbind('click');
			$outerDiv.children().eq(1).unbind('click');

			classNo = $outerDiv.data('classNot');
			$imageSlide = $outerDiv.children().eq(3).children();
			$captionSlide = $outerDiv.children().eq(2).children();
			
			var endSlide = classNo.length - 1;

			clearTimeout(timerSlide);
			
			$imageSlide.eq(classNo[0]).css( 'display' , 'none' );
			$imageSlide.eq(classNo[0]).css( { left : longSlide } );

			$imageSlide.eq(classNo[1]).animate({ left : 0 },500,'easeOutExpo');
			$imageSlide.eq(classNo[2]).animate({ left : shortSlide },500,'easeOutExpo');
			
			$captionSlide.eq(classNo[1]).fadeOut(function() {
				$captionSlide.eq(classNo[2]).fadeIn();
			});

			$imageSlide.promise().done( function () {
				$captionSlide.promise().done( function () {

					$imageSlide.eq(classNo[0]).css( 'display' , 'block' );
					classNo.push(classNo.shift());
					$outerDiv.children().eq(0).click(slideLeft);
					$outerDiv.children().eq(1).on('click.' + $outerDiv.attr("id"), slideRight);
					setSlideTimer();
				});

			});


		}


		function slideLeft () {

			var classNo = new Array();

			var $outerDiv; 

			if($(this)[0].nodeName) { 
				$outerDiv = $(this).parent();
				
			} else {
				$outerDiv = $this;
			}

			
			classNo = $outerDiv.data('classNot');
			$imageSlide = $outerDiv.children().eq(3).children();
			$captionSlide = $outerDiv.children().eq(2).children();

			

			$outerDiv.children().eq(0).unbind('click');
			$outerDiv.children().eq(1).unbind('click' );

			var endSlide = classNo.length - 1;	

			clearTimeout(timerSlide);

			$imageSlide.eq(classNo[endSlide]).css( 'display' , 'none' );
			$imageSlide.eq(classNo[endSlide]).css( { left : 0 } );
			

			$imageSlide.eq(classNo[0]).animate({ left : shortSlide },500,'easeOutExpo');
			$imageSlide.eq(classNo[1]).animate({ left : longSlide },500,'easeOutExpo');
			
			$captionSlide.eq(classNo[1]).fadeOut(function() {
				$captionSlide.eq(classNo[0]).fadeIn();
			});

			$imageSlide.promise().done( function () {
				$captionSlide.promise().done( function () {

					$imageSlide.eq(classNo[endSlide]).css( 'display' , 'block' );
					classNo.unshift(classNo.pop());
					$outerDiv.children().eq(0).click(slideLeft);
					$outerDiv.children().eq(1).on('click.' + $outerDiv.attr("id"), slideRight);
					setSlideTimer();
				});

			});


		}

		

		function setSlideTimer () {
			if(settings.slideTimer > 0) {
				timerSlide = setTimeout(slideRight,6000);
			}
		}
	


    }

  };

  $.fn.ecSlideItems = function( method ) {  


     // Create some defaults, extending them with any options that were provided
     settings = {
	'slidesUrl'         : '',
	'jsonTags'	    : 'active',
	'containerWidth'    : 610,
	'containerHeight'   : 320,
	'noOfItems' : 1,
	'captionX' : 10,
	'captionY' : 230,
	'captionWidth'    : 590,
	'captionHeight'   : 80,
	'controlHeight' : 23,
	'slideTimer' : 6000,
	'controlHover' : 'true',
	'controlBackground' : 'rgba(0,0,0,0.7)',
	'controlColor' : '#ffffff',
	'htmlData' : ''
    };

    if ( typeof method === 'object' ) {
	settings = $.extend(settings, method);
    }


	
   
    //Maintain chainability
    return this.each(function() {   

    
    //Method call handling, no args runs init.
    if ( methods[method] ) {
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
    }   

    }); 

  };

})( jQuery );