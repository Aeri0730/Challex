import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";
import { SUPABASE_URL, SUPABASE_KEY, PUBLIC_STORAGE_BUCKET } from "./config.js";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
export const storagebox = supabase.storage.from(PUBLIC_STORAGE_BUCKET);