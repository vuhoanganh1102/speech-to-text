# 🚀 React Project Setup Guide — Vite + Styled Components

> Full-stack ready React project với cấu trúc thư mục chuẩn, tích hợp React Router, Redux Toolkit, Axios, Custom Hooks, Web Speech API, và Styled Components.

---

## 1. Khởi tạo Project

```bash
# Tạo project với Vite
npm create vite@latest my-app -- --template react

# Di chuyển vào project
cd my-app

# Cài dependencies chính
npm install

# Cài thêm các package cần thiết
npm install react-router-dom @reduxjs/toolkit react-redux axios styled-components
```

---

## 2. Cấu trúc thư mục

```
my-app/
├── public/
│   └── favicon.svg
│
├── src/
│   ├── api/                    # Axios instance & API services
│   │   ├── axiosClient.js
│   │   └── services/
│   │       ├── authService.js
│   │       └── userService.js
│   │
│   ├── app/                    # Redux store config
│   │   └── store.js
│   │
│   ├── assets/                 # Ảnh, fonts, icons tĩnh
│   │   ├── images/
│   │   ├── fonts/
│   │   └── icons/
│   │
│   ├── components/             # Shared / Reusable components
│   │   ├── common/             # Button, Input, Modal, Spinner...
│   │   │   ├── Button.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── Modal.jsx
│   │   │   └── Spinner.jsx
│   │   ├── layout/             # Header, Footer, Sidebar...
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Layout.jsx
│   │   └── speech/             # Web Speech API components
│   │       ├── SpeechRecognition.jsx
│   │       └── SpeechSynthesis.jsx
│   │
│   ├── features/               # Redux slices (feature-based)
│   │   ├── auth/
│   │   │   └── authSlice.js
│   │   └── speech/
│   │       └── speechSlice.js
│   │
│   ├── hooks/                  # Custom hooks
│   │   ├── useDebounce.js
│   │   ├── useLocalStorage.js
│   │   ├── useSpeechRecognition.js
│   │   └── useSpeechSynthesis.js
│   │
│   ├── pages/                  # Route-level pages
│   │   ├── Home.jsx
│   │   ├── SpeechDemo.jsx
│   │   └── NotFound.jsx
│   │
│   ├── router/                 # React Router config
│   │   └── AppRouter.jsx
│   │
│   ├── styles/                 # Global styles & theme
│   │   ├── GlobalStyles.js
│   │   └── theme.js
│   │
│   ├── utils/                  # Helper functions
│   │   ├── constants.js
│   │   └── helpers.js
│   │
│   ├── App.jsx                 # Root component
│   └── main.jsx                # Entry point
│
├── .env                        # Environment variables
├── .env.example                # Env template
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 3. Boilerplate Code — Từng file chi tiết

### 3.1 `vite.config.js`

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@api': path.resolve(__dirname, './src/api'),
      '@features': path.resolve(__dirname, './src/features'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
})
```

---

### 3.2 `src/main.jsx` — Entry Point

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import App from './App'
import { store } from './app/store'
import { theme } from './styles/theme'
import GlobalStyles from './styles/GlobalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
```

---

### 3.3 `src/App.jsx`

```jsx
import Layout from '@components/layout/Layout'
import AppRouter from './router/AppRouter'

function App() {
  return (
    <Layout>
      <AppRouter />
    </Layout>
  )
}

