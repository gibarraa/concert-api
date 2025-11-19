import { Favorite } from "../models/favorite.model.js";
import { Concert } from "../models/concert.model.js";

export const getFavorites = async (userId) => {
  return await Favorite.find({ userId }).populate("concertId");
};

export const addFavorite = async (userId, concertId) => {
  const concertExists = await Concert.findById(concertId);
  if (!concertExists) throw new Error("Concierto no encontrado");

  const existing = await Favorite.findOne({ userId, concertId });
  if (existing) throw new Error("El concierto ya está en favoritos");

  const favorite = new Favorite({ userId, concertId });
  return await favorite.save();
};

export const removeFavorite = async (userId, concertId) => {
  const favorite = await Favorite.findOneAndDelete({ userId, concertId });
  if (!favorite) throw new Error("Favorito no encontrado");
  return favorite;
};
