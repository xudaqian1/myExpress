import App from "./app"
import Route from './routes/index'
const route = new Route()

const app = new App(
  route.getAllRoutes(),
  8000
)

app.listen()