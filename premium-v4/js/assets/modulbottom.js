document.addEventListener("DOMContentLoaded", function () {
    const targetElement = document.getElementById("container");

    if (targetElement) {
        targetElement.innerHTML = `&copy; Copyright ${new Date().getFullYear()} 
            <a href="https://planetmn.com">planetGo</a> | All Rights Reserved`;
    }
});

