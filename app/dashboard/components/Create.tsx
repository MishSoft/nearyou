/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useRef, useState } from "react";
import { Image, Smile, MapPin } from "lucide-react";
import { useDashboard } from "../context/DashboardContext";
import { useDataProvider } from "@/context/ServerContext";

export default function Create() {
  const popRef = useRef<HTMLDivElement>(null);
  const emojiRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { setCreatePop, emojis } = useDashboard();

  const [postMessage, setPostMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string[] | null>(null);
  const { userData, loading } = useDataProvider()

  // Outside click handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      // Emoji picker ღიაა და click-picker-ის გარეთ მოხდა
      if (
        showEmojiPicker &&
        emojiRef.current &&
        !emojiRef.current.contains(target)
      ) {
        setShowEmojiPicker(false);
      }

      // Popup div-ის გარეთ click
      if (popRef.current && !popRef.current.contains(target)) {
        setCreatePop(false);
        setShowEmojiPicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setCreatePop, showEmojiPicker]);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostMessage(e.target.value);
  };

  const addEmoji = (emoji: string) => {
    setPostMessage((prev) => prev + emoji);
  };

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      setSelectedImage([...(selectedImage || []), url]);
    }
  };

  const handleDeleteImage = (index: number) => {
    if (!selectedImage) return;
    setSelectedImage(selectedImage.filter((_, i) => i !== index));
  };

  return (
    <div className="fixed inset-0 z-99999 bg-white/20 backdrop-blur-xl flex items-center justify-center p-4">
      <div className=" w-full  max-h-[80vh]  max-w-lg">
        <div
          ref={popRef}
          className="border bg-white rounded-2xl p-2 shadow-lg  border-gray-200"
        >
          {/* Header */}
          <div className="flex items-center justify-center border-b border-gray-200 p-3 relative">
            <button
              onClick={() => setCreatePop(false)}
              className="absolute left-4 text-gray-500 hover:text-gray-700 font-medium"
            >
              Cancel
            </button>
            <h2 className="text-lg font-semibold text-gray-900">New Post</h2>
          </div>

          {/* User Info */}
          <div className="flex items-start gap-3 p-4">
            {
              userData.avatar_url ? (
                <img
                  src={userData.avatar_url}
                  alt="profile"
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : (
                <img
                  src="/user-default.jpg"
                  alt="profile"
                  className="w-12 h-12 rounded-full object-cover"
                />
              )
            }
            <div className="flex flex-col justify-center">
              <h3 className="font-semibold text-gray-900">
                {loading ? "Loading..." : userData.first_name + userData.last_name}
              </h3>
            </div>
          </div>

          {/* Textarea */}
          <div className="px-4 py-4  max-h-[60vh] overflow-auto ">
            <textarea
              value={postMessage}
              onChange={handleTextChange}
              placeholder="What's new?"
              className="w-full h-auto p-3 border border-gray-200 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-pink-400 transition placeholder-gray-400 text-gray-900"
            />

            {/* Image Preview */}
            {selectedImage && (
              <div className="overflow-auto">
                <div className="mt-2 flex gap-2 items-center justify-start overflow-x-auto relative">
                  {selectedImage.map((img, index) => {
                    return (
                      <div key={index} className="h-86">
                        <div
                          style={{ backgroundImage: `url('${img}')` }}
                          className="w-64 h-full bg-no-repeat relative rounded-xl bg-cover bg-center"
                        >
                          <button
                            className="absolute w-8 h-8 top-1 left-2 bg-gray-200 rounded-full hover:bg-gray-300"
                            onClick={() => handleDeleteImage(index)}
                          >
                            ✕
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
          {/* Action buttons */}
          <div className="flex items-center gap-4 mt-3 relative">
            {/* Image Picker */}
            <div className="relative">
              <button
                onClick={() => fileInputRef.current?.click()}
                className="p-2 rounded-full hover:bg-gray-100 transition"
              >
                <Image
                  size={20}
                  className="text-gray-500 hover:text-blue-500"
                />
              </button>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                className="hidden"
                onChange={handleImage}
              />
            </div>

            {/* Emoji Picker */}
            <div className="relative" ref={emojiRef}>
              <button
                onClick={() => setShowEmojiPicker((prev) => !prev)}
                className="p-2 rounded-full hover:bg-gray-100 transition"
              >
                <Smile
                  size={20}
                  className="text-gray-500 hover:text-blue-500"
                />
              </button>

              {showEmojiPicker && (
                <div className="absolute bottom-full mb-2 p-2 rounded-xl border border-gray-200 bg-white grid grid-cols-5 gap-2 max-h-48 overflow-y-auto w-[320px] shadow-lg z-10">
                  {emojis.map((emoji, inx) => (
                    <button
                      key={inx}
                      onClick={() => addEmoji(emoji.character)}
                      className="p-2 cursor-pointer text-xl hover:bg-gray-100 rounded-xl"
                    >
                      {emoji.character}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Location */}
            <button className="p-2 rounded-full hover:bg-gray-100 transition">
              <MapPin size={20} className="text-gray-500 hover:text-blue-500" />
            </button>

            {/* Post Button */}
            <div className="ml-auto">
              <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-2xl font-semibold shadow transition">
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
