import { useEffect, useState } from "react";

export default function CancellationConfirmationHelpVisa()  {

  return (
    <div className="flex-1 flex flex-col justify-center px-8 py-12 max-w-md">
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-6 leading-tight">
                Your cancellation's all sorted, mate, no more charges.
              </h1>
            </div>

            {/* Profile section */}
            <div className="flex items-start gap-3 mb-6">
              <img className="w-10 h-10 rounded-full" src="mihailo-profile.jpeg"/>
              <div className="flex-1">
                <div className="font-medium text-gray-900 text-sm">Mihailo Bosic</div>
                <div className="text-gray-500 text-xs">mihailo@migratemate.co</div>
              </div>
            </div>

            {/* Message content */}
            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              <p>I'll be reaching out soon to help with the visa side of things.</p>
              <p>We've got your back, whether it's questions, paperwork, or just figuring out your options.</p>
              <p>Keep an eye on your inbox, I'll be in touch shortly.</p>
            </div>

            {/* Finish button */}
            <button className="w-full py-3 px-6 rounded-lg text-white font-medium transition-all bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700">
              Finish
            </button>
          </div>
        </div>

    )
}