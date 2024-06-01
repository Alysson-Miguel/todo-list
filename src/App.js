import Header from "./Componentes/Cabeçalho/Header";
import FormsTasks from "./Componentes/Forms/FormsTasks";
import { QueryClient, QueryClientProvider } from 'react-query';
import ChuckNorrisJokes from "./Chuck/Jokes";
import Footer from "./Componentes/Rodape/Footer";
import './App.css'

const App = () => {
  const queryClient = new QueryClient();
  return ( 
  <>
  <QueryClientProvider client={queryClient}> 
  <Header/>
  <FormsTasks/>
  <ChuckNorrisJokes/>
  <Footer/>
  </QueryClientProvider>
  </> 
  );
}
 
export default App;