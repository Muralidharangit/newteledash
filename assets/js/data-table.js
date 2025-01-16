(function($) {
  'use strict';
  $(function() {
    $('#order-listing').DataTable({
      "aLengthMenu": [
        [5, 10, 15, -1],
        [5, 10, 15, "All"]
      ],
      "iDisplayLength": 10,
      "language": {
        search: ""
      }
    });

    $('#order-listing').each(function() {
      var datatable = $(this);

      // SEARCH - Add the placeholder for Search and turn this into in-line form control
      var search_input = datatable.closest('.dataTables_wrapper').find('div[id$=_filter] input');
      search_input.attr('placeholder', 'Search');
      
      // Add custom classes to the search input
      search_input.addClass('bg-darkblue rounded br-white form-focus-control mx-0');

      // Create a d-flex container and add span, search input, and button inside it
      var searchContainer = $('<div class="d-flex align-items-center" style="gap:10px"></div>');
      var searchLabel = $('<span class="mr-2">Search:</span>'); // Create span element with text "Search"
      search_input.wrap(searchContainer);

      // Insert the span before the search input
      search_input.before(searchLabel);

      // Add "Add" button after the search input
      var addButton = $('<a href="./calltracker_addled.html"><button class="btn btn-primary bg-darkblue py-1 rounded-8 br-blue d-flex">Add <i class="mdi mdi-plus"></i>  </button>  </a>');
      search_input.after(addButton);

      // LENGTH - Inline-Form control
      var length_sel = datatable.closest('.dataTables_wrapper').find('div[id$=_length] select');
      length_sel.removeClass('form-control-sm');
    });
  });
})(jQuery);
