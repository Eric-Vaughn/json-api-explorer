// Resets an entire <div>
// Intended to be used only for a <div> containing a single element which is a message to display
export function resetMessageDiv(divID) {
    document.getElementById(divID).innerHTML = "";
}

// Helper to update the form's success and error message <div>s
export function updateFormMessage(containerID, errorMessage) {
    const message = document.createElement("p");
    message.textContent = errorMessage;

    document.getElementById(containerID).appendChild(message);
}
