import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    return (
        <header className="bg-indigo-700 text-white p-4 sticky top-0 z-10 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Image src="/trainer-client.jpg" width={40} height={40} alt="Logo" className="rounded-full" />
                    <span className="font-bold text-lg">Juju Training Camp</span>
                </div>
                <nav>
                    <ul className="flex space-x-4">
                        <li><Link href="/" className="hover:text-indigo-200">Home</Link></li>
                        <li><Link href="/about" className="hover:text-indigo-200">About</Link></li>
                        <li><Link href="/services" className="hover:text-indigo-200">Services</Link></li>
                        <li><Link href="/contact" className="hover:text-indigo-200">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;