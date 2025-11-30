import { supabase } from "../lib/supabaseClient";

const signUpUser = async (
  first_name: string,
  last_name: string,
  email: string,
  password: string,
  city: string,
  district: string
) => {
  try {
    // 1️⃣ შექმენი მომხმარებელი Auth-ში
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (authError) {
      console.log("Signup error:", authError.message);
      return { error: authError.message };
    }

    if (!authData.user) return { error: "No user returned from signUp" };

    const userId = authData.user.id;

    // 2️⃣ ჩაწერე profile ტაბელაში
    const { error: profileError } = await supabase
      .from("profiles")
      .insert({
        user_id: userId,          // უნდა ემთხვეოდეს Auth-ის ID-ს
        first_name,
        last_name,
        city,
        district,
      });

    if (profileError) {
      console.log("Profile insert error:", profileError.message);
      return { error: profileError.message };
    }

    return { userId };
  } catch (err) {
    console.log("Unexpected Error:", err);
    return { error: "Something went wrong" };
  }
};

export default signUpUser;
