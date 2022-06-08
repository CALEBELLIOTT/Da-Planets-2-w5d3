import { dbContext } from "../db/DbContext"
import { logger } from "../utils/Logger"


class GalaxiesService {

  async getAll() {
    let galaxies = await dbContext.Galaxies.find()
    return galaxies
  }
  async getById(id) {
    let galaxy = await dbContext.Galaxies.findById(id)
    return galaxy
  }
  async create(body) {
    let galaxy = await dbContext.Galaxies.create(body)
    return galaxy
  }
}

export const galaxiesService = new GalaxiesService()