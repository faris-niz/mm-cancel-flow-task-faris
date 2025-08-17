import { useEffect, useState } from "react";

export default function StepFeedback( props: {setStep: any, jobWithMM: string} )  {
  const [feedback, setFeedback] = useState('');
  const maxChars = 25;

  return (
    <div className="flex-1 flex flex-col justify-center px-8 py-12 max-w-md">
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                What's one thing you wish we could've helped you with?
              </h1>
              <p className="text-gray-600 text-sm leading-relaxed">
                We're always looking to improve; your thoughts can help us make Migrate Mate more useful for others.*
              </p>
            </div>

            <div className="space-y-4">
              <div className="relative">
                <textarea
                  value={feedback}
                  onChange={(e) => {
                      setFeedback(e.target.value);
                  }}
                  placeholder="Your feedback..."
                  className="w-full h-24 p-4 border-2 border-gray-200 rounded-lg resize-none focus:outline-none focus:border-blue-500 text-sm placeholder-gray-400"
                />
                <div className="absolute bottom-3 right-3 text-xs text-gray-400">
                  Min {maxChars} characters ({feedback.length}/{maxChars})
                </div>
              </div>

              <button
                disabled={feedback.length < maxChars}
                className={`w-full py-3 px-6 rounded-lg text-sm font-medium transition-all ${
                  feedback.length >= maxChars
                    ? "w-full py-3 px-6 rounded-lg text-white font-medium transition-all bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700"
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
                onClick={() => {
                  props.setStep(props.jobWithMM === 'yes' ? 'StepVisaWithMM' : 'StepVisaWithoutMM')
                }}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
    )
}