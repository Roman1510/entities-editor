import SidebarMenu from '@/components/SidebarMenu/SidebarMenu'
import MainArea from '@/components/MainArea/MainArea'
import Split from 'react-split'

const MainLayout: React.FC = () => {
  return (
    <>
      <Split
        className="app"
        sizes={[30, 70]}
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

export default MainLayout
