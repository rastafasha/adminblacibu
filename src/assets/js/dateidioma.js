$(document).ready(function() {
    // debugger;

    $(".form_datetime").datetimepicker({
        isRTL: false,
        format: 'dd.mm.aaaa hh:ii',
        autoclose: true
    });
});



/**
 * Spanish translation for bootstrap-datepicker
 * Bruno Bonamin <bruno.bonamin@gmail.com>
 */
;
(function($) {
    $.fn.datepicker.dates['es'] = {
        days: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
        daysShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
        daysMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
        months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        monthsShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
        today: "Hoy",
        monthsTitle: "Meses",
        clear: "Borrar",
        weekStart: 1,
        format: "dd/mm/yyyy"
    };
}(jQuery));


//common script for every page which has text input and datepickers
$(".datepicker").datepicker({ dateFormat: 'yy-mm-dd' });
$("input[type=text]").attr("autocomplete", "off");
$('input[type=text]:first').focus();

//common script for create user and update user
$("#department").blur(function() {
    var department = $.trim(this.value);
    $("#role").val("");
    $("#role").attr("list", department);
});