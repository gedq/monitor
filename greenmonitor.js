var addTextToMonitor = function(text, options) {
  var monitor = getElementById('greenmonitor');
  var character;
  for(var i = 0; i < text.length(); i++) {
    character = text.charAt(i);
    monitor.innerHTML += character;
  }
