import { Switch, Route} from 'react-router-dom';

import { Layout } from '../Layout';
import { Header } from '../Header';
import { NotFound} from '../NotFound';
import { Profile } from '../Profile';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Layout} />
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/chat/:chatId" component={Layout}/>
            <Route component={NotFound}/>
        </Switch>
    )
}

export {Router};