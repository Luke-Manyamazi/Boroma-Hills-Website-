export function trackVisit() {
  fetch("https://isirluke1.pythonanywhere.com/track", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      site: "Boroma Hills",
      category: "Business"
    })
  })
    .then(res => res.json())
    .then(data => console.log("Tracking success:", data))
    .catch(err => console.log("Tracking failed:", err));
}