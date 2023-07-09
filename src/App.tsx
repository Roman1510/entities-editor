import SidebarMenu from './components/SidebarMenu/SidebarMenu'
import MainArea from './components/MainArea/MainArea'
import Split from 'react-split'

import './App.css'

const App: React.FC = () => {
  return (
    <>
      <Split
        className="app"
        sizes={[25, 75]}
        minSize={100}
        expandToMin={false}
        gutterSize={10}
        gutterAlign="center"
        snapOffset={30}
        dragInterval={1}
        direction="horizontal"
        cursor="col-resize"
      >
        <SidebarMenu />
        <MainArea />
      </Split>
    </>
  )
}

export default App
