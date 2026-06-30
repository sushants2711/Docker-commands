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
import PortBinding from './pages/PortBinding';
import ManagementCommands from './pages/ManagementCommands';
import DockerSystem from './pages/DockerSystem';
import Dockerfile from './pages/Dockerfile';
import DockerCompose from './pages/DockerCompose';
import DockerComposeCommands from './pages/DockerComposeCommands';
import EnvVariables from './pages/EnvVariables';
import Dockerignore from './pages/Dockerignore';
import MultiStageBuilds from './pages/MultiStageBuilds';
import Cheatsheet from './pages/Cheatsheet';
import InstallMac from './pages/InstallMac';
import InstallLinux from './pages/InstallLinux';
import InstallWindows from './pages/InstallWindows';
import DockerNodeJS from './pages/DockerNodeJS';
import DockerReactJS from './pages/DockerReactJS';
import DockerHub from './pages/DockerHub';
import DockerLogin from './pages/DockerLogin';
import ComingSoon from './pages/ComingSoon';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Portfolio />} />
          <Route path="sushant" element={<Portfolio />} />
          
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
            <Route path="port-binding" element={<PortBinding />} />
            <Route path="management" element={<ManagementCommands />} />
            <Route path="system-management" element={<DockerSystem />} />
            <Route path="dockerfile" element={<Dockerfile />} />
            <Route path="multi-stage" element={<MultiStageBuilds />} />
            <Route path="docker-compose" element={<DockerCompose />} />
            <Route path="compose-commands" element={<DockerComposeCommands />} />
            <Route path="env-variables" element={<EnvVariables />} />
            <Route path="dockerignore" element={<Dockerignore />} />
            <Route path="install-mac" element={<InstallMac />} />
            <Route path="install-linux" element={<InstallLinux />} />
            <Route path="install-windows" element={<InstallWindows />} />
            <Route path="cheatsheet" element={<Cheatsheet />} />
            <Route path="hub" element={<DockerHub />} />
            <Route path="login" element={<DockerLogin />} />
            <Route path="nodejs" element={<DockerNodeJS />} />
            <Route path="reactjs" element={<DockerReactJS />} />
          </Route>

          <Route path="aws">
            <Route index element={<ComingSoon topic="AWS" />} />
            <Route path="*" element={<ComingSoon topic="AWS" />} />
          </Route>
          <Route path="nginx">
            <Route index element={<ComingSoon topic="Nginx" />} />
            <Route path="*" element={<ComingSoon topic="Nginx" />} />
          </Route>
          <Route path="kubernetes">
            <Route index element={<ComingSoon topic="Kubernetes" />} />
            <Route path="*" element={<ComingSoon topic="Kubernetes" />} />
          </Route>
          <Route path="github-actions">
            <Route index element={<ComingSoon topic="GitHub Actions" />} />
            <Route path="*" element={<ComingSoon topic="GitHub Actions" />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
