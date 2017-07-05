function form_has_errors(form_element, model, error_messages) {
  $.each(error_messages, function (key, values) {
    var input_element = form_element.find('#' + model + '_' + key);
    $.each(values, function (index, value) {
      input_element.after('<span class="error-class">' +
        '<p>' + key.replace('_', ' ') + ' field ' + value + '</p> ' +
        '</span>');
    });
  });
}
