(function () {
    $(document).ready(function () {
        $('#e-commerce-products-table').DataTable(
            {
                dom       : 'rt<"dataTables_footer"ip>',
                columnDefs: [
                    {
                        // Target the id column
                        targets: 0,
                        width  : '72px'
                    },
                    {
                        // Target the actions column
                        targets           : 7,
                        responsivePriority: 1,
                        filterable        : false,
                        sortable          : false
                    }
                ],

                columnDefs: [
                    {
                        // Target the id column
                        targets: 0,
                        width  : '72px'
                    },
                    {
                        // Target the actions column
                        targets           : 7,
                        responsivePriority: 1,
                        filterable        : false,
                        sortable          : false
                    }
                ],

                columnDefs    : [
                    {
                        // Target the id column
                        targets: 0,
                        width  : '72px'
                    },
                    {
                        // Target the image column
                        targets   : 1,
                        filterable: false,
                        sortable  : false,
                        width     : '80px'
                    },
                    {
                        // Target the price column
                        targets: 4,
                        render : function (data, type) {
                            if ( type === 'display' )
                            {
                                return '<div class="layout-align-start-start layout-row">' + '<i class="s-4 icon-currency-usd text-muted"></i>' + '<span>' + data + '</span>' + '</div>';
                            }

                            return data;
                        }
                    },
                    {
                        // Target the quantity column
                        targets: 5,
                        render : function (data, type) {
                            if ( type === 'display' )
                            {
                                if ( parseInt(data) <= 5 )
                                {
                                    return '<i class="quantity-indicator icon-circle s-3 text-danger mr-1"></i><span>' + data + '</span>';
                                }
                                else if ( parseInt(data) > 5 && parseInt(data) <= 25 )
                                {
                                    return '<i class="quantity-indicator icon-circle s-3 text-info mr-1"></i><span>' + data + '</span>';
                                }
                                else
                                {
                                    return '<i class="quantity-indicator icon-circle s-3 text-success mr-1"></i><span>' + data + '</span>';
                                }
                            }

                            return data;
                        }
                    },
                    {
                        // Target the status column
                        targets   : 6,
                        filterable: false,
                        render    : function (data, type) {
                            if ( type === 'display' )
                            {
                                if ( data === 'true' )
                                {
                                    return '<i class="icon-checkbox-marked-circle text-success"></i>';
                                }

                                return '<i class="icon-cancel text-danger"></i>';
                            }

                            if ( type === 'filter' )
                            {
                                if ( data )
                                {
                                    return '1';
                                }

                                return '0';
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
                initComplete  : function () {
                    var api = this.api(),
                        searchBox = $('#products-search-input');

                    // Bind an external input as a table wide search box
                    if ( searchBox.length > 0 )
                    {
                        searchBox.on('keyup', function (event) {
                            api.search(event.target.value).draw();
                        });
                    }
                },
                lengthMenu    : [10, 20, 30, 50, 100],
                pageLength    : 10,
                scrollY       : 'auto',
                scrollX       : false,
                responsive    : true,
                autoWidth     : false,
                scrollCollapse: true
            }
        );

    });
})();