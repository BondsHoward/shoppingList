$(document).ready(function() {
 $('#add-button').click(function() {






    var new_task = $('#add-toDo').val();
   $('#list').append('<li class="done"><input type="checkbox">'+new_task+'</li>');

     return false;
 });




$('#add-button').click(function(){
   $('#add-toDo').val('');    
});




 /*Clears all items on list*/
$(document).on("click", "#clear-list", function(){
    $("#list").empty();
    submissions = 0;
});
 
    $("#clear-items").on("click",function(){
        $('input:checked').each(function() {
    $(this).closest('li').remove();
});
  });

});



