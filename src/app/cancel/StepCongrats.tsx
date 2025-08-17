import { useEffect, useState } from "react";
export default function StepCongrats( props: {setStep: any, setJobWithMM: any} )  {
  const [q1, setQ1] = useState('');
  const [q2, setQ2] = useState('');
  const [q3, setQ3] = useState('');
  const [q4, setQ4] = useState('');

  useEffect(() => {
    if (q1 && q2 && q3 && q4) {
      props.setJobWithMM(q1)
      props.setStep('Feedback')
    }
  }, [q1, q2, q3, q4])

  return (
      <div>
        <h1 className="text-2xl font-bold text-gray-900 leading-snug">
          Congrats on the new role! 🎉
        </h1>

        {/* Questions */}
        <div className="mt-6 space-y-6">
          {/* Q1 */}
          <div>
            <p className="text-sm font-medium text-gray-800">
              Did you find this job with MigrateMate?*
            </p>
            <div className="mt-2 flex gap-3">
              <button className={`flex-1 py-2 rounded-lg border border-gray-300 ${
                  q1==='yes' && 'bg-purple-600 '
                }`}
                onClick={() => setQ1('yes')}>
                Yes
              </button>
              <button className={`flex-1 py-2 rounded-lg border border-gray-300 ${
                  q1==='no' && 'bg-purple-600 '
                }`}
                onClick={() => setQ1('no')}>
                No
              </button>
            </div>
          </div>

          {/* Q2 */}
          <div>
            <p className="text-sm font-medium text-gray-800">
              How many roles did you apply for through Migrate Mate?*
            </p>
            <div className="mt-2 grid grid-cols-4 gap-3">
              {["0", "1 – 5", "6 – 20", "20+"].map((opt) => (
                <button
                  key={opt}
                  className={`py-2 rounded-lg border border-gray-300 ${
                  q2===opt && 'bg-purple-600 '
                }`}
                  onClick={() => setQ2(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Q3 */}
          <div>
            <p className="text-sm font-medium text-gray-800">
              How many companies did you email directly?*
            </p>
            <div className="mt-2 grid grid-cols-4 gap-3">
              {["0", "1–5", "6–20", "20+"].map((opt) => (
                <button
                  key={opt}
                  className={`py-2 rounded-lg border border-gray-300 ${
                  q3===opt && 'bg-purple-600 '
                }`}
                  onClick={() => setQ3(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Q4 */}
          <div>
            <p className="text-sm font-medium text-gray-800">
              How many different companies did you interview with?*
            </p>
            <div className="mt-2 grid grid-cols-4 gap-3">
              {["0", "1–2", "3–5", "5+"].map((opt) => (
                <button
                  key={opt}
                  className={`py-2 rounded-lg border border-gray-300 ${
                  q4===opt && 'bg-purple-600 '
                }`}
                  onClick={() => setQ4(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
}