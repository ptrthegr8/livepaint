// Add logic to this script to poll server every second for updated pixels.
let clientLength = clientUpdates.length;
let latest;
function fetchLatestUpdate() {
    // clientUpdates.push([row, col, paint_color]);
    const optionsObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            clientUpdates,
            length: latest
        })
    }
    fetch('/updates', optionsObject)
        .then(response => response.json())
        .then(data => {
            for (i = 0; i < data.updates.length; i++) {
                bitmap.setColor(data.updates[i][0], data.updates[i][1], data.updates[i][2]);
            }
            latest = data.length;
            console.log(`latest` + latest);
            clientUpdates = [];
        })
    setTimeout(fetchLatestUpdate, 1000);
}
fetchLatestUpdate();