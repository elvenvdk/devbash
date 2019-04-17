const routesErr = (err, req, res, next) => {
  console.log(err);
  res.json(err);
  next();
};

module.exports = routesErr;
