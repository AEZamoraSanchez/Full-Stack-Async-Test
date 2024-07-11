import express from 'express';
import { router } from './routes.index';

const app = express();

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.get('/', function(req, res) {
     res.send(' Hello World');
})

app.use('/', router)

export default app;
