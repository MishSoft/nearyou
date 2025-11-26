/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Heart, MessageCircle } from "lucide-react";
import Comment from "./Comment";

export default function Post() {
  const [isComment, setIsComment] = useState(false);

  return (
    <div className="max-w-xl mx-auto border-b border-gray-100 bg-white pb-4 mb-4">
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <Image
          alt="profile"
          width={48}
          height={48}
          className="w-12 h-12 rounded-full"
          src="https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE="
        />
        <div className="flex flex-col">
          <h1 className="font-semibold text-gray-900 text-sm">misho212</h1>
          <span className="text-gray-500 text-xs">10h</span>
        </div>
      </div>

      {/* Content */}
      <div className="text-gray-900 text-sm mb-3">
        <p className="mb-2 leading-relaxed">
          Sir John Soane’s Museum is a labyrinth of small passageways, like
          portals to other worlds 🤩 🌍 Soane’s narrow corridors act not only as
          transitional spaces between different rooms in the Museum, they also
          frame unexpected vistas and clever viewpoints, revealing treasures in
          the collection from surprising angles. What’s your favourite viewpoint
          in the Museum? 📸: 1,3,4 @kevinmu / 2, 5 Matt Clayton
        </p>

        <div className="w-full flex overflow-x-scroll scroll-hide gap-2 rounded-xl">
          <img
            alt="museum"
            className="w-[300px] h-[400px] object-cover rounded-xl"
            src="https://images.unsplash.com/photo-1610904905536-1e2ed3d6e3bd?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGVzY2FwZXxlbnwwfHwwfHx8MA%3D%3D"
          />
          <img
            alt="museum"
            className="w-[300px] h-[400px] object-cover rounded-xl"
            src="https://images.unsplash.com/photo-1610904905536-1e2ed3d6e3bd?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGVzY2FwZXxlbnwwfHwwfHx8MA%3D%3D"
          />

          <img
            alt="museum"
            className="w-[300px] h-[400px] object-cover rounded-xl"
            src="https://images.unsplash.com/photo-1610904905536-1e2ed3d6e3bd?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGVzY2FwZXxlbnwwfHwwfHx8MA%3D%3D"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-6 border-t border-gray-100 pt-3">
        <button className="flex items-center gap-1 text-gray-500 hover:text-pink-500 transition">
          <Heart size={20} />
          <span className="text-sm">123</span>
        </button>
        <button
          onClick={() => setIsComment(!isComment)}
          className="flex items-center gap-1 text-gray-500 hover:text-blue-500 transition"
        >
          <MessageCircle size={20} />
          <span className="text-sm">45</span>
        </button>
      </div>
      {isComment && (
        <div className="py-5">
          {/* Commented */}
          <div className="max-h-[400px] overflow-y-scroll scroll-hide">
            <Comment />
            <Comment />
            <Comment />
          </div>
          <div className="my-2 flex items-center border rounded-xl  border-gray-100">
            <input
              className="w-full p-2  resize-none outline-none h-full"
              name=""
              id=""
              placeholder="Write a commetn"
            />

            <button className="px-5 cursor-pointer rounded-r-xl bg-gray-800 py-5 text-white">
              Add
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
