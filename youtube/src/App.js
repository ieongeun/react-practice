import { Outlet } from 'react-router-dom';
import "./index.css";
import SearchHeader from './components/SearchHeader.jsx';
import {
  QueryClientProvider,
  QueryClient
} from '@tanstack/react-query'

const queryClient = new QueryClient();
function App() {
  return (
    <>
    <SearchHeader/>
    <QueryClientProvider client={queryClient}>
      <Outlet/>
    </QueryClientProvider>
    </>
  );
}

export default App;
