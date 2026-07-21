import { createClient } from "@supabase/supabase-js";

// URL Supabase tanpa akhiran /rest/v1/
const supabaseUrl = "https://dqkkivcvewvclouwziow.supabase.co"; 
const supabaseAnonKey = "MASUKKAN_ANON_KEY_KAMU_DI_SINI"; // Masukkan anon key public kamu

export const supabase = createClient(supabaseUrl, supabaseAnonKey);