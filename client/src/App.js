import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client'
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import Project from './components/pages/Project';
import Welcome from './components/pages/Welcome';
import Navbar from './components/components/Navbar';
import Footer from './components/components/Footer';
import ProjectsView from './components/pages/ProjectsView';
import ClientsView from './components/pages/ClientsView';
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
const  App = () => {
  return (
    <>
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
      {/* <Header /> */}
      <div className="container">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/projectsview' element={<ProjectsView />} />
        <Route path='/clientview' element={<ClientsView />} />
        <Route path='/projects/:id' element={<Project />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
    </Router>
    </ApolloProvider>
        <Footer />
    </>
  );
}

export default App;
