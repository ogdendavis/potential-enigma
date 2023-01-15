import * as express from 'express';
import * as cors from 'cors';

// Set up Express app and middleware
const app = express();
app.use(cors());

// Only one endpoint for now - get a picture of Cedric!
app.get('/', (req, res) => {
  return res.status(200).send('You got it!')
})

export default app;
