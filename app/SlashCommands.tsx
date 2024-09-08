import { Editor } from '@tiptap/react'
import { useState, useEffect, useCallback } from 'react'

export function SlashCommands({ editor }: { editor: Editor }) {
  const [showMenu, setShowMenu] = useState(false)

  const handleSlash = useCallback(() => {
    const { selection } = editor.state
    const lastChar = editor.state.doc.textBetween(selection.from - 1, selection.from)
    setShowMenu(lastChar === '/')
  }, [editor])

  useEffect(() => {
    editor.on('selectionUpdate', handleSlash)
    return () => {
      editor.off('selectionUpdate', handleSlash)
    }
  }, [editor, handleSlash])

  if (!showMenu) return null

  return (
    <div className="absolute bg-white shadow-lg rounded-md p-2 mt-1">
      <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>
        Heading 1
      </button>
      {/* Add more command buttons here */}
    </div>
  )
}