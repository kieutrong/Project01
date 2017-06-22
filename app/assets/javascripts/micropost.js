$(document).ready(function() {
  $("#micropost_picture").bind("change", function() {
    var size_in_megabytes = this.files[0].size/1024/1024;
    if (size_in_megabytes > Settings.micropost.maximum_megabytes) {
      alert(I18n.t(".maximum_file_size_is"));
    }
  });
});