import NavBar from './component/NavBar';
import CalendarPages from './pages/CalendarPages';
import { NavbarProvider } from './context/NavContext';
import Tasks from './pages/Tasks';
import Greeting from './component/Greeting';

function App() {
  return (
    <NavbarProvider>
      <div className=' bg-[#fff] text-[#101828] h-screen overflow-y-scroll px-4 lg:px-0'>
        <NavBar/>
        {/* <B/> */}
        <main className=' lg:w-4/5 lg:m-auto lg:my-6'>
          <Greeting/>
          <div className=' lg:flex lg:justify-between lg:mt-10'>
            <Tasks/>
            <CalendarPages/>
          </div>
        </main>
      </div>
    </NavbarProvider>
  );
}

export default App;
