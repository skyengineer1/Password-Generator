function generatePassword(length = 12) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("generate").addEventListener("click", () => {
        const length = parseInt(document.getElementById("length").value) || 12;
        document.getElementById("passwordDisplay").textContent = generatePassword(length);
    });
});
