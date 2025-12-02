import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-6">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">You have Lost your way!</h2>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Whether you turn to the right or to the left, your ears will hear a
        voice behind you, saying, “This is the way; walk in it.” 
      </p>
      <p className="text-2xl font-semibold mb-6"> Isaiah 30:21 KJV</p>
      <div className="flex space-x-4">
        <Link href="/" className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition">
            Return Home
        </Link>
        <Link href="/suggestions" className="px-6 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition">
            Make A Suggestion
        </Link>
      </div>
    </div>
  );
}
