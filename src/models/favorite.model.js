import mongoose from "mongoose";

const favoriteSchema = new mongoose.Schema({
  userId: { type: Number, required: true },
  concertId: { type: mongoose.Schema.Types.ObjectId, ref: "Concert", required: true }
}, {
  timestamps: true
});

export const Favorite = mongoose.model("Favorite", favoriteSchema);
