export default function StepInitial( props: {setStep: any} )  {

  return (
    <>
      <h1 className="text-2xl font-bold text-gray-900 leading-snug">
        Hey mate,
        <br />
        Quick one before you go.
      </h1>
      <p className="mt-3 text-xl italic text-gray-700 font-medium">
        Have you found a job yet?
      </p>
      <p className="mt-4 text-sm text-gray-600 leading-relaxed">
        Whatever your answer, we just want to help you take the next
        step. With visa support, or by hearing how we can do better.
      </p>

      <div className="mt-6 space-y-3">
        <button
          className="w-full py-3 rounded-lg border border-gray-300 text-gray-800 font-medium hover:bg-gray-100"
          onClick={() => props.setStep("Congrats")}
        >
          Yes, I’ve found a job
        </button>
        <button
          className="w-full py-3 rounded-lg border border-gray-300 text-gray-800 font-medium hover:bg-gray-100"
          onClick={() => props.setStep("Offer")}
        >
          Not yet – I’m still looking
        </button>
      </div>
    </>
    )
}