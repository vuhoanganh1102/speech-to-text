import { useState } from 'react'
import useSpeechSynthesis from '@hooks/useSpeechSynthesis'
import Button from '@components/common/Button'
import styled from 'styled-components'

const TextArea = styled.textarea`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  color: ${({ theme }) => theme.colors.text};
  font-family: inherit;
  font-size: 1rem;
  resize: vertical;
  min-height: 100px;
  margin-bottom: ${({ theme }) => theme.spacing.md};

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`

export default function SpeechSynthesisComponent({ lang = 'vi-VN' }) {
  const { voices, isSpeaking, isSupported, speak, stop } = useSpeechSynthesis()
  const [text, setText] = useState('')
  const viVoices = voices.filter((v) => v.lang.startsWith('vi'))

  if (!isSupported) return <p>Speech Synthesis not supported in this browser.</p>

  return (
    <div>
      <TextArea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to speak..."
      />
      <Button
        onClick={() =>
          isSpeaking
            ? stop()
            : speak({ text, voice: viVoices[0] || null, lang })
        }
        disabled={!text.trim()}
      >
        {isSpeaking ? 'Stop' : 'Speak'}
      </Button>
    </div>
  )
}
