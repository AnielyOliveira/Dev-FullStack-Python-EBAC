$(document).ready(function () {
    $('header button').click(function () {
        $('form').slideDown();
    })

    $('#btn-cancel').click(function () {
        $('form').slideUp();
    })

    $('form').on('submit', function (e) {
        e.preventDefault();

        const novaImagem = $('#nova-img').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${novaImagem}" />`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <a href="${novaImagem}" title="Ver imagem em tamanho real" target="_blank">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#nova-img').val('');
    })

})