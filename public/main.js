$(document).ready(function(){

    $('#ajax').click(function(){
        $.getJSON('all/export/nausa', function(data){
            var string = JSON.stringify(data);
            $('#show').text('');
            $('#show').text(string);
        });
    });

});