import { Vector2D } from '../common/vector2d'

function getRandomIntPoint(max = 100) {
  return parseInt(Math.random() * max)
}

const x0 = getRandomIntPoint()
const y0 = getRandomIntPoint()
const P = new Vector2D(x0, y0)

const x1 = getRandomIntPoint()
const y1 = getRandomIntPoint()
const Q = new Vector2D(x1, y1)

const x2 = getRandomIntPoint()
const y2 = getRandomIntPoint()
const R = new Vector2D(x2, y2)
