import mongoose from 'mongoose'
const Schema = mongoose.Schema


export const GalaxiesSchema = new Schema({
  name: { type: String, required: true, }
}, { timestamps: true, toJSON: { virtuals: true } })

