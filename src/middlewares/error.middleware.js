const error = (err, _req, res, _next) => {
  console.log('express async error', err);
  const message = err.message || 'Algo deu errado';
  const code = err.code || 500;
  return res.status(code).json({ message });
};

module.exports = error;
