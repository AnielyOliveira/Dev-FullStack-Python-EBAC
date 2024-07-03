// O jquery deve ser importado primeiro, caso contrario pode ocorrer um erro

$(document).ready(function () {
  $("#carousel-imagens").slick({
    autoplay: true,
  });

  $(".menu-hamburguer").click(function () {
    $("nav").slideToggle();
  });

  // let contato = document.getElementById('telefone');
  // let mascara = (contato) ? '(00) 00000-0000' : '(00) 0000-0000';
  //   https://igorescobar.github.io/jQuery-Mask-Plugin/
  $("#telefone").mask("(00) 00000-0000", { placeholder: "(00) 12345-1234" });

  //   https://jqueryvalidation.org
  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      telefone: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      mensagem: {
        required: true,
      },
      veiculoInteresse: {
        required: false,
      },
    },
    messages: {
      nome: "Por favor, insira o seu nome",
    },
    submitHandler: function (form) {
      console.log(form);
    },
    invalidHandler: function (evento, validador) {
      let camposIncorretos = validador.numberOfInvalids();
      if (camposIncorretos) {
        alert(`Existem ${camposIncorretos} compos incorretos.`);
      }
    },
  });

  $(".lista-veiculos button").click(function () {
    const destino = $("#contato");

    const nomeVeiculo = $(this).parent().find(`h3`).text();

    $('#veiculo-interesse').val(nomeVeiculo);

    $("html").animate(
      {
        scrollTop: destino.offset().top,
      },
      1000
    );

// fim document.ready
  });
});
