import { Tools } from '@/types'
import { ToolItem } from './ToolItem'
import { useStore } from '@/store'

export const Tool = () => {
  const currentTool = useStore(s => s.settings.tool)
  const setTool = useStore(s => s.setTool)

  return (
    <div className='bg-333 flex flex-wrap grid-content-start'>
      <div className='h-50px f-center flex-basis-100%'>TOOLS</div>
      {Object.values(Tools).map(tool => (
        <ToolItem
          key={tool}
          kit={tool}
          selected={currentTool === tool}
          onClick={() => {
            setTool(tool)
          }}
        />
      ))}
    </div>
  )
}
