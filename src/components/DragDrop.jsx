import { useDragAndDrop } from '@formkit/drag-and-drop/react'

function DragDrop() {
  const [parent, tapes] = useDragAndDrop([
    'Verstappen',
    'Hamilton',
    'Leclerc',
    'Piastri',
    'Alonso',
    'Tsunoda'
  ])

  return (
    <ul ref={parent} className='grid grid-cols-3 grid-rows-2 gap-8'>
      {tapes.map((tape) => (
        <li
          className='saturate-150 text-center text-neutral-100 rounded-lg cursor-grab '
          key={tape}
          onMouseDown={(e) => (e.currentTarget.style.cursor = 'grabbing')}
          onMouseUp={(e) => (e.currentTarget.style.cursor = 'grab')}
          onMouseLeave={(e) => (e.currentTarget.style.cursor = 'grab')}
        >
          <h2 className='text-5xl font-bold italic'>{tape}</h2>
          <img
            src={`/images/${tape.toLocaleLowerCase()}.webp`}
            alt={tape}
            className='size-[200px] object-cover'
          />
        </li>
      ))}
    </ul>
  )
}

export default DragDrop
