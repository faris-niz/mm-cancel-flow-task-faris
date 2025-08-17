export default function StepInitial( props: {setStep: any} )  {

  return (
    <div className="flex-1 flex flex-col justify-center px-8 py-12 max-w-md">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-6 leading-tight">
            Great choice, mate!
          </h1>
          <p className="text-gray-700 text-sm leading-relaxed mb-1">
            You're still on the path to your dream role.
          </p>
          <p className="text-sm leading-relaxed">
            <span className="text-purple-600 font-medium">Let's make it happen together!</span>
          </p>
        </div>

        {/* Plan details */}
        <div className="space-y-2 text-sm text-gray-700">
          <p>You've got XX days left on your current plan.</p>
          <p>Starting from XX date, your monthly payment will be $12.50.</p>
        </div>

        {/* Cancellation note */}
        <div className="pt-2">
          <p className="text-gray-500 text-xs">
            You can cancel anytime before then.
          </p>
        </div>

        {/* Land your dream role button */}
        <button className="w-full py-3 px-6 rounded-lg text-white font-medium transition-all bg-purple-600 hover:bg-purple-700 mt-8"
          onClick={() => props.setStep('DreamRole')}>
          Land your dream role
        </button>
      </div>
    </div>
    )
}