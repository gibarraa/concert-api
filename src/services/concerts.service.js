import { Concert } from "../models/concert.model.js";

export const getConcerts = async () => {
  return await Concert.find();
};

export const getConcertById = async (id) => {
  return await Concert.findById(id);
};

export const createConcert = async (data) => {
  const concert = new Concert(data);
  return await concert.save();
};

export const updateConcert = async (id, data) => {
  return await Concert.findByIdAndUpdate(id, data, { new: true });
};

export const deleteConcert = async (id) => {
  return await Concert.findByIdAndDelete(id);
};
