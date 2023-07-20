const api_url = "http://localhost:8000";

async function getapi(url) {
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    show(data);
}

getapi(api_url);

function show(data) {
    let tab = `<p>${data.message} </p>`;
    document.getElementById("info").innerHTML = tab;
}