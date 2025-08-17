export default function StepDreamRole( props: {setStep: any} )  {

  return (
    <div className="flex-1 flex flex-col justify-center px-8 py-12 max-w-md">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
            Awesome — we've pulled together a few roles that seem like a great fit for you.
          </h1>
          <p className="text-gray-600 text-sm leading-relaxed">
            Take a look and see what sparks your interest.
          </p>
        </div>

        {/* Job card */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-4">
          {/* Job header */}
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              A
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 text-sm">Automation Controls Engineer</h3>
              <p className="text-gray-600 text-xs">Sponsored • USA • Relocation USA • Bachelor's • On-Site</p>
            </div>
          </div>

          {/* Job details */}
          <div className="space-y-2">
            <div className="text-xs text-green-600 font-medium">NEW JOB</div>
            <div className="text-lg font-bold text-gray-900">$50,000/y - $70,000/y</div>
            <div className="text-xs text-gray-500">
              View sponsored by company's direct link
            </div>
          </div>

          {/* Job description */}
          <p className="text-xs text-gray-600 leading-relaxed">
            The Electrical Automation Controls Engineer will design, implement, and maintain industrial automation systems, specializing in 
            PLC programming using software like Ladder. The ideal candidate should have a Bachelor's degree in Electrical Engineering and a 
            track record of technical excellence experience. This role offers extensive on-the-job training opportunities with potential for career advancement.
          </p>

          {/* Company info and buttons */}
          <div className="flex items-center justify-between pt-2">
            <div className="text-xs text-gray-500">
              Company was founded: <span className="text-blue-500">https://en.wikipedia.com/a</span>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-xs border border-gray-300 rounded text-gray-600 hover:bg-gray-50">
                Save Job
              </button>
              <button className="px-3 py-1 text-xs bg-purple-600 text-white rounded hover:bg-purple-700">
                Apply
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <button className="w-full py-3 px-6 rounded-lg text-white font-medium transition-all bg-purple-600 hover:bg-purple-700">
          Land your dream role
        </button>
      </div>
    </div>
    )
}