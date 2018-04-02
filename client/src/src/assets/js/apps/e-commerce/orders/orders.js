(function ()
{
    $(document).ready(function ()
    {
        $('#e-commerce-orders-table').DataTable(
            {
                dom       : 'rt<"dataTables_footer"ip>',
                columnDefs: [
                    {
                        // Target the id column
                        targets: 0,
                        width  : '72px'
                    },
                    {
                        // Target the price column
                        targets: 3,
                        render : function (data, type)
                        {
                            if ( type === 'display' )
                            {
                                return '<div class="layout-align-start-start layout-row">' + '<i class="s-4 icon-currency-usd text-muted"></i>' + '<span>' + data + '</span>' + '</div>';
                            }

                            return data;
                        }
                    },
                    {
                        // Target the actions column
                        targets           : 7,
                        responsivePriority: 1,
                        filterable        : false,
                        sortable          : false
                    }
                ],

                initComplete: function ()
                {
                    var api = this.api(),
                        searchBox = $('#orders-search-input');

                    // Bind an external input as a table wide search box
                    if ( searchBox.length > 0 )
                    {
                        searchBox.on('keyup', function (event)
                        {
                            api.search(event.target.value).draw();
                        });
                    }
                },
                lengthMenu  : [10, 20, 30, 50, 100],
                pageLength  : 10,
                scrollY     : 'auto',
                scrollX     : false,
                responsive  : true,
                autoWidth   : false
            }
        );

    });
})();