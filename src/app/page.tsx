import Header from '@/components/Header';
import Image from 'next/image';

const HomePage = () => {
    return (
        <div>
            <Header />
            <main className="bg-gray-100 min-h-screen">
                <section className="hero bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: `url('/hero-gym.jpg')` }}>
                    <div className="text-center text-white">
                        <h1 className="text-5xl font-bold mb-4">Welcome to Juju Training Camp</h1>
                        <p className="text-xl mb-6">Transform Your Body and Mind</p>
                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">Get Started</button>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default HomePage;