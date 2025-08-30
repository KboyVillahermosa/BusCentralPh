import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ygadinkxehvlqufzbzqe.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlnYWRpbmt4ZWh2bHF1ZnpienFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY1MjU0ODEsImV4cCI6MjA3MjEwMTQ4MX0.tJIsV_UzOBPDoATGcnV-T0wqjmazuncDwBrSkHg4seg'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
