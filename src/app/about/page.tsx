import Header from '@/components/Header';

const AboutPage = () => {
    return (
        <div>
            <Header />
            <main className="p-8 max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-4">About Juju Training Camp</h1>
                <p className="text-lg">
                    Juju Training Camp is dedicated to helping you achieve your fitness goals through personalized training programs and expert guidance.
                </p>
            </main>
        </div>
    );
};

export default AboutPage;