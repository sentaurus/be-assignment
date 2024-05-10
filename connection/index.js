const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_PUBLIC_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
