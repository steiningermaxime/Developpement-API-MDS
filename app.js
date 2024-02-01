
import express from 'express';
import hotelRoutes from './routes/hotelRoutes.js';
import clientRoutes from './routes/clientRoutes.js'

const app = express();
const port = 3000;

app.use(express.json());

app.use('/hotel', hotelRoutes);
app.use('/hotel', clientRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
