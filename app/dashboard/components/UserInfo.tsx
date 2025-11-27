/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

export default function UserInfo() {
  return (
    <div className="p-2 border-b border-gray-300 my-5">
      <div className="flex items-start gap-5 flex-col w-full justify-between">
        <div className="flex items-start w-full justify-between gap-10">
          <div className="flex flex-col  gap-2">
            <h1 className="text-xl font-semibold">Mishiko Aspanidze</h1>
            <h3 className="text-xs">mi_sch_o</h3>
          </div>

          <img
            className="w-16 h-16 rounded-full object-cover"
            src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379005.jpg&fm=jpg"
            alt=""
          />
        </div>
        <button className="my-2 text-gray-400">1200K Followers</button>
      </div>

      <button className="w-full cursor-pointer py-2 my-2 border border-gray-100 rounded-xl">
        Edit Profile
      </button>
    </div>
  );
}
