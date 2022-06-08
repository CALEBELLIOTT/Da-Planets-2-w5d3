import { starsService } from "../services/StarsService";
import BaseController from "../utils/BaseController";


export class StarsController extends BaseController {
  constructor() {
    super('api/stars')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .get('/:id/planets', this.getPlanets)
      .post('', this.create)
  }


  async getAll(req, res, next) {
    try {
      let stars = await starsService.getAll(req.query)
      res.send(stars)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      let star = await starsService.getById(req.params.id)
      res.send(star)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      let star = await starsService.create(req.body)
      res.send(star)
    } catch (error) {
      next(error)
    }
  }

  async getPlanets(req, res, next) {
    try {
      let planets = await starsService.getPlanets(req.params.id)
      res.send(planets)
    } catch (error) {
      next(error)
    }
  }
}