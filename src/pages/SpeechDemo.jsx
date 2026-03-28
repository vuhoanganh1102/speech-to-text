import styled from 'styled-components'
import useSpeechRecognition from '@hooks/useSpeechRecognition'
import useSpeechSynthesis from '@hooks/useSpeechSynthesis'
import Button from '@components/common/Button'
import { useState } from 'react'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`

const Card = styled.div`
  background: ${({ theme }) => theme.colors.bgCard};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.spacing.xl};
`

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const TranscriptBox = styled.div`
  background: rgba(0, 0, 0, 0.2);
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.spacing.md};
  min-height: 120px;
  margin: ${({ theme }) => theme.spacing.md} 0;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textSecondary};
`

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

export default function SpeechDemo() {
  const {
    isListening, transcript, interimTranscript,
    isSupported: recSupported,
    startListening, stopListening, resetTranscript,
  } = useSpeechRecognition({ lang: 'vi-VN' })

  const {
    voices, isSpeaking,
    isSupported: synthSupported,
    speak, stop,
  } = useSpeechSynthesis()

  const [ttsText, setTtsText] = useState(
    'Xin chao! Day la demo chuyen van ban thanh giong noi tieng Viet.'
  )

  const viVoices = voices.filter((v) => v.lang.startsWith('vi'))

  return (
    <>
      <Title>Web Speech API — Tieng Viet</Title>
      <Container>
        {/* Speech Recognition */}
        <Card>
          <h3>Nhan dang giong noi</h3>
          <p style={{ opacity: 0.6, marginBottom: 16 }}>Noi tieng Viet - Van ban</p>

          <div style={{ display: 'flex', gap: 8 }}>
            <Button
              variant={isListening ? 'danger' : 'primary'}
              onClick={isListening ? stopListening : startListening}
              disabled={!recSupported}
            >
              {isListening ? 'Dung' : 'Bat dau noi'}
            </Button>
            <Button variant="secondary" onClick={resetTranscript}>Xoa</Button>
          </div>

          <TranscriptBox>
            {transcript}
            {interimTranscript && (
              <span style={{ color: '#888', fontStyle: 'italic' }}>{interimTranscript}</span>
            )}
            {!transcript && !interimTranscript && (
              <span style={{ fontStyle: 'italic' }}>Ket qua se hien o day...</span>
            )}
          </TranscriptBox>
        </Card>

        {/* Speech Synthesis */}
        <Card>
          <h3>Chuyen van ban - Giong noi</h3>
          <p style={{ opacity: 0.6, marginBottom: 16 }}>
            {viVoices.length} giong Viet kha dung
          </p>

          <TextArea
            value={ttsText}
            onChange={(e) => setTtsText(e.target.value)}
            placeholder="Nhap tieng Viet..."
          />

          <div style={{ display: 'flex', gap: 8 }}>
            <Button
              onClick={() =>
                isSpeaking
                  ? stop()
                  : speak({
                      text: ttsText,
                      voice: viVoices[0] || null,
                      lang: 'vi-VN',
                    })
              }
              disabled={!synthSupported || !ttsText.trim()}
            >
              {isSpeaking ? 'Dung' : 'Phat am'}
            </Button>
          </div>
        </Card>
      </Container>
    </>
  )
}
