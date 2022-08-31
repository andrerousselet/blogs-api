const error = (err, _req, res, _next) => {
  console.log('express async error', err);
  let message = err.message || 'Internal server error';
  let code = err.code || 500;
  if (err.message.includes('foreign key constraint fails')) {
    code = 400;
    message = '"categoryIds" not found';
  }
  return res.status(code).json({ message });
};

module.exports = error;
