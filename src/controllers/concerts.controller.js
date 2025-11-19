import * as concertService from "../services/concerts.service.js";

export const getAllConcerts = async (req, res, next) => {
  try {
    const concerts = await concertService.getConcerts();
    res.json(concerts);
  } catch (error) {
    next(error);
  }
};

export const getConcert = async (req, res, next) => {
  try {
    const concert = await concertService.getConcertById(req.params.id);
    if (!concert) {
      return res.status(404).json({ message: "Concierto no encontrado" });
    }
    res.json(concert);
  } catch (error) {
    next(error);
  }
};

export const createConcert = async (req, res, next) => {
  try {
    const concert = await concertService.createConcert(req.body);
    res.status(201).json(concert);
  } catch (error) {
    next(error);
  }
};

export const updateConcert = async (req, res, next) => {
  try {
    const concert = await concertService.updateConcert(req.params.id, req.body);
    if (!concert) {
      return res.status(404).json({ message: "Concierto no encontrado" });
    }
    res.json(concert);
  } catch (error) {
    next(error);
  }
};

export const deleteConcert = async (req, res, next) => {
  try {
    const concert = await concertService.deleteConcert(req.params.id);
    if (!concert) {
      return res.status(404).json({ message: "Concierto no encontrado" });
    }
    res.json({ message: "Concierto eliminado" });
  } catch (error) {
    next(error);
  }
};
