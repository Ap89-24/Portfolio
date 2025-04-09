import React, { Suspense, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import Fox from '../models/Fox.jsx';
import Loader from '../components/Loader.jsx';
import useAlert from '../hooks/useAlert.jsx';
import Alert from '../components/Alert.jsx';
import SocialLinks from '../components/SocialLinks.jsx';


const Contact = () => {

  const formRef = useRef(null);
  const [form , setForm] = useState({name: '' , email: '' , message:''});
  const [isLoading , setIsLoading] = useState(false);
  const [currentAnimation , setCurrentAnimation] = useState('idle');

  const {alert , showAlert , hideAlert} = useAlert()

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value })
  }

  const handleFocus = () => {setCurrentAnimation('walk')}

  const handleBlur = () => {setCurrentAnimation('idle')}

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('hit');


    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Aman",
        from_email: form.email,
        to_email: 'aman082199@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY 
    ).then(()=> {
      setIsLoading(false)
      showAlert({show: true, text: 'Message sent successfully' , type: 'success'})
      //TODO: Hide an alert

      setTimeout(()=> {
        hideAlert();
        setCurrentAnimation('idle');
        setForm({name: '' , email: '' , message: ''});

      },[3000])

    }).catch((error)=> {
      setIsLoading(false);
      setCurrentAnimation('idle');
      console.log(error)
      showAlert({show: true, text: 'I didnt receive your message' , type: 'danger'})
    })
  }

  return (
   <section className="relative flex lg:flex-row flex-col max-container mt-15 ml-10">
    {alert.show && <Alert {...alert} />}
    <div className="flex-1 min-w-[50%] flex flex-col">
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 drop-shadow-lg tracking-tight relative animate-bounce"
     >
       Get in Touch
      <span className="block h-1 w-100 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 rounded-full mt-2 animate-pulse"></span>
    </motion.h1>
      

      <form className="w-full flex flex-col gap-7 mt-14"
      onSubmit={handleSubmit}
      >

      <label className="text-black-500 font-semibold">
        Name
        <input
        type="text"
        name="name"
        className="w-full px-5 py-3 rounded-lg border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder-gray-400 transition"
        placeholder="Aman"
        required
        value={form.name}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        />
      </label>

      <label className="text-black-500 font-semibold">
        Email
        <input
        type="text"
        name="email"
        className="w-full px-5 py-3 rounded-lg border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder-gray-400 transition"
        placeholder="Aman@gmail.com"
        required
        value={form.email}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        />
      </label>

      <label className="text-black-500 font-semibold">
        Your Message
        <textarea
        name="message"
        rows={4}
        className="w-full px-5 py-3 rounded-lg border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 placeholder-gray-400 transition"
        placeholder="Let me know how I can help you!"
        required
        value={form.message}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        />
      </label>

      <button type="submit"
      className="w-full sm:w-fit bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-10 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-2xl mx-auto"
      disabled={isLoading}
      onFocus={handleFocus}
      onBlur={handleBlur}
      >
        {isLoading ? 'Sending...' : 'Send Message'}
      </button>
       
      </form>
    </div>
    <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
     <Canvas
     camera={{
      position: [0, 0, 5],
      fov: 75,
      near: 0.1,
      far: 1000
     }}
     >
      <directionalLight intensity={2.5} position={[0, 0, 1]} />
      <ambientLight intensity={0.5} />
     <Suspense fallback={<Loader />}>
     <Fox
     currentAnimation={currentAnimation}
     position={[0.5, 0.35, 0]}
     rotation={[12.6, -0.6, 0]}
     scale={[0.5, 0.5, 0.5]}
     />
     </Suspense>
     </Canvas>
    </div>
   </section>
  )
}

export default Contact


