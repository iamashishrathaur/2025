import './App.css';
import Comments from './pages/Comments';
import Home from './pages/Home';
import My from './pages/My';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Products from './pages/Products';
import BottomBar from './components/BottomBar';
import NewComment from './pages/NewComment';

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/my',
      element: <My />,
    },
    {
      path: '/comments',
      element: <Comments />,
    },

    {
      path: '/postcomment',
      element: <NewComment/>,
    },
    {
      path: '/products',
      element: <Products />,
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
