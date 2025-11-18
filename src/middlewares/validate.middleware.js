export const validateConcertData = (req, res, next) => {
  const { title, artist, date, venue, price, image, description } = req.body;

  if (!title || !artist || !date || !venue || !price || !image || !description) {
    return res.status(400).json({
      success: false,
      message: "Todos los campos del concierto son obligatorios"
    });
  }

  next();
};

export const validateFavoriteData = (req, res, next) => {
  const { concertId } = req.body;

  if (!concertId) {
    return res.status(400).json({
      success: false,
      message: "El campo concertId es obligatorio"
    });
  }

  next();
};
