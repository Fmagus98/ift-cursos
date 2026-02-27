import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.REACT_APP_SUPABASEURL,
  process.env.REACT_APP_ANONKEY
)