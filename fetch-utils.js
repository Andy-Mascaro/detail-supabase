const SUPABASE_URL = 'https://nschbtdnjkjkoshunkhk.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5zY2hidGRuamtqa29zaHVua2hrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ0MzYwMjAsImV4cCI6MTk2MDAxMjAyMH0.mwm25ysgqkbA7ZMQcYTguKcFC-qRnmiDHgK2PxCROPk';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getSodas() {
    const resp = await client.form('sodas').select('*');
    return checkError(resp);

}

export async function getSoda(id) {
    const resp = await client.from('sodas').select('*').eq('id', id).single();
    return checkError(resp);

}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}