import React from 'react'
import Typewriter from "typewriter-effect";

export default function TypeWriter() {
  return (
    <div>
        <h1 className="text-2xl mb-10 text-center text-green-800 dark:text-indigo-500">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("این صفحه میتواند توسعه پیدا کند")
              .pauseFor(1500)
              .deleteAll()
              .typeString(" مصطفی مصدق - برنامه نویس فرانت اند...")
              .pauseFor(1500)
              .start();
          }}
          options={{
            autoStart: true,
            loop: true,
          }}
        />
      </h1>   
    </div>
  )
}
