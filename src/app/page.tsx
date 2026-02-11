import Link from 'next/link';

export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 text-center">
      <h1 className="text-6xl font-bold mb-8">Trials and Triumphs</h1>
      <p className="text-xl mb-12 max-w-2xl">
        Enter the realm of fantasy. Form your team, select your heroes, and prepare for the trials ahead.
      </p>
      <Link 
        href="/register" 
        className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
      >
        Begin Registration
      </Link>
    </main>
  );
}
