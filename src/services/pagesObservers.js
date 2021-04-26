export function Validate() {
    const username = document.getElementById("inputUsername").value;
    const password = document.getElementById("inputPassword").value;
    const condition = (username === "admin" && password === "admin") ? true : false;
    return condition
}
export function InputActive() {
    const username = document.getElementById("inputUsername");
    const formUser = document.getElementsByClass("input")
    const password = document.getElementById("inputPassword");
    if (username.value.length === 0) {
        formUser.classList.remove("inputCHecked");
    }
    else formUser.classList.add("inputCHecked");
}