import React from 'react'

const Background = () => {
  return (
    <div className="relative h-screen w-full">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 -z-10"
                style={{
                    backgroundImage: `url(https://static.vecteezy.com/system/resources/previews/037/747/617/non_2x/ai-generated-colorful-paint-splatters-against-transparent-background-free-png.png)`,
                }}
            ></div>
            {/* Cartoon Image */}
            
        </div>
  )
}

export default Background
