"use client"
import { supabase } from "@/lib/supabaseClient";
import { createContext, useContext, useState, useEffect } from "react";

interface UserDataProps {
  first_name: string;
  last_name: string;
  avatar_url?: string | null;
}

interface DataContextType {
  loading: boolean;
  userData: UserDataProps;
  setUserData: React.Dispatch<React.SetStateAction<UserDataProps>>;
}

export const DataContext = createContext<DataContextType | null>(null);

export function ServerProvider({ children }: { children: React.ReactNode }) {
  const [userData, setUserData] = useState<UserDataProps>({
    first_name: "",
    last_name: "",
    avatar_url: null
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // 1️⃣ Get session
        const { data: { session } } = await supabase.auth.getSession();
        console.log("session:", session);

        if (!session) {
          setLoading(false);
          return; // No user logged in
        }

        // const userId = session.user.id;

        // 2️⃣ Fetch profile from Supabase
        const { data, error } = await supabase
          .from("profiles")
          .select("first_name, last_name, avatar_url")
          .eq("user_id", session.user.id)
          .maybeSingle();

        if (error) {
          console.log("Error fetching profile:", error.message);
        } else if (data) {
          setUserData({
            first_name: data.first_name || "",
            last_name: data.last_name || "",
            avatar_url: data.avatar_url || null
          });
        }

      } catch (err) {
        console.error("Unexpected error fetching profile:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  return (
    <DataContext.Provider value={{ userData, setUserData, loading }}>
      {children}
    </DataContext.Provider>
  );
}

// Custom hook
export function useDataProvider() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataProvider must be used inside ServerProvider");
  }
  return context;
}
