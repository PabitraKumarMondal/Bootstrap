$(document).ready(function(){
    $("#date").append(new Date().getFullYear());
	if($('#dateOfRelease').length){
		$('#dateOfRelease').datepicker({
			uiLibrary: 'bootstrap4',
			format: 'dd/mm/yyyy'
		});
	}
});
