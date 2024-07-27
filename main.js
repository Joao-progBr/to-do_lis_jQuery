$(document).ready(function(){
   
    $("form").on("submit", function(e){
        e.preventDefault()

        const inputTarefa = $("#tarefa").val()
        const novaTarefa = $("<li></li>").text(inputTarefa)
        
        $(novaTarefa).appendTo("ul")
        $("#tarefa").val("")
    })

    $("ul").on("click", "li", function(){
        $(this).toggleClass("completed")
    })

    $("button[type='reset']").on("click", function(){
        $("ul").empty();
    });

})