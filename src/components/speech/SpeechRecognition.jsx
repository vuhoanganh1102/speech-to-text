import useSpeechRecognition from '@hooks/useSpeechRecognition'
import Button from '@components/common/Button'
import styled from 'styled-components'

const Box = styled.div`
  background: rgba(0, 0, 0, 0.2);
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.spacing.md};
  min-height: 100px;
  margin: ${({ theme }) => theme.spacing.md} 0;
  color: ${({ theme }) => theme.colors.textSecondary};
`

export default function SpeechRecognitionComponent({ lang = 'vi-VN' }) {
  const {
    isListening, transcript, interimTranscript,
    isSupported, startListening, stopListening, resetTranscript,
  } = useSpeechRecognition({ lang })

  if (!isSupported) return <p>Speech Recognition not supported in this browser.</p>

  return (
    <div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <Button
          variant={isListening ? 'danger' : 'primary'}
          onClick={isListening ? stopListening : startListening}
        >
          {isListening ? 'Stop' : 'Start'}
        </Button>
        <Button variant="secondary" onClick={resetTranscript}>Clear</Button>
      </div>
      <Box>
        {transcript}
        {interimTranscript && <span style={{ color: '#888', fontStyle: 'italic' }}>{interimTranscript}</span>}
        {!transcript && !interimTranscript && <span style={{ fontStyle: 'italic' }}>Results will appear here...</span>}
      </Box>
    </div>
  )
}
