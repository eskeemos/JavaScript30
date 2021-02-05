navigator.geolocation.watchPosition((item) => {
    const [latitude,longitude] = [item.coords.latitude,item.coords.longitude];
    document.querySelector(".lati").innerHTML = latitude;
    document.querySelector(".long").innerHTML = longitude;
})