// http://bootsnipp.com/snippets/featured/dynamic-table-row-creation-and-deletionS


$(document).ready(function() {
  var i = 1;
  $("#add-row").click(function() {
    $('#book' + i).html(
      "<td><input name='title" + i + "' type='text' placeholder='Title...' class='form-control'  /> </td><td><input  name='author" + i + "' type='text' placeholder='Author...'  class='form-control'></td><td><input name='isbn" + i + "' type='text' placeholder='ISBN...'  class='form-control'></td>");

    $('#dynamic-table').append('<tr id="book' + (i + 1) + '"></tr>');
    i++;
  });
  $("#delete-row").click(function() {
    if (i > 1) {
      $("#book" + (i - 1)).html('');
      i--;
    }
    else {
      console.log('What\'s up?');
      $("#book0 input").val('');
    }
  });

});
