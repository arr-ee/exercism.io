(function($){
  $.fn.sendWithShortcut = function(callback){
    this.each(function(){
      $('.js-shortcut').on('keydown', function(event){
        if (event.metaKey && event.keyCode == 13) {
          callback(event);
        }
      });
    })

    return this;
  }
}(jQuery));

$('.js-shortcut').sendWithShortcut(function(event){
  var form = $(event.currentTarget);
  form.submit();
});
