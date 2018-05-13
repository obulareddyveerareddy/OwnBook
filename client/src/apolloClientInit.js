import ApolloClient                 from "apollo-boost";
import { InMemoryCache }            from 'apollo-cache-inmemory';
import { HttpLink }                 from 'apollo-link-http';
import gql from "graphql-tag";

const apolloClientRef = new ApolloClient({
    link: new HttpLink({uri: "/graphql"}),
    cache: new InMemoryCache()
});
/**
apolloClientRef.mutate({
    query: gql`
        mutate addNewAccount{
            addNewAccount(displayName:'deepthi.juni', email:'deepthi.juni@gmail.com', googleRefId:'81238719237898172398'){
                displayName
                email
                googleRefId
            }
        }
    `,
    variables: {displayName, email, googleRefId}
}).then((resp)=>{
    console.log('~~~~~~~~~~~~~~~ >>> New Account Created <<< ~~~~~~~~~~~~~~~', resp);
});
*/
export default apolloClientRef;