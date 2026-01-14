import { useAuth } from '../context/AuthContext';

export default function Home() {
  const { currentUser, signout } = useAuth();

  return (
    <div className="w-full max-w-2xl bg-white rounded-lg shadow-xl p-8 text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome, {currentUser?.name || 'User'}!</h1>
      <p className="text-gray-600 mb-8">You are now signed in to your account.</p>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8 text-left">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Account Information</h2>
        <div className="space-y-2">
          <p><span className="font-medium">Name:</span> {currentUser?.name || 'N/A'}</p>
          <p><span className="font-medium">Email:</span> {currentUser?.email || 'N/A'}</p>
        </div>
      </div>
      
      <button
        onClick={signout}
        className="w-full max-w-xs bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
      >
        Sign Out
      </button>
    </div>
  );
}
