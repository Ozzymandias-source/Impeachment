 // DOM Elements
const recipientOptions = document.getElementById("recipientOptions");
const emailSubject = document.getElementById("emailSubject");
const emailContent = document.getElementById("emailContent");
const sendButton = document.getElementById("sendButton");

const sendEmail = () => {
    const checkedRecipients = Array.from(
        document.querySelectorAll('input[name="recipient"]:checked')
    ).map((input) => input.value);
    if (checkedRecipients.length === 0) {
        alert("Please select at least one recipient.");
        return;
    }

    const subject = encodeURIComponent(
        emailSubject.value.trim() || "MOTION FOR IMPEACHMENT OF PRESIDENT WILLIAM SAMOEI RUTO AND CALL FOR LOCAL AND INTERNATIONAL PROSECUTION."
    );
    const emailBody = encodeURIComponent(emailContent.value);
    const recipients = checkedRecipients.join(",");

    const mailtoLink = `mailto:${recipients}?subject=${subject}&body=${emailBody}`;

    window.location.href = mailtoLink;
};

sendButton.addEventListener("click", sendEmail);