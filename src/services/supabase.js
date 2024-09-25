
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dmokszsoqtbncxbreoot.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtb2tzenNvcXRibmN4YnJlb290Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcxNzIxODYsImV4cCI6MjA0Mjc0ODE4Nn0.dF6Xrlnl21Jm_q93ZpmU4_vOFLZCgTg0vW7LlKHlXu4"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;