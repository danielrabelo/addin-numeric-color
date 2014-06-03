/** start addIn numericColor **/
 var numericColor = {
    name: "numericColor",
    label: "numeric Color",
    defaults: {
    	decimal: true,
		textFormat: function(v, st, opt, objectHtml) {		
			var value= v;
	
	    /** Condition for coloring **/	    
            if (value < 500) {
              $(objectHtml).css({'background-color':'red'});
        	  return "<span style='text-align:right;'>"+value+"</span>";  
              
            } else if (value < 1000){
              $(objectHtml).css({'background-color':'blue'});
              return "<span style='text-align:right;'>"+value+"</span>"; 
              
            } else {
              $(objectHtml).css({'background-color':'green'});
              return "<span style='text-align:right;'>"+value+"</span>";                 
            }
		
	}
    },
    init: function(){
      $.fn.dataTableExt.oSort[this.name+'-asc'] = $.fn.dataTableExt.oSort['numeric-asc'];
      $.fn.dataTableExt.oSort[this.name+'-desc'] = $.fn.dataTableExt.oSort['numeric-desc'];
    },
    
    implementation: function(tgt, st, opt){
      var text = opt.textFormat.call(this, st.value, st, opt, tgt);
      $(tgt).empty().append(text);
     
     
    }
    
  };
  Dashboards.registerAddIn("Table", "colType", new AddIn(numericColor));
/** end addIn numericColor **/
