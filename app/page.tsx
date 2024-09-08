'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import { SlashCommands } from './SlashCommands'

export default function Home() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: 'Type "/" for commands',
      }),
    ],
    content: '<h1>Welcome to Your Notion-like Editor</h1><p></p>',
  })

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto p-8">
        <EditorContent editor={editor} className="prose prose-lg focus:outline-none" />
        {editor && <SlashCommands editor={editor} />}
      </div>
    </div>
  )
}
