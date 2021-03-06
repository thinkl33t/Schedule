$(document).ready(function() {
    $(".fave").submit(function(event_handle){
        $.ajax({
            type: "POST",
            url: event_handle.target.action,
            data: $(event_handle.target).serialize()+'&json=true',
            success: function(data)
            {
                if (data.favourite)
                {
                    $('#fave'+data.event_id)[0].action = '/events/'+data.event_id+'/unfavourite';
                    $('#fave'+data.event_id).find('input[type=image]')[0].src = '/static/star_full.png';
                }
                else
                {
                    $('#fave'+data.event_id)[0].action = '/events/'+data.event_id+'/favourite';
                    $('#fave'+data.event_id).find('input[type=image]')[0].src = '/static/star_empty.png';
                }
            }
        });
        return false;
    });
});