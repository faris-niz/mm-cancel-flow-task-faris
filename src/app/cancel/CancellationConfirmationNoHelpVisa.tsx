import { useEffect, useState } from "react";

export default function CancellationConfirmationNoHelpVisa()  {

  return (
    <div className="flex-1 flex flex-col justify-center px-8 py-12 max-w-md">
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-6 leading-tight">
              All Done, your cancellation's been processed.
            </h1>
          </div>


          {/* Message content */}
          <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
            <p>We are Stroked to hear you've landed a jon and sorted your visa.<br/> Big congrats from the team.</p>
          </div>

          {/* Finish button */}
          <button className="w-full py-3 px-6 rounded-lg text-white font-medium transition-all bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700">
            Finish
          </button>
        </div>
      </div>

    )
}