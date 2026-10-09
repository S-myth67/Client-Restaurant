export const TIME_SLOTS = [
  '12:30 PM',
  '01:15 PM',
  '02:00 PM',
  '07:00 PM',
  '07:30 PM',
  '08:15 PM',
  '09:00 PM'
]

export const SEATING_AREAS = [
  { value: 'Courtyard Garden', label: 'Courtyard Garden' },
  { value: 'Jaali Private Chamber', label: 'Jaali Private Chamber' },
  { value: 'Grand Heritage Hall', label: 'Grand Heritage Hall' }
]

export const INITIAL_RESERVATION_FORM = {
  name: '',
  phone: '',
  email: '',
  guests: '2 Guests',
  date: '',
  time: '07:30 PM',
  area: 'Courtyard Garden',
  specialNotes: ''
}

export function generateBookingCode() {
  return 'BRN-' + Math.floor(100000 + Math.random() * 900000)
}
