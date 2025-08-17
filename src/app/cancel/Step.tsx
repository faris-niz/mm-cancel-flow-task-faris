export default function StepCongrats( props: {setStep: any} )  {

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
              <button className="flex-1 py-2 rounded-lg border border-gray-300 hover:bg-gray-100">
                Yes
              </button>
              <button className="flex-1 py-2 rounded-lg border border-gray-300 hover:bg-gray-100">
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
                  className="py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
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
                  className="py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
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
                  className="py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
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