export default App
```

---

### 3.4 `src/styles/theme.js` — Theme Config

```js
export const theme = {
  colors: {
    primary: '#6C5CE7',
    primaryLight: '#A29BFE',
    secondary: '#00CEC9',
    accent: '#FD79A8',
    success: '#00B894',
    warning: '#FDCB6E',
    danger: '#E17055',

    bg: '#0F0E17',
    bgSecondary: '#1A1A2E',
    bgCard: '#16213E',

    text: '#FFFFFE',
    textSecondary: '#A7A9BE',
    textMuted: '#5F6C7B',

    border: 'rgba(255, 255, 255, 0.08)',
    borderLight: 'rgba(255, 255, 255, 0.15)',
  },

  fonts: {
    body: "'Be Vietnam Pro', -apple-system, sans-serif",
    heading: "'Be Vietnam Pro', -apple-system, sans-serif",
    mono: "'JetBrains Mono', monospace",
  },

  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '2rem',
    '4xl': '2.5rem',
  },

  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '64px',
  },

  radii: {
    sm: '6px',
    md: '10px',
    lg: '16px',
    xl: '24px',
    full: '9999px',
  },

  shadows: {
    sm: '0 2px 8px rgba(0, 0, 0, 0.15)',
    md: '0 4px 20px rgba(0, 0, 0, 0.2)',
    lg: '0 8px 40px rgba(0, 0, 0, 0.3)',
    glow: (color) => `0 4px 20px ${color}40`,
  },

  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },

  transitions: {
    fast: '0.15s ease',
    normal: '0.25s ease',
    slow: '0.4s ease',
  },
}
```

---

### 3.5 `src/styles/GlobalStyles.js`

```js
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600;700&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    font-family: inherit;
  }

  input, textarea, select {
    font-family: inherit;
    outline: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  ::selection {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }

  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.bgSecondary};
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.textMuted};
    border-radius: 4px;
  }
`

export default GlobalStyles
```

---

### 3.6 `src/app/store.js` — Redux Store

```js
import { configureStore } from '@reduxjs/toolkit'
import authReducer from '@features/auth/authSlice'
import speechReducer from '@features/speech/speechSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    speech: speechReducer,
  },
  devTools: import.meta.env.DEV,
})
```

---

### 3.7 `src/features/auth/authSlice.js` — Auth Slice mẫu

```js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from '@api/services/authService'

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await authService.login(credentials)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Login failed')
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null
      state.token = null
    },
    clearError: (state) => {
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload.user
        state.token = action.payload.token
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export const { logout, clearError } = authSlice.actions
export default authSlice.reducer
```

---

### 3.8 `src/features/speech/speechSlice.js` — Speech Slice

```js
import { createSlice } from '@reduxjs/toolkit'

const speechSlice = createSlice({
  name: 'speech',
  initialState: {
    transcript: '',
    isListening: false,
    isSpeaking: false,
    selectedVoice: null,
    rate: 1,
    pitch: 1,
    language: 'vi-VN',
  },
  reducers: {
    setTranscript: (state, action) => {
      state.transcript = action.payload
    },
    appendTranscript: (state, action) => {
      state.transcript += action.payload
    },
    clearTranscript: (state) => {
      state.transcript = ''
    },
    setIsListening: (state, action) => {
      state.isListening = action.payload
    },
    setIsSpeaking: (state, action) => {
      state.isSpeaking = action.payload
    },
    setSelectedVoice: (state, action) => {
      state.selectedVoice = action.payload
    },
    setRate: (state, action) => {
      state.rate = action.payload
    },
    setPitch: (state, action) => {
      state.pitch = action.payload
    },
    setLanguage: (state, action) => {
      state.language = action.payload
    },
  },
})

export const {
  setTranscript,
  appendTranscript,
  clearTranscript,
  setIsListening,
  setIsSpeaking,
  setSelectedVoice,
  setRate,
  setPitch,
  setLanguage,
} = speechSlice.actions

export default speechSlice.reducer
```

---

### 3.9 `src/api/axiosClient.js` — Axios Instance

```js
import axios from 'axios'

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8080/api',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor — gắn token
axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// Response interceptor — xử lý lỗi chung
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error

    if (response?.status === 401) {
      localStorage.removeItem('token')
      window.location.href = '/login'
    }

    if (response?.status === 500) {
      console.error('Server error:', response.data)
    }

    return Promise.reject(error)
  }
)

export default axiosClient
```

---

### 3.10 `src/api/services/authService.js`

```js
import axiosClient from '@api/axiosClient'

const authService = {
  login: (credentials) => axiosClient.post('/auth/login', credentials),
  register: (data) => axiosClient.post('/auth/register', data),
  getProfile: () => axiosClient.get('/auth/profile'),
  refreshToken: () => axiosClient.post('/auth/refresh'),
}

export default authService
```

---

### 3.11 `src/hooks/useSpeechRecognition.js` — Custom Hook

