exports.index = function(req, res){
  res.render('index', { username: '%username%' });
};
