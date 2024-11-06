import Header from '@/components/Header';
import Image from 'next/image';

const ServicesPage = () => {
    return (
        <div>
            <Header />
            <main className="p-8 max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-4">Our Services</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-4 rounded shadow">
                        <h2 className="text-2xl font-bold mb-2">Personal Training</h2>
                        <p>Customized one-on-one sessions to help you reach your fitness goals.</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <h2 className="text-2xl font-bold mb-2">Group Classes</h2>
                        <p>Join our energetic group sessions for a fun and effective workout.</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ServicesPage;