```js
import { useState, useEffect, useRef, useCallback } from 'react'

export default function useSpeechRecognition({ lang = 'vi-VN', continuous = true } = {}) {
  const [isListening, setIsListening] = useState(false)
  const [transcript, setTranscript] = useState('')
  const [interimTranscript, setInterimTranscript] = useState('')
  const [error, setError] = useState(null)
  const [isSupported, setIsSupported] = useState(true)
  const recognitionRef = useRef(null)

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition

    if (!SpeechRecognition) {
      setIsSupported(false)
      return
    }

    const recognition = new SpeechRecognition()
    recognition.lang = lang
    recognition.continuous = continuous
    recognition.interimResults = true
    recognition.maxAlternatives = 1

    recognition.onresult = (event) => {
      let finalText = ''
      let interimText = ''

      for (let i = 0; i < event.results.length; i++) {
        const result = event.results[i]
        if (result.isFinal) {
          finalText += result[0].transcript + ' '
        } else {
          interimText += result[0].transcript
        }
      }

      if (finalText) setTranscript((prev) => prev + finalText)
      setInterimTranscript(interimText)
    }

    recognition.onerror = (event) => {
      setError(event.error)
      setIsListening(false)
    }

    recognition.onend = () => setIsListening(false)

    recognitionRef.current = recognition
  }, [lang, continuous])

  const startListening = useCallback(() => {
    if (!recognitionRef.current) return
    setError(null)
    setInterimTranscript('')
    recognitionRef.current.start()
    setIsListening(true)
  }, [])

  const stopListening = useCallback(() => {
    if (!recognitionRef.current) return
    recognitionRef.current.stop()
    setIsListening(false)
  }, [])

  const resetTranscript = useCallback(() => {
    setTranscript('')
    setInterimTranscript('')
  }, [])

  return {
    isListening,
    transcript,
    interimTranscript,
    error,
    isSupported,
    startListening,
    stopListening,
    resetTranscript,
  }
}
```

---

### 3.12 `src/hooks/useSpeechSynthesis.js` — Custom Hook

```js
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
      // Ưu tiên giọng tiếng Việt lên đầu
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
```

---

### 3.13 `src/hooks/useDebounce.js`

```js
import { useState, useEffect } from 'react'

export default function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay)
    return () => clearTimeout(timer)
  }, [value, delay])

  return debouncedValue
}
```

---

### 3.14 `src/hooks/useLocalStorage.js`

```js
import { useState, useCallback } from 'react'

export default function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch {
      return initialValue
    }
  })

  const setValue = useCallback(
    (value) => {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    },
    [key, storedValue]
  )

  const removeValue = useCallback(() => {
    setStoredValue(initialValue)
    window.localStorage.removeItem(key)
  }, [key, initialValue])

  return [storedValue, setValue, removeValue]
}
```

---

### 3.15 `src/router/AppRouter.jsx`

```jsx
import { Routes, Route } from 'react-router-dom'
import Home from '@pages/Home'
import SpeechDemo from '@pages/SpeechDemo'
import NotFound from '@pages/NotFound'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/speech" element={<SpeechDemo />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
```

---

### 3.16 `src/components/layout/Layout.jsx`

```jsx
import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'

const Main = styled.main`
  min-height: calc(100vh - 140px);
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
`

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}
```

---

### 3.17 `src/components/layout/Header.jsx`

```jsx
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

const Logo = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes['xl']};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`

const NavLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
`

const NavLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  color: ${({ $active, theme }) =>
    $active ? theme.colors.primary : theme.colors.textSecondary};
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`

export default function Header() {
  const { pathname } = useLocation()

  return (
    <Nav>
      <Logo to="/">🗣️ SpeechApp</Logo>
      <NavLinks>
        <NavLink to="/" $active={pathname === '/'}>Trang chủ</NavLink>
        <NavLink to="/speech" $active={pathname === '/speech'}>Speech Demo</NavLink>
      </NavLinks>
    </Nav>
  )
}
```

---

### 3.18 `src/components/common/Button.jsx` — Reusable Button

```jsx
import styled, { css } from 'styled-components'

