import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function StepOffer( props: {setStep: any} )  {
  const router = useRouter();
  const [feedback, setFeedback] = useState('');
  const maxChars = 25;

  return (
    <div className="flex-1 flex flex-col justify-center px-8 py-12 max-w-md">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
            We built this to help you land the job, this makes it a little easier.
          </h1>
          <p className="text-gray-600 text-sm leading-relaxed">
            We've been there and we're here to help you.
          </p>
        </div>

        {/* Offer card */}
        <div className="bg-purple-100 rounded-xl p-6 space-y-4">
          <div className="text-center">
            <p className="text-gray-700 text-sm mb-2">
              Here's <span className="font-bold">50% off</span> until you find a job.
            </p>
            <div className="space-y-1">
              <div className="text-2xl font-bold text-purple-600">$12.50/month</div>
              <div className="text-sm text-gray-500 line-through">$25/month</div>
            </div>
          </div>

          <button className="w-full py-3 px-6 rounded-lg text-white font-medium transition-all bg-green-500 hover:bg-green-600"
            onClick={() => router.push("/offer")}>
            Get 50% off
          </button>
          
          <p className="text-xs text-gray-500 text-center leading-relaxed">
            You won't be charged until you find your offer.
          </p>
        </div>

        {/* No thanks button */}
        <button className="w-full py-3 rounded-lg border border-gray-300 text-gray-800 font-medium hover:bg-gray-100" onClick={() => props.setStep('UsingMigrate')}>
          No thanks
        </button>
      </div>
    </div> 
  )
}