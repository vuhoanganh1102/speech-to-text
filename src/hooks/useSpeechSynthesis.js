import { useState, useEffect, useRef, useCallback } from 'react'

export default function useSpeechSynthesis() {
  const [voices, setVoices] = useState([])
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [isSupported, setIsSupported] = useState(true)
  const synthRef = useRef(null)

  useEffect(() => {
    if (!('speechSynthesis' in window)) {
      setIsSupported(false)
      return
    }

    synthRef.current = window.speechSynthesis

    const loadVoices = () => {
      const allVoices = synthRef.current.getVoices()
      const viVoices = allVoices.filter((v) => v.lang.startsWith('vi'))
      const others = allVoices.filter((v) => !v.lang.startsWith('vi'))
      setVoices([...viVoices, ...others])
    }

    loadVoices()
    if (synthRef.current.onvoiceschanged !== undefined) {
      synthRef.current.onvoiceschanged = loadVoices
    }
  }, [])

  const speak = useCallback(
    ({ text, voice = null, rate = 1, pitch = 1, lang = 'vi-VN' }) => {
      if (!synthRef.current || !text.trim()) return

      synthRef.current.cancel()

      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = lang
      utterance.rate = rate
      utterance.pitch = pitch

      if (voice) utterance.voice = voice

      utterance.onstart = () => setIsSpeaking(true)
      utterance.onend = () => setIsSpeaking(false)
      utterance.onerror = () => setIsSpeaking(false)

      synthRef.current.speak(utterance)
    },
    []
  )

  const stop = useCallback(() => {
    if (synthRef.current) {
      synthRef.current.cancel()
      setIsSpeaking(false)
    }
  }, [])

  return { voices, isSpeaking, isSupported, speak, stop }
}
