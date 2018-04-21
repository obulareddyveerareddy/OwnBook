import express    from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import schema     from './server/data/schema';
import bodyParser from 'body-parser';
import passport   from 'passport';
import cors       from 'cors';
import auth       from './server/oauth/auth';

const app = express();
app.use(express.static('public'))

const port = process.env.PORT || 5000;
auth(passport);
app.use(passport.initialize());
app.use(cors());
app.get('/api/auth/google', passport.authenticate('google', {
  scope: ['https://www.googleapis.com/auth/userinfo.profile']
}));
app.get('/auth/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/'
    }),
    (req, res) => {}
);

app.get('/login/callback', (req, res)=>{
  console.log('~~~~~~~~~~~~~~ Request Recieved from Google ~~~~~~~~~~~~~~~~');
  res.redirect('http://localhost:3000/#/ownaccount/home/budget');
});

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
