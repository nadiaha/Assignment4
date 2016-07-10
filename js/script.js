$(document).ready(start);

	function start() {
		$(".readmore").click(showMore);
		$(".readless.hide").click(showLess);
		$(".learnmore").click(learnMore);
		$("a").click(preventLinkReload);
	}

	function preventLinkReload(e) {
		e.preventDefault();
	}

	function showMore() {
		$("#show-this-on-click").slideDown("slow");
		$(".readmore").hide();
		$(".readless").show();
	}

	function showLess() {
		$("#show-this-on-click").slideUp("slow");
		$(".readmore").show();
		$(".readless").hide();
	}

	function learnMore() {
		$("#learnmoretext").slideDown("slow");
		$(".learnmore").hide();
		$(".learnmore").show();
	}
	
 

