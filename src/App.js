import Header from "./Componentes/Header/Header";
import FormsTasks from "./Componentes/Forms/FormsTasks";
import { QueryClient, QueryClientProvider } from 'react-query';
import ChuckNorrisJokes from "./Componentes/Chuck/Jokes";
import Footer from "./Componentes/Footer/Footer";
import './App.css'

const App = () => {
  const queryClient = new QueryClient();
  return ( 
  <>
  <Header/>
  <FormsTasks/>
  <QueryClientProvider client={queryClient}>
  <ChuckNorrisJokes/>
  </QueryClientProvider>
  <Footer/>
  </>
  );
}
 
export default App;