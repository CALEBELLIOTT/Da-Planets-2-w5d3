import { planetsService } from "../services/PlanetsService";
import BaseController from "../utils/BaseController";


export class PlanetsController extends BaseController {
  constructor() {
    super('api/planets')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
  }

  async getAll(req, res, next) {
    try {
      let planets = await planetsService.getAll()
      res.send(planets)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      let planet = await planetsService.getById(req.params.id)
      res.send(planet)
    } catch (error) {

    }
  }

  async create(req, res, next) {
    try {
      let planet = await planetsService.create(req.body)
      res.send(planet)
    } catch (error) {
      next(error)
    }
  }
}