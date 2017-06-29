$(document).ready(function() {
  $("#micropost_picture").bind("change", function() {
    var size_in_megabytes = this.files[0].size/1024/1024;
    if (size_in_megabytes > 5) {
      alert('Maximum file size is 5M');
    }
  });

  // new_comment
  $('.new_comment').submit(function(e){
    e.preventDefault();
    var params = $(this).serialize();
    var self = $(this);
    $.ajax({
    url: self.attr('action'),
    type: 'POST',
    data: params,
    dataType: 'json',
    success: function(response) {
      if(response.status == 'success'){
        $(".microposts > .comments").after(response.html);
        // self.closest('.microposts').find('.comments').after(response.html);
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

// delete_comment
  $('body').on('click', '.delete_comment', function(e){
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
        self.closest('.user_comment').hide();
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

  // new_micropost
  $('.new_micropost').submit(function(e){
    e.preventDefault();
    var content = $('#micropost_content').val();
    var picture = $('#micropost_picture').val();
    $.ajax({
    url: "/microposts",
    type: 'POST',
    data: microposts: {content: content, picture: picture},
    dataType: 'json',
    success: function(response) {
      if(response.status == 'success'){
        $(".microposts > li").html(response.html);
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

  // delete_micropost
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
        self.closest('.microposts > li').hide();
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
