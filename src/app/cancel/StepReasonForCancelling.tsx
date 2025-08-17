import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function StepReasonForCancelling(props: { setStep: any }) {
  const [selectedReason, setSelectedReason] = useState('');
  const [feedback, setFeedback] = useState('');
  const router = useRouter();

  return (
    <div className="flex-1 flex flex-col justify-center px-8 py-12 max-w-md">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
            What's the main reason?
          </h1>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Please take a minute to let us know why:
          </p>
        </div>

        {/* Radio button options */}
        <div className="space-y-4">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="radio"
              name="cancellation-reason"
              value="too-expensive"
              checked={selectedReason === 'too-expensive'}
              onChange={(e) => setSelectedReason(e.target.value)}
              className="sr-only"
            />
            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${selectedReason === 'too-expensive'
                ? 'border-black bg-black'
                : 'border-gray-300 group-hover:border-gray-400'
              }`}>
              {selectedReason === 'too-expensive' && (
                <div className="w-2 h-2 rounded-full bg-white"></div>
              )}
            </div>
            <span className="text-gray-700 text-sm">Too expensive</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="radio"
              name="cancellation-reason"
              value="platform-not-helpful"
              checked={selectedReason === 'platform-not-helpful'}
              onChange={(e) => setSelectedReason(e.target.value)}
              className="sr-only"
            />
            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${selectedReason === 'platform-not-helpful'
                ? 'border-black bg-black'
                : 'border-gray-300 group-hover:border-gray-400'
              }`}>
              {selectedReason === 'platform-not-helpful' && (
                <div className="w-2 h-2 rounded-full bg-white"></div>
              )}
            </div>
            <span className="text-gray-700 text-sm">Platform not helpful</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="radio"
              name="cancellation-reason"
              value="not-enough-jobs"
              checked={selectedReason === 'not-enough-jobs'}
              onChange={(e) => setSelectedReason(e.target.value)}
              className="sr-only"
            />
            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${selectedReason === 'not-enough-jobs'
                ? 'border-black bg-black'
                : 'border-gray-300 group-hover:border-gray-400'
              }`}>
              {selectedReason === 'not-enough-jobs' && (
                <div className="w-2 h-2 rounded-full bg-white"></div>
              )}
            </div>
            <span className="text-gray-700 text-sm">Not enough relevant jobs</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="radio"
              name="cancellation-reason"
              value="decided-not-to-move"
              checked={selectedReason === 'decided-not-to-move'}
              onChange={(e) => setSelectedReason(e.target.value)}
              className="sr-only"
            />
            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${selectedReason === 'decided-not-to-move'
                ? 'border-black bg-black'
                : 'border-gray-300 group-hover:border-gray-400'
              }`}>
              {selectedReason === 'decided-not-to-move' && (
                <div className="w-2 h-2 rounded-full bg-white"></div>
              )}
            </div>
            <span className="text-gray-700 text-sm">Decided not to move</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="radio"
              name="cancellation-reason"
              value="other"
              checked={selectedReason === 'other'}
              onChange={(e) => setSelectedReason(e.target.value)}
              className="sr-only"
            />
            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${selectedReason === 'other'
                ? 'border-black bg-black'
                : 'border-gray-300 group-hover:border-gray-400'
              }`}>
              {selectedReason === 'other' && (
                <div className="w-2 h-2 rounded-full bg-white"></div>
              )}
            </div>
            <span className="text-gray-700 text-sm">Other</span>
          </label>
        </div>

        {/* Additional content when a reason is selected */}
        {selectedReason && (
          <div className="space-y-4 animate-in slide-in-from-top duration-300">
            {selectedReason === 'too-expensive' ? (<div>
              <p className="text-gray-700 text-sm mb-2">
                What would be the maximum you are willing to pay?*
              </p>
            </div>)
              : selectedReason === 'platform-not-helpful' ? (<div>
                <p className="text-gray-700 text-sm mb-2">
                  What can we change to make the platform more helpful?*
                </p>
              </div>)
                : selectedReason === 'not-enough-jobs' ? (<div>
                  <p className="text-gray-700 text-sm mb-2">
                    In which way can we make the jobs more relevant?*
                  </p>
                </div>)
                  : selectedReason === 'decided-not-to-move' ? (<div>
                    <p className="text-gray-700 text-sm mb-2">
                      What changed for you to decide to not move?*
                    </p>
                  </div>)
                    : (<div>
                      <p className="text-gray-700 text-sm mb-2">
                        What would have helped you the most?*
                      </p>
                    </div>)
            }

            <div className="relative">
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Your feedback..."
                className="w-full h-24 p-4 border-2 border-gray-200 rounded-lg resize-none focus:outline-none focus:border-blue-500 text-sm placeholder-gray-400"
              />
              <div className="absolute bottom-3 right-3 text-xs text-gray-400">
                Min 25 characters ({feedback.length}/25)
              </div>
            </div>
          </div>
        )}
        <div className="space-y-3 pt-4">
          <button className="w-full py-3 px-6 rounded-lg text-white font-medium transition-all bg-green-500 hover:bg-green-600" onClick={() => router.push("/offer")}>
            Get 50% off | $12.50
          </button>

          <button
                disabled={!selectedReason || feedback.length<25}
                className={`w-full py-3 px-6 rounded-lg text-sm font-medium transition-all mt-2 ${
                  selectedReason && feedback.length>25
                    ? "w-full py-3 px-6 rounded-lg text-white font-medium transition-all bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              onClick={() => props.setStep('CancelationConfirmation')}>
            Complete Cancellation
          </button>
        </div>
      </div>
    </div>
  )
}