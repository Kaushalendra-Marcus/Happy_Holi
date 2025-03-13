import React from 'react';
import Name from './Name';
import footer_holi from '../../assets/footer_holi.png'
const Home = () => {
    return (
        <div className="relative h-screen w-full">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 -z-10"
                style={{
                    backgroundImage: `url(https://static.vecteezy.com/system/resources/previews/037/747/617/non_2x/ai-generated-colorful-paint-splatters-against-transparent-background-free-png.png)`,
                }}
            ></div>
            
            <Name 
            className=''/>
            {/* Cartoon Image */}
            <div
                className="relative h-[100vh] w-[50vw] bg-contain bg-no-repeat mx-auto flex items-end justify-center filter contrast-120 saturate-100"
                style={{
                    backgroundImage: `url(${footer_holi})`,
                    backgroundPosition: "bottom center",
                }}
            >
                <h1 className='text-white font-bold text-7xl text-center py-10 mt-10'>Wishing you a joyful and colorful Holi! 🌈🎨💖</h1>
            </div>
        </div>
    );
}

export default Home;
