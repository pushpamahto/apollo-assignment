import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-2xl font-bold text-blue-600">Apollo247</Link>
          <div className="hidden md:flex space-x-6">
            <Link href="#" className="text-gray-600 hover:text-blue-600">Find Doctors</Link>
            <Link href="#" className="text-gray-600 hover:text-blue-600">Lab Tests</Link>
            <Link href="#" className="text-gray-600 hover:text-blue-600">Circle Membership</Link>
            <Link href="#" className="text-gray-600 hover:text-blue-600">Health Records</Link>
            <Link href="#" className="text-gray-600 hover:text-blue-600">Diabetes Reversal</Link>
            <Link href="#" className="text-gray-600 hover:text-blue-600">Buy Insurance</Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md">Login</button>
        </div>
      </div>
    </header>
  );
}