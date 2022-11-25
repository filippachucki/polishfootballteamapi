import express from 'express';
import bodyParser from 'body-parser';

import footballersRoutes from './routes/footballers.js';

const app = express();
const PORT = 8003;

app.use(bodyParser.json());

app.use('/footballers', footballersRoutes);

app.get('/', (req, res) => res.send('hello homeaa'));

app.listen(PORT, () => console.log(`Server Running on port http://localhost:${PORT}`));



