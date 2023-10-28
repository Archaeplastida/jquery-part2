$("form").on("click", "button", function(){
    if($("#title").val().length >= 2 && $("#rating").val() && +($("#rating").val()) <= 10 && +($("#rating").val()) >= 0){
    $(`<div class='movie'>${$("#title").val()} | <span>${$("#rating").val()}</span>/10</div>`).prepend("<button>X<button").appendTo("#container");
    if($("#sort").val() === "alphaAZ"){
        $("#container").html($("#container div").sort(function(a,b){
            let textA = $(a).text().toUpperCase();
            let textB = $(b).text().toUpperCase();
             return ((textA < textB) ? -1 : (textA > textB) ? 1: 0);
        }))
    } else if($("#sort").val() === "alphaZA"){
        $("#container").html($("#container div").sort(function(b,a){
            let textA = $(a).text().toUpperCase();
            let textB = $(b).text().toUpperCase();
             return ((textA < textB) ? -1 : (textA > textB) ? 1: 0);
        }))
    } else if($("#sort").val() === "top"){
        $("#container").html($("#container div").sort(function(y,x){
            let valX = +($(x).children("span").text());
            let valY = +($(y).children("span").text());
            return(valX-valY)
        }))
    } else if($("#sort").val() === "lowest"){
        $("#container").html($("#container div").sort(function(x,y){
            let valX = +($(x).children("span").text());
            let valY = +($(y).children("span").text());
            return(valX-valY)
        }))
    }
    console.log($("#title").val());
    console.log($("#rating").val());
}
});

$("#container").on("click", "button", function(){
    $(this).parent().remove();
});


$("#sort").on("change", function(){
    console.log($(this).val())
    if($(this).val() === "alphaAZ"){
        $("#container").html( $("#container div").sort(function(a,b){
            let textA = $(a).text().toUpperCase();
            let textB = $(b).text().toUpperCase();
             return ((textA < textB) ? -1 : (textA > textB) ? 1: 0);
        }))
    } else if($(this).val() === "alphaZA"){
        $("#container").html($("#container div").sort(function(b,a){
            let textA = $(a).text().toUpperCase();
            let textB = $(b).text().toUpperCase();
             return ((textA < textB) ? -1 : (textA > textB) ? 1: 0);
        }))
    } else if($(this).val() === "top"){
        $("#container").html($("#container div").sort(function(y,x){
            let valX = +($(x).children("span").text());
            let valY = +($(y).children("span").text());
            return(valX-valY);
        }))
    } else if($(this).val() === "lowest"){
        $("#container").html($("#container div").sort(function(x,y){
            let valX = +($(x).children("span").text());
            let valY = +($(y).children("span").text());
            return(valX-valY);
        }))
    }
});