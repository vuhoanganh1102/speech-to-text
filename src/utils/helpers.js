export function formatDate(date) {
  return new Intl.DateTimeFormat('vi-VN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date(date))
}

export function truncate(str, maxLength = 100) {
  if (str.length <= maxLength) return str
  return str.slice(0, maxLength) + '...'
}

export function debounce(fn, delay) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}

export function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
