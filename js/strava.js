// courtesy of http://stackoverflow.com/a/6274381/648350
function shuffle(o) { //v1.0
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};
// courtesy of http://stackoverflow.com/a/6700/648350
Object.size = function(obj) {
    var size = 0,
        key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

$(document).ready(function() {
    var jsonData = "../strava/strava.json";
    $.getJSON(jsonData)
        .done(function(data) {
            var numberOfResults = Object.size(data.members);
            data.members = shuffle(data.members);
            $.each(data.members, function(i, item) {
                $('<div class="col-md-2 col-sm-4 team-member col-centered"><a href="' + item.strava_link + '"><img src="' + item.profile_pic + '" class="chart"><h4>' + item.first_name + '<br>' + item.last_name + '</h4></a></div>').appendTo('.strava-team')

                if (i === numberOfResults - 1) {
                    return false;
                }
            });
        });
});
