import mongoose from 'mongoose'
import { GalaxiesSchema } from "../models/Galaxy";
import { PlanetSchema } from "../models/Planet";
import { StarSchema } from "../models/Star";
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Galaxies = mongoose.model('Galaxy', GalaxiesSchema)
  Planets = mongoose.model('Planet', PlanetSchema)
  Stars = mongoose.model('Star', StarSchema)
}

export const dbContext = new DbContext()
