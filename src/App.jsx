import Orb from './components/Orb.jsx'
import DragDrop from './components/DragDrop.jsx'

function App() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div
        className='-z-1'
        style={{ width: '100%', height: '800px', position: 'absolute' }}
      >
        <Orb hoverIntensity={0.5} rotateOnHover={true} hue={0} />
      </div>

      <div className='z-1 flex flex-col items-center justify-center gap-y-24'>
        <h1 className='text-7xl font-bold text-neutral-100'>
          Drag and Drop Test
        </h1>

        <DragDrop />
      </div>
    </div>
  )
}

export default App
