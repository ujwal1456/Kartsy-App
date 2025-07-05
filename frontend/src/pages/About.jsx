import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} /> 
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} />
        <div className='flex flex-col justify-center gap-6 md;w-2/4 text-gray-600'>
          <p>Kartsy is a clean and modern e-commerce web app built using React and Tailwind CSS. It features product browsing, size selection, and a fully interactive shopping cart. The layout is responsive, making it seamless to use on both mobile and desktop devices. Every component is designed with user experience and performance in mind.</p>
          <p>The goal of Kartsy was to create a fast, simple, and intuitive shopping experience. It includes features like toast notifications, custom payment selection, and real-time cart updates. I focused on writing clean, modular code to keep it scalable for future enhancements. Kartsy reflects my skills in frontend development and user-centered design.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>At Kartsy, our mission is to make online shopping effortless, fast, and enjoyable for everyone. We aim to provide a seamless user experience through clean design, responsive layouts, and intuitive features. By combining simplicity with smart functionality, we strive to deliver a shopping platform that people love to use and trust.</p>
        </div>
      </div>

      <div className='text-3xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm'>
        <div  className='text-gray-700 border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance: </b>
          <p>At Kartsy, we prioritize quality at every step—from the product display to the checkout process. Every feature is tested for reliability, responsiveness, and performance across devices. We ensure a smooth, bug-free experience so users can shop with confidence and convenience.</p>
        </div>

        <div  className='text-gray-700 border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience: </b>
          <p>Kartsy is designed with user convenience at its core. From intuitive navigation to quick checkout, every feature is crafted to make online shopping as smooth and efficient as possible, whether you're on mobile or desktop.</p>
        </div>

        <div  className='text-gray-700 border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Support: </b>
          <p>We believe great service doesn’t end at checkout. Kartsy offers responsive and reliable customer support to ensure every user’s questions, concerns, or issues are addressed promptly and professionally.</p>
        </div>

      </div>

      <div className='mt-20'>
        <NewsletterBox />
      </div>

    </div>
  )
}

export default About
