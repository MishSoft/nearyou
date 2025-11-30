/* eslint-disable @next/next/no-img-element */
import { useDataProvider } from "@/context/ServerContext";

export default function UserInfo() {
  const { userData, loading } = useDataProvider()
  return (
    <div className="p-2 border-b border-gray-300 my-5">
      <div className="flex items-start gap-5 flex-col w-full justify-between">
        <div className="flex items-start w-full justify-between gap-10">
          <div className="flex flex-col items-start gap-2">
            <h1 className="text-xl font-semibold">{loading ? "Loading..." : userData.first_name + userData.last_name}</h1>
            <button className="text-xs text-gray-400">1200K Followers</button>
          </div>

          {
            userData.avatar_url ? (
              <img
                className="w-16 h-16 rounded-full object-cover"
                src={userData.avatar_url}
                alt=""
              />
            ) : (
              <img
                className="w-16 h-16 rounded-full object-cover"
                src="/user-default.jpg"
                alt=""
              />
            )
          }
        </div>

      </div>

      <button className="w-full hover:bg-black hover:text-white duration-200 cursor-pointer py-2 my-2 border border-gray-100 rounded-xl">
        Edit Profile
      </button>
    </div>
  );
}
