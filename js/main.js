$(document).ready(function(){
    $(document).bind('deviceready', function(){
        //Phonegap ready
        onDeviceReady();
    });

    var output = $('#output');

    $.ajax({
        url: 'http://lifeafterracing.ustrotting.com/Employees.cfm',
        dataType: 'jsonp',
        jsonp: 'jsoncallback',
        timeout: 5000,
        success: function(data, status){
            $.each(data, function(i,item){ 
                var name = '<h1>'+item.firstName+' '+item.lastName+'</h1>';
                var title = '<h2>'+item.title+'</h2>';
                
                output.append(name+title);
            });
        },
        error: function(d, s, e){
           output.text(d.toString()+' '+s.toString()+' '+e.toString());
        }
    });
});