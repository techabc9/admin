// JavaScript Document
jQuery.fn.swap = function(b) {
	b = jQuery(b)[0];
	var a = this[0];
	var t = a.parentNode.insertBefore(document.createTextNode(''), a);
	b.parentNode.insertBefore(a, b);
	t.parentNode.insertBefore(b, t);
	t.parentNode.removeChild(t);
	return this;
};

var GnbList = (function() {
	var GnbList = {};
	var gnb;
	var gnb_list;
	var gnb_reset;

	GnbList.initDrag = function() {
		gnb = $("#u_gnb_list");
		gnb_list = $("#u_gnb_list li");
		gnb_reset = $("#u_gnb_list").html();

		$("#u_gnb_list li a").click(function(event) {
			return false;
		});

		gnb_list.draggable({
			revert : true,
			helper : "clone",
			addClasses : false,
			opacity : 0.7
			//containment : ".u_gnb_area"
		});

		gnb_list.droppable({
			accept : "#u_gnb_list li",
			addClasses : false,
			//activeClass: "ui-state-hover",
			hoverClass : "over",
			drop : function(event, ui) {
				var draggable = ui.draggable, droppable = $(this);
				draggable.swap(droppable);
				gnb_list.removeAttr("class");
			}
		});
	};

	GnbList.resetDrag = function() {
		gnb.html(gnb_reset);
		GnbList.initDrag();
	};

	return GnbList;
})(); 