// Controller for handling requests
exports.home = function(req, res) {
    res.send('Welcome to the home page');
  };
  
  exports.about = function(req, res) {
    res.send('This is the about page');
  };
  
  exports.contact = function(req, res) {
    res.send('Contact us at example@example.com');
  };
  