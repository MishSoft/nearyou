/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function SearchUsers() {
  return (
    <div className="w-full py-4">
      <div className="flex items-center justify-between w-full px-3 py-4 border-b border-gray-200">
        {/* Profile section */}
        <div className="flex items-center gap-3">
          <img
            src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?semt=ais_hybrid&w=740&q=80"
            alt=""
            className="w-12 h-12 rounded-full object-cover"
          />

          <div className="flex flex-col">
            <h1 className="font-semibold text-gray-900 leading-tight">
              John Doe
            </h1>
            <span className="text-gray-500 text-sm">
              @johndoe • 37.2k followers
            </span>
          </div>
        </div>

        {/* Follow button */}
        <button className="px-4 py-1.5 rounded-full border border-gray-300 hover:bg-gray-100 transition text-sm font-medium">
          Follow
        </button>
      </div>
    </div>
  );
}
