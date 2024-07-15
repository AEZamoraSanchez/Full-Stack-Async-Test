import express from 'express';
import { router } from './routes.index';
import { db } from './db-connection';
import swaggerUi from 'swagger-ui-express'
import cors from 'cors'

const app = express();

const initApp = async () => {

  const port = process.env.PORT || 3200
  try {
    
    await db.authenticate()
    console.log('Connection to the database has been established successfully.');

    await db.sync({ force: false });
    console.log('All models were synchronized successfully.');

    app.use(express.json());

    app.use(cors({
      origin: process.env.URL_FRONT
    }))
    
    app.get('/', function(req, res) {
      res.send(' Hello there');
    })
    
    app.use('/', router)
    
    app.listen(port, function () {
      console.log(`App listening on port ${port}`);
    });

  }
  catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

initApp();


export default app;
