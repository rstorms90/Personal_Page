$(document).ready(function(){

    let arr = ["https://images.unsplash.com/photo-1534043464124-3be32fe000c9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=25fb0992bdb86b7fbef53ead58c7b7cd&auto=format&fit=crop&w=950&q=80", "https://images.unsplash.com/photo-1534162967756-a412cc66c624?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=69dd3295b9d2406824447c5cd74bc032&auto=format&fit=crop&w=1957&q=80"]

    $("#button").click(function() {
        $("img").fadeOut(function() {
            let randomGif = Math.random(Math.floor()*arr.length);
            for (let i = 0; i < arr.length; i++) {
                $(this).attr('src', arr[i]).fadeIn();
            }
        });
    });

});