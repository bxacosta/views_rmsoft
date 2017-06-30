/***************************** Parametros lightbox *******************************/
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
	event.preventDefault();
	$(this).ekkoLightbox();
});
/***************************** Parametros DataTable *******************************/
$(document).ready(function() {
	$('#tabla-habitacion').DataTable({
		"scrollX": true,
		"language": {
			"search": "Buscar:",
			"lengthMenu": "Mostrar _MENU_ resultados por pagina",
			"zeroRecords": "No se encontraron coincidencias",
			"info": "Mostrando pagina _PAGE_ de _PAGES_",
			"infoEmpty": "No existen datos para mostrar",
			"paginate": {
				"first":      "Primero",
				"last":       "Ultimo",
				"next":       "Siguiente",
				"previous":   "Anterior"
			},
			"infoFiltered": "(filtered from _MAX_ total records)"
		}
	});
});