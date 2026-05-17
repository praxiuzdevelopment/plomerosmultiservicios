import { handler } from './dist/server/entry.mjs';
import { createServer } from 'http';

const server = createServer(handler);
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
