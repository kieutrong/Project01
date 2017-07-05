$(document).ready(function () {
  $('#new_user').submit(function (event) {
    event.preventDefault();
    var self = $(this);
    var params = self.serialize();
    $.ajax({
      url: self.attr('action'),
      type: 'POST',
      data: params,
      dataType: 'json',
      success: function (response) {
        if (response.status == 'success') {
          window.location.replace(response.redirect_to);
        } else {
          $('.error-class').remove();
          form_has_errors(self,'user',response.errors);
        }
      },
      error: function (xhr, ajaxOptions, thrownError) {
        console.log('error...', xhr);
      },
      complete: function () {
      }
    });
    return false;
  });
});
