module.exports.getAllProduct = (req, res, next) => {
  res.send({ message: "get product actives" });
};

module.exports.singleProduct = (req, res, next) => {
  const id = req.params;
  res.send({ newId: id }); 
};
