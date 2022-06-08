import { dbContext } from "../db/DbContext"


class StarsService {
  async getAll(query = {}) {
    let stars = await dbContext.Stars.find(query)
    return stars
  }
  async getById(body) {
    let star = await dbContext.Stars.findById(body)
    return star
  }
  async create(body) {
    let star = await dbContext.Stars.create(body)
    return star
  }





  async getPlanets(id) {
    let planets = await dbContext.Planets.find({ starId: id })
    return planets
  }

}


export const starsService = new StarsService()