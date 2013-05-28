$(document).ready(function(){
    $(document).bind('deviceready', function(){
        //Phonegap ready
        onDeviceReady();
    });

    var output = $('#output');

    $.ajax({
        url: 'http://lifeafterracing.ustrotting.com/landmarks.cfm',
        dataType: 'jsonp',
        jsonp: 'jsoncallback',
        timeout: 5000,
        success: function(data, status){
            $.each(data, function(i,item){ 
				var landmark = '<h1>'+item.name+'</h1>'
				+ '<p>'+item.latitude+'<br>'
				+ item.longitude+'</p>';

				output.append(landmark);
			});
        },
        error: function(d, s, e){
           output.text(d.toString()+' '+s.toString()+' '+e.toString());
        }
    });
});