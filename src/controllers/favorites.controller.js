import * as favoritesService from "../services/favorites.service.js";

const USER_ID = 1;

export const getAllFavorites = async (req, res, next) => {
  try {
    const favorites = await favoritesService.getFavorites(USER_ID);
    res.json(favorites);
  } catch (error) {
    next(error);
  }
};

export const addToFavorites = async (req, res, next) => {
  try {
    const { concertId } = req.body;
    const favorite = await favoritesService.addFavorite(USER_ID, concertId);
    res.status(201).json(favorite);
  } catch (error) {
    next(error);
  }
};

export const removeFromFavorites = async (req, res, next) => {
  try {
    const { concertId } = req.params;
    const favorite = await favoritesService.removeFavorite(USER_ID, concertId);
    res.json({ message: "Concierto eliminado de favoritos", favorite });
  } catch (error) {
    next(error);
  }
};
