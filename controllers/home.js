/**
 * GET /
 * Home page.
 */


exports.index = (req, res) => {
  res.render('home', {
    title: 'Home'
  });
};

exports.dashboard = (req, res) => {
  res.render('dash', {
    title: 'Dashboard'
  });
};
