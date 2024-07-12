import express from 'express';
import { router } from './routes.index';
import { db } from './db-connection';

const app = express();

const initApp = async () => {

  try {
    
    await db.authenticate()
    console.log('Connection to the database has been established successfully.');

    await db.sync({ force: false });
    console.log('All models were synchronized successfully.');

    app.use(express.json());
    
    app.get('/', function(req, res) {
      res.send(' Hello World');
    })
    
    app.use('/', router)
    
    app.listen(3000, function () {
      console.log('App listening on port 3000!');
    });

  }
  catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

initApp();


export default app;
