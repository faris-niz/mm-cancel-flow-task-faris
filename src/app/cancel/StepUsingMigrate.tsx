import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function StepUsingMigrate( props: {setStep: any} )  {
  const [q1, setQ1] = useState('');
  const [q2, setQ2] = useState('');
  const [q3, setQ3] = useState('');
  const router = useRouter();

  return (
    <div className="flex-1 flex flex-col justify-center px-8 py-12 max-w-md">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
            Help us understand how you were using Migrate Mate.
          </h1>
          <p className="text-red-600 text-sm leading-relaxed mb-1">
            Mind letting us know why you're cancelling?
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            It helps us understand your experience and improve the platform.*
          </p>
        </div>

        {/* Survey questions */}
        <div className="space-y-6">
          {/* Question 1 */}
          <div>
            <p className="text-gray-700 text-sm mb-3">How many roles did you apply for through Migrate Mate?</p>
            <div className="grid grid-cols-4 gap-2">
              <button className={`flex-1 py-2 rounded-lg border border-gray-300  ${
                  q1==='0' && 'bg-purple-600 '
                }`}
                onClick={() => setQ1('0')}>
                0
              </button>
              <button className={`flex-1 py-2 rounded-lg border border-gray-300  ${
                  q1==='1-5' && 'bg-purple-600 '
                }`}
                onClick={() => setQ1('1-5')}>
              
                1 - 5
              </button>
              <button className={`flex-1 py-2 rounded-lg border border-gray-300 ${
                  q1==='6-20' && 'bg-purple-600 '
                }`}
                onClick={() => setQ1('6-20')}>
                6 - 20
              </button>
              <button className={`flex-1 py-2 rounded-lg border border-gray-300 ${
                  q1==='20+' && 'bg-purple-600 '
                }`}
                onClick={() => setQ1('20+')}>
                20+
              </button>
            </div>
          </div>

          {/* Question 2 */}
          <div>
            <p className="text-gray-700 text-sm mb-3">How many roles did you apply for through Migrate Mate?</p>
            <div className="grid grid-cols-4 gap-2">
              <button className={`flex-1 py-2 rounded-lg border border-gray-300  ${
                  q2==='0' && 'bg-purple-600 '
                }`}
                onClick={() => setQ2('0')}>
                0
              </button>
              <button className={`flex-1 py-2 rounded-lg border border-gray-300  ${
                  q2==='1-5' && 'bg-purple-600 '
                }`}
                onClick={() => setQ2('1-5')}>
              
                1 - 5
              </button>
              <button className={`flex-1 py-2 rounded-lg border border-gray-300 ${
                  q2==='6-20' && 'bg-purple-600 '
                }`}
                onClick={() => setQ2('6-20')}>
                6 - 20
              </button>
              <button className={`flex-1 py-2 rounded-lg border border-gray-300  ${
                  q2==='20+' && 'bg-purple-600 '
                }`}
                onClick={() => setQ2('20+')}>
                20+
              </button>
            </div>
          </div>

          {/* Question 3 */}
          <div>
            <p className="text-gray-700 text-sm mb-3">How many roles did you apply for through Migrate Mate?</p>
            <div className="grid grid-cols-4 gap-2">
              <button className={`flex-1 py-2 rounded-lg border border-gray-300 ${
                  q3==='0' && 'bg-purple-600 '
                }`}
                onClick={() => setQ3('0')}>
                0
              </button>
              <button className={`flex-1 py-2 rounded-lg border border-gray-300 ${
                  q3==='1-2' && 'bg-purple-600 '
                }`}
                onClick={() => setQ3('1-2')}>
              
                1 - 2
              </button>
              <button className={`flex-1 py-2 rounded-lg border border-gray-300  ${
                  q3==='3-5' && 'bg-purple-600 '
                }`}
                onClick={() => setQ3('3-5')}>
                3 - 5
              </button>
              <button className={`flex-1 py-2 rounded-lg border border-gray-300  ${
                  q3==='5+' && 'bg-purple-600 '
                }`}
                onClick={() => setQ3('5+')}>
                5+
              </button>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="space-y-3 pt-4">
          <button className="w-full py-3 px-6 rounded-lg text-white font-medium transition-all bg-green-500 hover:bg-green-600" onClick={() => router.push("/offer")}>
            Get 50% off | $12.50
          </button>
          
          <button
            disabled={q1==='' || q2==='' || q3===''}
            className={`w-full py-3 px-6 rounded-lg text-sm font-medium transition-all mt-2 ${
              q1!='' && q2!='' && q3!=''
                ? "w-full py-3 px-6 rounded-lg text-white font-medium transition-all bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700"
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          onClick={() => props.setStep('ReasonForCancelling')}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}