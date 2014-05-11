(function( $ ) {
    
    var methods = {
      init : function( options ) { 
  
        var settings = $.extend( {
          'points':[
            [0,0],
            [0,300],
            [300,300]
          ]
        }, options);  
        var ctr = 0;

        return this.each(function(i,v) {  
            var width = $(v).width();
            var height = $(v).height();
            
            if ( methods.isCanvasSupported() ) {
              var newslide = $("<canvas width='"+width+"' height='"+height+"'></canvas");
              
              var mycanvas = newslide.get(0).getContext("2d");
              var myimage = $(v).get(0);
              
              mycanvas.beginPath();
              
              mycanvas.moveTo(settings.points[0][0], settings.points[0][1]);
              for ( ctr = 0; ctr < settings.points.length; ctr++ ) {
                mycanvas.lineTo(settings.points[ctr][0], settings.points[ctr][1]);
              }
              
              mycanvas.clip();
              mycanvas.drawImage(myimage,0,0,width,height);
              
              $(v).hide();
              $(v).after(newslide);
            }
            
            if ( methods.isVmlSupported() ) {
              document.namespaces.add('v', 'urn:schemas-microsoft-com:vml', "#default#VML");
              
              var el, fill, points;

              el = document.createElement("v:polyline");

              el.style.position = "absolute";
              el.style.width = width+"px";
              el.style.height = height+"px";
              
              points = "M"+settings.points[0][0]+","+settings.points[0][1];
              for ( ctr = 0; ctr < settings.points.length; ctr++ ) {
                points += " L"+settings.points[ctr][0]+","+settings.points[ctr][1];
              }
              el.points.value = points;
              el.stroked = false;

              fill = document.createElement("v:fill");

              fill.setAttribute("type", "tile");
              fill.setAttribute("aspect", "atleast");
              fill.setAttribute("src", $(v).attr("src"));
              
              el.appendChild(fill);
              $(v).hide();
              $(v).wrap("<span style='display:inline-block;width:"+width+"px; height:"+height+"px'></span>");
              $(v).after(el);

              el.outerHTML = el.outerHTML;
            }
        });   
      },
      isCanvasSupported: function() {
        var elem = document.createElement('canvas');
        return !!(elem.getContext && elem.getContext('2d'));
      },
      isVmlSupported: function() {
        var a = document.body.appendChild(document.createElement('div'));
        a.innerHTML = '<v:shape id="vml_flag1" adj="1" />';
        var b = a.firstChild;
        b.style.behavior = "url(#default#VML)";
        var supportsVml = b ? typeof b.adj === "object": true;
        a.parentNode.removeChild(a);
        return supportsVml;
      }
    };

    $.fn.clipimage = function( method ) {
      // Method calling logic
      if ( methods[method] ) {
        return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
      } else if ( typeof method === 'object' || ! method ) {
        return methods.init.apply( this, arguments );
      } else {
        $.error( 'Method ' +  method + ' does not exist' );
      }    
  
      };

})( jQuery );