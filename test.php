<!DOCTYPE html>
<html>
<head>
	<title>mail sender</title>
</head>
<body>
	<?php 
	$to = "quentin.sommer1@gmail.com";
	$subject = "ton sujet";

	$message="<html><head></head><body>ton contenu avec style à l'intérieur des balises</body></html>";

	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";

	mail($to, $subject, $message, $headers);
	?>
</body>
</html>