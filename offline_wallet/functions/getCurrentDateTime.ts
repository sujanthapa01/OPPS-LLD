export function getCurrentDateTime() {
    return new Date().toLocaleString("en-IN", {
        dateStyle: "medium",
        timeStyle: "medium"
    })
}