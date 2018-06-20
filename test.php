<!DOCTYPE html>
<html>
<head>
	<title>mail sender</title>
</head>
<body>
	<?php 
	error_reporting(E_ALL|E_STRICT);
	$to = "quentin.sommer1@gmail.com";
	$subject = "ton sujet";

	$message="Ceci est un message";

	if (mail($to, $subject, $message)) {
		echo 'mail envoyer';
	}
	else
		echo 'mail pas envoyer';
	?>
</body>
</html>