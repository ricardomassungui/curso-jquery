$(document).ready(function(){
    //descendente
    $("div span").css("background-color", "yellow");
    //Filhos do elemento
    $("li > ul").css("color", "red");
    //Irmãos do elemento
    $("#Item1_1 + li").css("color", "blue");
    $("#Item1_1 ~ li").css("color", "blue");

});