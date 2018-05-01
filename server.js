import express    from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import schema     from './server/schema';
import bodyParser from 'body-parser';
import session    from 'express-session';
import passport   from 'passport';
import cors       from 'cors';
import uuid       from 'node-uuid';
import auth       from './server/oauth/auth';
import path       from 'path';
import config     from './webpack.config';
import webpack    from 'webpack';

const compiler = webpack(config);
const app = express();
app.use(express.static('client'));

app.use(session({
  genid: function(req) {
    return uuid.v4();
  },
  secret: "V33ra@5322",
  cookie: { maxAge: 60000 }
 }));

const port = process.env.PORT || 8080;
auth(passport);
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.get('/api/auth/google', passport.authenticate('google', {
  scope:['https://www.googleapis.com/auth/userinfo.profile',
         'https://www.googleapis.com/auth/userinfo.email']
}));
app.get('/api/auth/google/callback',
    passport.authenticate('google', {failureRedirect:'/'}),
    (req, res) => {
        res.redirect('http://own-book-obulareddyveerareddy.c9users.io/#/ownaccount/home/budget');
    }
);
app.get('/api/auth/google/profile', (req, res)=>{
  res.send(req.session.passport.user);
});

app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname + '/client/public/index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
