import {createClient} from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_KEY!
const supabaseAnonKEy = process.env.NEXT_PUBLIC_ANON_KEY!


export const supabase = createClient(supabaseUrl, supabaseAnonKEy)
