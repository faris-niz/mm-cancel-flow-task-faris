import { useEffect, useState } from "react";

export default function StepVisaWithMM( props: {setStep: any} )  {
  const [selectedOption, setSelectedOption] = useState('');

  return (
        <div className="flex-1 flex flex-col justify-center px-8 py-12 max-w-md">
          <div className="space-y-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-6 leading-tight">
                We helped you land the job, now let's help you secure your visa.
              </h1>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                Is your company providing an immigration lawyer to help with your visa?
              </p>
            </div>

            <div className="space-y-4">
              {/* Radio button options */}
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="immigration-lawyer"
                    value="yes"
                    checked={selectedOption === 'yes'}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                    selectedOption === 'yes' 
                      ? 'border-blue-600 bg-blue-600' 
                      : 'border-gray-300 group-hover:border-gray-400'
                  }`}>
                    {selectedOption === 'yes' && (
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    )}
                  </div>
                  <span className="text-gray-700 text-sm">Yes</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="immigration-lawyer"
                    value="no"
                    checked={selectedOption === 'no'}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                    selectedOption === 'no' 
                      ? 'border-blue-600 bg-blue-600' 
                      : 'border-gray-300 group-hover:border-gray-400'
                  }`}>
                    {selectedOption === 'no' && (
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    )}
                  </div>
                  <span className="text-gray-700 text-sm">No</span>
                </label>
              </div>

              {/* Additional content when "Yes" is selected */}
              {selectedOption === 'yes' && (
                <div className="mt-6 space-y-4 animate-in slide-in-from-top duration-300">
                  <div>
                    <p className="text-gray-700 text-sm leading-relaxed mt-1">
                      Which visa would you like to apply for?*
                    </p>
                  </div>
                  
                  <input
                    type="text"
                    placeholder="Enter visa type..."
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 text-sm placeholder-gray-400"
                  />
                </div>
              )}              

              {/* Additional content when "No" is selected */}
              {selectedOption === 'no' && (
                <div className="mt-6 space-y-4 animate-in slide-in-from-top duration-300">
                  <div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      We can connect you with one of our trusted partners.
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed mt-1">
                      Which visa would you like to apply for?*
                    </p>
                  </div>
                  
                  <input
                    type="text"
                    placeholder="Enter visa type..."
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 text-sm placeholder-gray-400"
                  />
                </div>
              )}

              <button
                disabled={!selectedOption}
                className={`w-full py-3 px-6 rounded-lg text-sm font-medium transition-all mt-8 ${
                  selectedOption
                    ? "w-full py-3 px-6 rounded-lg text-white font-medium transition-all bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700"
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
                onClick={() => props.setStep(selectedOption==='yes' ? 'CancellationConfirmationNoHelpVisa' : 'CancellationConfirmationHelpVisa')}
              >
                Complete cancellation
              </button>
            </div>
          </div>
        </div>
    )
}