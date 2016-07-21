<?php
header('Content-Type: text/html; charset=utf-8');
$fulljson = htmlspecialchars(utf8_encode($_POST['jsonbadge']));
$selectedbadges = htmlspecialchars($_POST['badgelist']);

echo '<form enctype="multipart/form-data" action="badgecv.php" method="POST">
	<input type="hidden" name="jsonbadge" value="'.$fulljson.'" />
	<input type="hidden" name="badgelist" value="'.$selectedbadges.'" />
    Send this file: <input name="pdfcv" type="file" accept=".pdf,application/pdf"/>
    <input type="submit" value="Send your CV" />
</form>';

?>