(function ()
{
    $('.chat-list .contact').on('click', function ()
    {
        changeView('#chat-content-views', '#chat-view');
    });

    $('#contacts-button').on('click', function ()
    {
        changeView('#chat-left-sidebar-views', '#contacts-view');
    });

    $('.back-to-chats-button').on('click', function ()
    {
        changeView('#chat-left-sidebar-views', '#chats-view');
    });

    $('#user-avatar-button').on('click', function ()
    {
        changeView('#chat-left-sidebar-views', '#user-view');
    });

    function changeView(wrapper, view)
    {
        var wrapper = $(wrapper);
        wrapper.find('.view').removeClass('d-none d-flex');
        wrapper.find('.view').not(view).addClass('d-none');
        wrapper.find(view).addClass('d-flex');
    }

})();