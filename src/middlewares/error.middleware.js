const error = (err, _req, res, _next) => {
  console.log('express async error', err);
  const message = err.message || 'Algo deu errado';
  return res.status(500).json({ message });
};

module.exports = error;
