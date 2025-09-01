import express from 'express';
import cors from 'cors';
import taskRoutes from './routes/taskRoutes';

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use(taskRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);  
});
