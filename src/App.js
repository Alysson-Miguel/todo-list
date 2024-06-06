import Header from "./Componentes/Header/Header";
import FormsTasks from "./Componentes/Forms/FormsTasks";
import { QueryClient, QueryClientProvider } from 'react-query';
import ChuckNorrisJokes from "./Componentes/Chuck/Jokes";
import Footer from "./Componentes/Footer/Footer";
import './App.css'

// import TasksF from "./Componentes/TasksF/TasksF";



const App = () => {
  const queryClient = new QueryClient();
  return ( 
  <>
  {/* <QueryClientProvider client={queryClient}>  
  <Header/>
  <FormsTasks/>
  <ChuckNorrisJokes/>
  <Footer/>
  </QueryClientProvider> */}
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