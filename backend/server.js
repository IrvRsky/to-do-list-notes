import express from 'express';
import dotenv from 'dotenv';
import db from './config/Db.js';
import router from './routes/index.js';

dotenv.config();

try {
  await db.authenticate();
  console.log('Database Connected..');
} catch (error) {
  console.error(error);
}

const app = express();
const port = process.env.APP_PORT || 3000;

app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
