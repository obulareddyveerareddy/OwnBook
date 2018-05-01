import express    from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import schema     from './server/schema';
import bodyParser from 'body-parser';
import session    from 'express-session';
import passport   from 'passport';
import cors       from 'cors';
import uuid       from 'node-uuid';
import auth       from './server/oauth/auth';

const app = express();
app.use(express.static('public'));

app.use(session({
  genid: function(req) {
    return uuid.v4();
  },
  secret: "V33ra@5322",
  cookie: { maxAge: 60000 }
 }));

const port = process.env.PORT || 5000;
auth(passport);
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());


app.get('/api/auth/google', passport.authenticate('google', {
  scope:['https://www.googleapis.com/auth/userinfo.profile',
         'https://www.googleapis.com/auth/userinfo.email']
}));


app.get('/api/auth/google/callback',
    passport.authenticate('google', {failureRedirect:'/'}),
    (req, res) => {
        res.redirect('http://localhost:3000/#/ownaccount/home/budget');
    }
);

app.get('/api/auth/google/profile', (req, res)=>{
  res.send(req.session.passport.user);
});

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(port, () => console.log(`Listening on port ${port}`));
