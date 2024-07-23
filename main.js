$(document).ready(function(){
   
    $("form").on("submit", function(e){
        e.preventDefault()

        const inputTarefa = $("#tarefa").val()
        const novaTarefa = $("<li></li>")

        $(inputTarefa).appendTo(novaTarefa)
        $(novaTarefa).appendTo("ul")
        $("#tarefa").val("")

    })
})