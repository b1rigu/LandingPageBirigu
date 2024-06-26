import Header from "./components/Header";
import MainSections from "./components/MainSections";
import Sidebar from "./components/Sidebar";
import SidebarContextProvider from "./store/sidebar-context";

export default function App() {
  return (
    <SidebarContextProvider>
      <Sidebar />
      <Header />
      <MainSections />
    </SidebarContextProvider>
  );
}
