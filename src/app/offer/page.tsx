"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import StepInitial from "./StepInitial";
import StepDreamRole from "./StepDreamRole";


export default function CancelPage() {
  const router = useRouter();
  const [step, setStep] = useState("Initial");
  const [stepNo, setStepNo] = useState(0);
  const [jobWithMM, setJobWithMM] = useState("");
  let currentFlowSequence = useRef(['Initial'])

  function goBack() {
    currentFlowSequence.current.pop()
    setStep(currentFlowSequence.current[currentFlowSequence.current.length-1])
    setStepNo(stepNo-1)
  }

  function gotostep(nextstep: string) {
    currentFlowSequence.current.push(nextstep)
    setStep(nextstep)
    setStepNo(stepNo+1)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-[900px] bg-white rounded-xl shadow-md border border-gray-200">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            {stepNo > 0 && stepNo < 4 && (
              <button
                className="text-sm text-gray-600 hover:text-gray-900"
                onClick={goBack}
              >
                ← Back
              </button>
            )}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <h2 className="text-sm font-medium text-gray-500">
                Subscription
              </h2>
            </div>
          </div>
          <button
            onClick={() => router.push("/")}
            className="text-gray-400 hover:text-gray-600 text-xl"
          >
            &times;
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row">
          {/* Right Image */}
          <div className="w-full md:w-[300px] order-1 md:order-2">
            <img
              src="empire-state-compressed.jpg"
              alt="city"
              className="w-full h-full object-cover rounded-r-xl"
            />
          </div>
          {/* Left Content */}
          <div className="flex-1 px-6 py-6 order-2 md:order-1">
            {step === 'Initial' && ( <StepInitial setStep={gotostep}/> )}
            {step === "DreamRole" && ( <StepDreamRole setStep={gotostep} /> )}
          </div>
        </div>
      </div>
    </div>
  );
}