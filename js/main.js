import { supabase } from "./supabaseClient.js";

function displayOnScreen() {
  const content1 = document.querySelector(".content");
  content1.style.display = "none";
  const contentBack = document.querySelector(".contentBack");
  contentBack.style.display = "block";
}

const {data, error} = await supabase.auth.signUp({
  
})