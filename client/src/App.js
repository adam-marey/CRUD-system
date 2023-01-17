import Header from "./components/components/Header";
import { ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client'
import Clients from "./components/components/Clients";
import AddClientmodal from "./components/components/AddClientmodal";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});


const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', 
  cache,
})
function App() {
  return (
    <>
    <ApolloProvider client={client}>
    <Header />
    <div className="container">
      <AddClientmodal />
      <Clients />
    </div>
    </ApolloProvider>
    </>
  );
}

export default App;
