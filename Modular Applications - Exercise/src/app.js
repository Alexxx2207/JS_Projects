import page from '../node_modules/page/page.mjs';
import { authenticateUser } from './middlewares/authMiddleware.js';
import { renderLayout } from './middlewares/renderLayout.js';
import { homeView } from './views/home.js';
import { loginView } from './views/loginView.js';
import { logoutView } from './views/logoutView.js';
import { registerView } from './views/registerView.js';
import { browseTeamsView } from './views/browseTeamsView.js';
import { createTeamView } from './views/createTeamView.js';
import { getMyTeamsView } from './views/browseMyTeams.js';

page(authenticateUser);
page(renderLayout);
page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutView);
page('/browseTeams', browseTeamsView);
page('/createTeam', createTeamView);
page('/myTeams', getMyTeamsView);

page.start();