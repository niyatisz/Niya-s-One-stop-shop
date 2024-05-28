import React from 'react'

const PaymentRejected = () => {
  return (
    <section id='forgot-password'>
    <section className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-[#dfa674] rounded-2xl flex max-w-3xl p-5 items-center" style={{ backgroundColor: 'rgb(239, 224, 226)' }}>
        <div className="md:w-1/2 px-8 lg:w-full">
          <h2 className="font-bold text-2xl text-[rgb(56,45,94)] mt-3">Payment rejected</h2>
          <p className="font-medium text-lg text-[rgb(56,45,94)] mt-3">Your payment was rejected. Please try again.</p>
          
        </div>
      </div>
    </section>
  </section>
  )
}

export default PaymentRejected