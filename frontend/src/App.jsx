import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Import all pages
import Portfolio from './pages/Portfolio';
import Introduction from './pages/Introduction';
import VmVsContainer from './pages/VmVsContainer';
import DockerArchitecture from './pages/DockerArchitecture';
import Images from './pages/Images';
import DockerLayering from './pages/DockerLayering';
import Containers from './pages/Containers';
import LogsAndDebugging from './pages/LogsAndDebugging';
import Volumes from './pages/Volumes';
import Networks from './pages/Networks';
import ManagementCommands from './pages/ManagementCommands';
import DockerSystem from './pages/DockerSystem';
import Dockerfile from './pages/Dockerfile';
import DockerCompose from './pages/DockerCompose';
import DockerComposeCommands from './pages/DockerComposeCommands';
import InstallMac from './pages/InstallMac';
import InstallLinux from './pages/InstallLinux';
import InstallWindows from './pages/InstallWindows';
import DockerNodeJS from './pages/DockerNodeJS';
import DockerReactJS from './pages/DockerReactJS';
import DockerHub from './pages/DockerHub';
import DockerLogin from './pages/DockerLogin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Portfolio />} />
          <Route path="docker">
            <Route index element={<Introduction />} />
            <Route path="vm-vs-container" element={<VmVsContainer />} />
            <Route path="architecture" element={<DockerArchitecture />} />
            <Route path="images" element={<Images />} />
            <Route path="layering" element={<DockerLayering />} />
            <Route path="containers" element={<Containers />} />
            <Route path="logs-debugging" element={<LogsAndDebugging />} />
            <Route path="volumes" element={<Volumes />} />
            <Route path="networks" element={<Networks />} />
            <Route path="management" element={<ManagementCommands />} />
            <Route path="system-management" element={<DockerSystem />} />
            <Route path="dockerfile" element={<Dockerfile />} />
            <Route path="docker-compose" element={<DockerCompose />} />
            <Route path="compose-commands" element={<DockerComposeCommands />} />
            <Route path="install-mac" element={<InstallMac />} />
            <Route path="install-linux" element={<InstallLinux />} />
            <Route path="install-windows" element={<InstallWindows />} />
            <Route path="hub" element={<DockerHub />} />
            <Route path="login" element={<DockerLogin />} />
            <Route path="nodejs" element={<DockerNodeJS />} />
            <Route path="reactjs" element={<DockerReactJS />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
