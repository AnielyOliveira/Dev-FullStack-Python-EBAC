$(document).ready(function () {
    $("#telefone").mask("(00) 00000-0000", {
	placeholder: '(00) 00000-0000'
    });

    const anoAtual = new Date().getFullYear();
    $("#year").text(anoAtual);
});
