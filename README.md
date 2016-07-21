In this document we will see  how to install and configure the Badge-CV backend

Requirements
•	PHP 5.3.3+
All the libraries are included in the package (here a list):
•	TCPDF
•	FPDI
•	PHPWORD
•	HTMLTODOCX
•	SIMPLEHTMLDOM

Integration
The system is configured as a standalone application with a very simple API-like system. 
In the example folder you can see an example of integration in a working mockup, using Javascript.
To use it you have to modify the login.php file with your username and password.
The requirements are an auth_token for the current user (in the example it’sfetching it through a JS and a PHP file, but in reality you should already have the token for the logged user), the Json read from https://www.badgecraft.eu/api/v1/badges and a json with the ID of the selected badges, built using JSON.stringify(badgearray) (you can look at the getbadgelistAuth.js file in the example/js folder). 
There some configurations parameters to modify before you can use the system.
The main part of the application is the “Add your badge to your CV” part.
If you look at the examples, you can see that the example page call a second page to load the CV in PDF format and then pass the file to a third page that create the pages with the badges and add it at the end of the CV. All the badges are linked to your website.

If you want to integrate the “export badge to DOCX” functionality, you have to open badgecvdox.php and modify the strings 
1.	'base_root' => $paths['http://hoc12.elet.polimi.it']
2.	'base_path' => $paths['/testing/badgecraft_CV/']
3.	if (!copy($h2d_file_uri, "temp/badge_".$tempdoc.".docx"))
4.	http://hoc12.elet.polimi.it/testing/badgecraft_CV/temp/badge_'.$tempdoc.'.docx' 
to match your server configuration. The 4th line is used to return the URL of the generated DOCX file from a temporary folder, defined in the 3rd line. Given that it’s more simple than the pdf integration, it should be used with an Ajax Call (as in the example).

