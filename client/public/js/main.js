$(document).on('ready', function() {
  console.log('sanity check!');
});

$('form').on("submit",function(e){
e.preventDefault();

var payload = {
  name: $('#name').val(),
  age: $('#age').val(),
  spitter:$('#spitter').val()

};
  console.log(payload);
});
