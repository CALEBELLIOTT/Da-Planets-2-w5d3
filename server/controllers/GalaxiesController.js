import { galaxiesService } from "../services/GalaxiesService";
import BaseController from "../utils/BaseController";


export class GalaxiesController extends BaseController {
  constructor() {
    super('api/Galaxies')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
  }


  async getAll(req, res, next) {
    try {
      let galaxies = await galaxiesService.getAll()
      res.send(galaxies)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      let galaxy = await galaxiesService.getById(req.params.id)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      let galaxy = await galaxiesService.create(req.body)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

}