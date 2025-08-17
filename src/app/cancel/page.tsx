"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import StepInitial from "./StepInitial";
import StepCongrats from "./StepCongrats";
import StepFeedback from "./StepFeedbacl";
import StepVisaWithMM from "./StepVisaWithMM";
import StepVisaWithoutMM from "./StepVisaWithoutMM";
import CancellationConfirmationHelpVisa from "./CancellationConfirmationHelpVisa";
import CancellationConfirmationNoHelpVisa from "./CancellationConfirmationNoHelpVisa";
import StepOffer from "./StepOffer";
import StepUsingMigrate from "./StepUsingMigrate";
import StepReasonForCancelling from "./StepReasonForCancelling";
import StepCancellationConfirmation from "./StepCancellationConfirmation";

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
          </div>

          {/* Step info + Close */}
        {stepNo>0 && <div className="flex items-center gap-4 text-xs text-gray-400">
          <div>
            <h2 className="text-sm font-medium text-gray-500">
              Subscription Cancellation
            </h2>
          </div>
          <div className="flex items-center gap-1">
            <div className={`w-7 h-2 rounded-sm ${stepNo === 1 ? 'bg-gray-600' : stepNo>1 ? 'bg-green-500 ' : 'bg-gray-300'}`}></div>
            <div className={`w-7 h-2 rounded-sm ${stepNo === 2 ? 'bg-gray-600' : stepNo>2 ? 'bg-green-500 ' : 'bg-gray-300'}`}></div>
            <div className={`w-7 h-2 rounded-sm ${stepNo === 3 ? 'bg-gray-600' : stepNo>3 ? 'bg-green-500 ' : 'bg-gray-300'}`}></div>
          </div>
            {stepNo > 3 ? <span>Completed</span> : <span>Step {stepNo} of 3</span>}
          </div>}
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
            {step === "Congrats" && ( <StepCongrats setStep={gotostep} setJobWithMM={setJobWithMM} /> )}
            {step === "Feedback" && ( <StepFeedback setStep={gotostep} jobWithMM={jobWithMM}/> )}
            {step === "StepVisaWithMM" && ( <StepVisaWithMM setStep={gotostep} /> )}
            {step === "StepVisaWithoutMM" && ( <StepVisaWithoutMM setStep={gotostep} /> )}
            {step === "Offer" && ( <StepOffer setStep={gotostep}/> )}
            {step === "UsingMigrate" && ( <StepUsingMigrate setStep={gotostep}/> )}
            {step === "ReasonForCancelling" && ( <StepReasonForCancelling setStep={gotostep}/> )}
            {step === "CancellationConfirmationHelpVisa" && ( <CancellationConfirmationHelpVisa /> )}
            {step === "CancellationConfirmationNoHelpVisa" && ( <CancellationConfirmationNoHelpVisa /> )}
            {step === "CancelationConfirmation" && ( <StepCancellationConfirmation /> )}
          </div>
        </div>
      </div>
    </div>
  );
}