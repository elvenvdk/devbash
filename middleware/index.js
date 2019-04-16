const routesErr = (err, req, res, next) => {
  console.log(err);
  res.json(err);
};

module.exports = routesErr;
