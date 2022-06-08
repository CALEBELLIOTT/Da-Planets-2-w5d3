import { dbContext } from "../db/DbContext"



class PlanetsService {
  async getAll() {
    let planets = await dbContext.Planets.find()
    return planets
  }
  async getById(id) {
    let planet = await dbContext.Planets.findById(id)
    return planet
  }
  async create(body) {
    let planet = await dbContext.Planets.create(body)
    return planet
  }

}

export const planetsService = new PlanetsService()