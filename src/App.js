import NavBar from './component/NavBar';
import CalendarPages from './pages/CalendarPages';
import { NavbarProvider } from './context/NavContext';
import Tasks from './pages/Tasks';
import Greeting from './component/Greeting';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <NavbarProvider>
      <div className=' bg-[#fff] text-[#101828] h-screen overflow-y-scroll px-4 lg:px-0'>
        <NavBar/>
        {/* <B/> */}
        <main className=' lg:w-4/5 lg:m-auto lg:my-6'>
          <Greeting/>
          <div className=' lg:flex lg:flex-row-reverse lg:justify-between lg:mt-10 mb-5'>
            <CalendarPages/>
            <Tasks/>
          </div>
        </main>
      </div>
      <ToastContainer position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={true}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
    </NavbarProvider>
  );
}

export default App;
