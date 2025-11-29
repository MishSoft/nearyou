import {supabase} from "../lib/supabaseClient"

const signUpUser = async (name: string, lastname: string, email: string, password: string, city: string, district: string) => {
  try {
    const {error} = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name: name,
          lastname: lastname,
          city: city,
          district: district
        }
      }
    })

    if(error) {
      console.log("Signup error:", error.message)
      return
    }
  } catch (err) {
    console.log("Unexpected Error:", err)
    return {error: "Something went wrong"}
  }
}

export default signUpUser
