$(document).ready(function () {
    const tasksList = [];

    $('form').on('submit', function (e) {
        e.preventDefault();

        let newTask = $('#task').val(); // pega o valor do input

        // verificação para caso o input estiver vazio
        if (newTask !== '') {
            if (!tasksList.includes(newTask)) {
                let addTask = $('<li></li>').text(newTask);
                $('ul').append(addTask);

                tasksList.push(newTask);
            } else {
                alert(`A tarefa ${newTask} já está em sua lista. Insira uma tarefa diferente!`);
            }
        } else {
            alert('Insira uma tarefa!');
        }

        // Deixa o input vazio após a inserção do valor
        $('#task').val('');
    })

    // task completed
    $('ul').on('click', 'li', function () {
        $(this).toggleClass('toDo-completed');
    });

    // Modo dark
    $('#toggle-bk').click(function () {
        $('.toggle-bk').toggleClass('dark');

        if ($('.toggle-bk').hasClass('dark')) {
            $('.toggle-btn').animate({ left: '60px' });
            $('body').css('background-color', 'black');
            $('body').css('color', 'white');
        } else {
            $('.toggle-btn').animate({ left: '0px' });
            $('body').css('background-color', 'white');
            $('body').css('color', 'black');
        }
    });
});