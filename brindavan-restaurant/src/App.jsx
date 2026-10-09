import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HeroDishShowcase from './components/HeroDishShowcase'
import SignatureDishes from './components/SignatureDishes'
import EditorialHighlight from './components/EditorialHighlight'
import StorySection from './components/StorySection'
import AmbienceSection from './components/AmbienceSection'
import ReservationSection from './components/ReservationSection'
import ReservationModal from './components/ReservationModal'
import DishDetailModal from './components/DishDetailModal'
import Footer from './components/Footer'
import { Calendar } from 'lucide-react'
import './App.css'

function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false)
  const [selectedDish, setSelectedDish] = useState(null)
  const [toastMessage, setToastMessage] = useState(null)

  const handleOpenReservation = () => {
    setIsReservationOpen(true)
  }

  const handleCloseReservation = () => {
    setIsReservationOpen(false)
  }

  const handleSelectDishForModal = (dish) => {
    setSelectedDish(dish)
  }

  const handleCloseDishModal = () => {
    setSelectedDish(null)
  }

  const handleReserveForDish = () => {
    setIsReservationOpen(true)
  }

  const handleBookingSuccess = (booking) => {
    setToastMessage(`Table reserved for ${booking.name}! Reference: ${booking.bookingCode}`)
    setTimeout(() => {
      setToastMessage(null)
    }, 6000)
  }

  return (
    <div className="brindavan-app">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="app-toast-alert" role="alert">
          <span>{toastMessage}</span>
          <button onClick={() => setToastMessage(null)} className="toast-dismiss-btn">
            ✕
          </button>
        </div>
      )}

      {/* Navigation */}
      <Navbar onOpenReservation={handleOpenReservation} />

      <main id="main-content">
        {/* Hero Viewport */}
        <Hero onOpenReservation={handleOpenReservation} />

        {/* Masterpiece Dish Showcase (Reference 1 adaptation) */}
        <HeroDishShowcase
          onOpenReservation={handleOpenReservation}
          onSelectDishForModal={handleSelectDishForModal}
        />

        {/* Daily Delights & Signature Dishes (Reference 2 cards) */}
        <SignatureDishes onSelectDishForModal={handleSelectDishForModal} />

        {/* Editorial Highlight: Jodhpur Mirchi Pakoras & Services (Reference 2) */}
        <EditorialHighlight onOpenReservation={handleOpenReservation} />

        {/* Restaurant Heritage Story & Craft */}
        <StorySection />

        {/* Courtyard Ambience & Private Dining */}
        <AmbienceSection onOpenReservation={handleOpenReservation} />

        {/* Visit Information & Online Table Booking */}
        <ReservationSection onBookingSuccess={handleBookingSuccess} />
      </main>

      {/* Brand Footer */}
      <Footer onOpenReservation={handleOpenReservation} />

      {/* Floating Action Reservation Pill */}
      <div className="floating-reserve-trigger">
        <button
          onClick={handleOpenReservation}
          className="floating-reserve-btn"
          aria-label="Quick Table Reservation"
        >
          <Calendar size={18} />
          <span>Reserve Table</span>
        </button>
      </div>

      {/* Modals */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={handleCloseReservation}
        onBookingSuccess={handleBookingSuccess}
      />

      <DishDetailModal
        dish={selectedDish}
        onClose={handleCloseDishModal}
        onReserveForDish={handleReserveForDish}
      />
    </div>
  )
}

export default App
