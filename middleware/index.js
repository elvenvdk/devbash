const routesErr = (err, req, res, next) => {
  res.status(404).send(err);
};

module.exports = routesErr;
