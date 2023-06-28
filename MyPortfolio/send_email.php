<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Retrieve the form data
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // Validate the data (you can add more validation if needed)
  if (empty($name) || empty($email) || empty($message)) {
    echo "Please fill out all of the fields.";
    exit;
  }

  // Set up the email parameters
  $to = "a.roscoe@me.com"; // Change this to your desired email address
  $subject = "New message from contact form";
  $headers = "From: $name <$email>" . "\r\n" .
             "Reply-To: $email" . "\r\n" .
             "Content-type: text/plain; charset=utf-8";

  // Compose the email body
  $email_body = "Name: $name\n\n" .
                "Email: $email\n\n" .
                "Message:\n$message";

  // Send the email
  if (mail($to, $subject, $email_body, $headers)) {
    echo "Email sent successfully!";
  } else {
    echo "Sorry, there was an error sending your message. Please try again later.";
  }
}
?>
