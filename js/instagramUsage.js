var feed = new Instafeed({
        get: 'user',
        userID: '3224119369',
        clientId: '8bd7879d6ad34ffbb60c8dc1e1706dd2',
        target: 'instafeed',
        sortBy: 'most-recent',
        limit: '7',
        resolution: 'standard_resolution',
        template: '<a href="{{link}}"><img src="{{image}}" /><span class="icon"><i class="fa fa-instagram" aria-hidden="true"></i></span><p><span class="likes"><i class="fa fa-heart" aria-hidden="true"></i>{{likes}}</span><span class="comments"><i class="fa fa-comment" aria-hidden="true"></i>{{comments}}</span></p></a>'
    });
    feed.run();