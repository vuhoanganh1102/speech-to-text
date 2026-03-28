export const APP_NAME = import.meta.env.VITE_APP_NAME || 'SpeechApp'
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api'

export const LANGUAGES = [
  { code: 'vi-VN', label: 'Tieng Viet' },
  { code: 'en-US', label: 'English (US)' },
  { code: 'en-GB', label: 'English (UK)' },
  { code: 'ja-JP', label: 'Japanese' },
  { code: 'ko-KR', label: 'Korean' },
  { code: 'zh-CN', label: 'Chinese (Simplified)' },
]

export const DEFAULT_SPEECH_RATE = 1
export const DEFAULT_SPEECH_PITCH = 1
export const DEFAULT_LANGUAGE = 'vi-VN'
