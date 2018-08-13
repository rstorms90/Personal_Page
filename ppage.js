$(document).ready(function(){

    let arr = ["https://images.unsplash.com/photo-1534043464124-3be32fe000c9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=25fb0992bdb86b7fbef53ead58c7b7cd&auto=format&fit=crop&w=950&q=80",
    "https://images.unsplash.com/photo-1534162967756-a412cc66c624?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=69dd3295b9d2406824447c5cd74bc032&auto=format&fit=crop&w=1957&q=80",
    "https://images.unsplash.com/photo-1534132925167-d479ed128ce5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1676711e236cbe41fd72b292bb91a522&auto=format&fit=crop&w=934&q=80",
    "https://images.unsplash.com/photo-1534106474077-f9e9c6f5a47c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=93e4a52103a10a38beffb1c30bed41ba&auto=format&fit=crop&w=2550&q=80"
    ];
    let i = 0;
    $('#button').click(function() {
        $('img').fadeOut(function() {
                $(this).attr('src', arr[i++]).fadeIn();
                i = i % arr.length;
        });
    });
});