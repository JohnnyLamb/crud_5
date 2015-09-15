$(document).on('ready', function() {
  console.log('sanity check!');
});

$('form').on("submit", function(e) {
  e.preventDefault();

  var payload = {
    name: $('#name').val(),
    age: $('#age').val(),
    spitter: spitter
  };
  if ($('#spitter').is(':checked')) {
    payload.spitter = true;
  } else {

    payload.spitter = false;
  }
  $.post('/api/lamas', payload, function(lamas) {
    $('.message-section').show();
    $('#message').html('Added ' + lamas.name + " " + lamas.age + lamas.spitter);
    console.log(lamas);
    getLamas();
  });

});

function getLamas() {
  $('#all-lamas').html('');
  $.get('/api/lamas', function(lama) {
    for(var i = 0; i < lama.length; i++) {
        $('#all-lamas').prepend('<tr>' +
        '<td>' + lama[i].name + '</td>' +
        '<td>' + lama[i].age + '</td>' + lama[i].spitter + '</td>'
         );
        $('form input').val('');
        $('#spitter').removeAttr('checked');
    }
  });
}