const variants = {
  primary: css`
    background: linear-gradient(135deg,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.primaryLight});
    color: white;
    &:hover { filter: brightness(1.1); }
  `,
  secondary: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.textSecondary};
    border: 1px solid ${({ theme }) => theme.colors.border};
    &:hover {
      border-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.primary};
    }
  `,
  danger: css`
    background: linear-gradient(135deg, #c0392b, #e74c3c);
    color: white;
    &:hover { filter: brightness(1.1); }
  `,
}

const sizes = {
  sm: css`padding: 8px 16px; font-size: 0.8rem;`,
  md: css`padding: 12px 24px; font-size: 0.9rem;`,
  lg: css`padding: 16px 32px; font-size: 1rem;`,
}

const StyledButton = styled.button`
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.normal};
  display: inline-flex;
  align-items: center;
  gap: 8px;

  ${({ $variant }) => variants[$variant] || variants.primary}
  ${({ $size }) => sizes[$size] || sizes.md}

  &:active { transform: scale(0.97); }
  &:disabled { opacity: 0.5; cursor: not-allowed; }
`

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  ...props
}) {
  return (
    <StyledButton $variant={variant} $size={size} {...props}>
      {children}
    </StyledButton>
  )
}
```

---

### 3.19 `src/pages/SpeechDemo.jsx` — Trang demo Speech

```jsx
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
    'Xin chào! Đây là demo chuyển văn bản thành giọng nói tiếng Việt.'
  )

  const viVoices = voices.filter((v) => v.lang.startsWith('vi'))

  return (
    <>
      <Title>🗣️ Web Speech API — Tiếng Việt</Title>
      <Container>
        {/* Speech Recognition */}
        <Card>
          <h3>🎙️ Nhận dạng giọng nói</h3>
          <p style={{ opacity: 0.6, marginBottom: 16 }}>Nói tiếng Việt → Văn bản</p>

          <div style={{ display: 'flex', gap: 8 }}>
            <Button
              variant={isListening ? 'danger' : 'primary'}
              onClick={isListening ? stopListening : startListening}
              disabled={!recSupported}
            >
              {isListening ? '⏹ Dừng' : '🎤 Bắt đầu nói'}
            </Button>
            <Button variant="secondary" onClick={resetTranscript}>🗑️ Xoá</Button>
          </div>

          <TranscriptBox>
            {transcript}
            {interimTranscript && (
              <span style={{ color: '#888', fontStyle: 'italic' }}>{interimTranscript}</span>
            )}
            {!transcript && !interimTranscript && (
              <span style={{ fontStyle: 'italic' }}>Kết quả sẽ hiện ở đây...</span>
            )}
          </TranscriptBox>
        </Card>

        {/* Speech Synthesis */}
        <Card>
          <h3>🔊 Chuyển văn bản → Giọng nói</h3>
          <p style={{ opacity: 0.6, marginBottom: 16 }}>
            {viVoices.length} giọng Việt khả dụng
          </p>

          <TextArea
            value={ttsText}
            onChange={(e) => setTtsText(e.target.value)}
            placeholder="Nhập tiếng Việt..."
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
              {isSpeaking ? '⏹ Dừng' : '▶️ Phát âm'}
            </Button>
          </div>
        </Card>
      </Container>
    </>
  )
}
```

---

### 3.20 `.env` & `.env.example`

```bash
# .env.example
VITE_API_URL=http://localhost:8080/api
VITE_APP_NAME=SpeechApp
```

---

## 4. Chạy Project

```bash
# Dev mode
npm run dev

# Build production
npm run build

# Preview build
npm run preview
```

---

## 5. Cài thêm (tuỳ chọn)

```bash
# ESLint + Prettier
npm install -D eslint prettier eslint-config-prettier

# Testing
npm install -D vitest @testing-library/react @testing-library/jest-dom

# Icons
npm install react-icons

# Animation
npm install framer-motion
```

---

## 6. Tips quan trọng

| Tip | Chi tiết |
|-----|----------|
| **Path alias** | Dùng `@components/Button` thay vì `../../../components/Button` |
| **Feature-based Redux** | Mỗi feature 1 slice, đặt trong `features/` |
| **Custom hooks** | Tách logic phức tạp ra hooks riêng, dễ test & reuse |
| **Axios interceptor** | Tự gắn token, tự redirect khi 401 |
| **Theme tokens** | Dùng `theme.colors.primary` thay hardcode màu |
| **Web Speech** | Luôn check `isSupported` trước khi dùng API |
| **Env vars** | Prefix `VITE_` cho biến môi trường trong Vite |

---

> ✅ Project sẵn sàng! Chạy `npm run dev` và bắt đầu code thôi 🚀
