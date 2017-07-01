$(document).ready(function () {
  $.ajaxSetup({
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
  });
});

function form_has_errors(form_element, model, error_messages) {
  var number_errors = 0;
  $.each(error_messages, function (key, values) {
    var input_element = form_element.find('#' + model + '_' + key);
    input_element.closest('.form-group').addClass('has-error');
    $.each(values, function (index, value) {
      number_errors++;
      input_element.after('<span class="help-block error-class">' +
        '<p>' + key.replace('_', ' ') + ' field ' + value + '</p> ' +
        '</span>');
    });
  });
  form_element.find('.form-group').first().before('' +
    '<div class="alert alert-danger fade in alert-dismissable error-class">' +
    ' <a href="#" class="close" data-dismiss="alert" ' +
    'aria-label="close" title="close">×' +
    '</a>you have <strong>' + number_errors + ' errors</strong> </div>');
}

function form_clear_errors() {
  $('.form-group').removeClass('has-error');
  $('.error-class').remove();
}

function method_form(form_element) {
  if ($(form_element).attr('method').length) {
    var method = $(form_element).attr('method');
  } else {
    var method = $(form_element).children('input[name="_method"]').val();
  }
  return method;
}

function page_notice(type, message) {
  toastr[type](message);
}

function page_notice_custom_error() {
  page_notice('error', 'You have somthing error!');
}
function button_loading_style(button_element) {
  button_element.html('<span class='
    + '"glyphicon glyphicon-refresh glyphicon-refresh-animate"'
    + '></span> Loading...');
  button_element.prop('disabled', true);
}
function reset_button(button_element, old_button_element_html) {
  button_element.html(old_button_element_html);
  button_element.prop('disabled', false);
}

// function clear_error() {
//   $('.error-class').html('');
//   $('#post_errors').removeClass('in');
// }

// function clear_input(form) {
//   form.find('#post_context').val('');
//   form.find('#post_title').val('');
// }
toastr.options = {
  "closeButton": true,
  "debug": false,
  "positionClass": "toast-bottom-right",
  "onclick": null,
  "showDuration": "1000",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}
