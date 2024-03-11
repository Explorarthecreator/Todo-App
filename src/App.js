import NavBar from './component/NavBar';
import CalendarPages from './pages/CalendarPages';
import { NavbarProvider } from './context/NavContext';
import Tasks from './pages/Tasks';

function App() {
  return (
    <NavbarProvider>
      <div>
        <NavBar/>
        {/* <B/> */}
        <main>
          <CalendarPages/>
          <div>
            <Tasks/>
          </div>
        </main>
      </div>
    </NavbarProvider>
  );
}

export default App;
