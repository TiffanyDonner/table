$(document).ready(function() {
    $("tr:odd").addClass("odd");
    $("tr:even").addClass("even");

    /*when table header is clicked , removes selection class from all other table rows and
      adds the selection class to this table headers row only*/
     $("th").click(function(){
     	$("tr").children().removeClass("selection")
    	$(this).siblings().addClass("selection");

  });
});