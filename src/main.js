import { logger } from './application/logging.js';
import { web } from './application/web.js';
import 'dotenv/config';
const port = 3000 || process.env.PORT;

web.listen(port, () => {
  logger.info(`App Start on port ${port}`);
});
