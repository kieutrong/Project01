$(document).ready(function() {
  $('body').on('click', '.delete_micropost', function(e){
    e.preventDefault();
    var params = $(this).serialize();
    var self = $(this);
    $.ajax({
    type: 'DELETE',
    url: self.attr('href'),
    data: params,
    dataType: 'json',
    success: function(response) {
      if(response.status == 'success'){
        self.closest('.microposts > .micropost_all').hide();
      }
    },
    error:function (xhr, ajaxOptions, thrownError){
        console.log('error...', xhr);
    },
    complete: function(){
    }
  });
    return false;
  });
});
