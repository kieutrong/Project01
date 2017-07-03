$(document).ready(function () {
  $('#new_user').submit(function (event) {
    event.preventDefault();
    var form = $(this);
    var params = form.serialize();
    var submit_button = form.find('#submit_new_user');

    form_clear_errors();
    var method = method_form(form);
    $.ajax({
      type: method,
      url: form.attr('action'),
      data: params,
      dataType: 'json',
      success: function (response) {
        if (response.status == 'success') {
          // window.location.replace(response.redirect_to);
          // self.closest('.microposts > .micropost_all').hide();
          // self.closest(".new_user ").after(response.html);
          alert(response.html);
        } else {
          page_notice_custom_error()
          form_has_errors(form,'user',response.errors)
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
