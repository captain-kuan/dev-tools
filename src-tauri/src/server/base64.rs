use base64;

#[tauri::command]
pub fn encode(input: &str) -> String {
    base64::encode(input)
}

#[tauri::command]
pub fn decode(input: &str) -> String {
    match base64::decode(input) {
        Ok(res) => String::from_utf8(res).unwrap_or(String::from(input)),
        Err(_err) => String::from(input),
    }
}
