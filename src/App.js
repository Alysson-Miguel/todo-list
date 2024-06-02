import Header from "./Componentes/Header";
import FormsTasks from "./Componentes/FormsTasks";
import { QueryClient, QueryClientProvider } from 'react-query';
import ChuckNorrisJokes from "./Chuck/Jokes";
import Footer from "./Componentes/Footer";
import './App.css'
import { Container } from "react-bootstrap";

const App = () => {
  const queryClient = new QueryClient();
  return ( 
  <>
  <Container className="Conteudo">
  <QueryClientProvider client={queryClient}>  {/* é preciso envolver toda minha aplicação com essa tag */}
  <Header/>
  <FormsTasks/>
  <ChuckNorrisJokes/>
  </QueryClientProvider>
  <Footer/>
  </Container>
  
  </> 
  );
}
 
export default App;