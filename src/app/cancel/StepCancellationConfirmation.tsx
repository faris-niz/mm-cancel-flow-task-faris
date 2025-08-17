import React from 'react';

export default function StepCancellationConfirmation() {
  return (
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
        {/* Main Content */}
        <div className="space-y-6">
          {/* Farewell Message */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold text-gray-900 leading-tight">
              Sorry to see you go, mate.
            </h1>
            
            <p className="text-lg font-medium text-gray-800 leading-relaxed">
              Thanks for being with us, and you're always welcome back.
            </p>
          </div>

          {/* Subscription Details */}
          <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-left">
            <p className="text-sm text-gray-700">
              Your subscription is set to end on <span className="font-medium">XX date</span>.
            </p>
            <p className="text-sm text-gray-700">
              You'll still have full access until then. No further charges after that.
            </p>
          </div>

          {/* Reactivation Notice */}
          <div className="text-left">
            <p className="text-sm text-gray-600">
              <span className="font-medium">Changed your mind?</span> You can reactivate anytime before your end date.
            </p>
          </div>

          {/* Action Button */}
          <div className="pt-4">
            <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-medium py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg">
              Back to Jobs
            </button>
          </div>
        </div>
      </div>
  );
}