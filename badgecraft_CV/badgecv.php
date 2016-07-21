<?php
$fulljson = $_POST['jsonbadge'];
$selectedbadges = $_POST['badgelist'];
$fulljsonarray = json_decode($fulljson, true);
$selectedbadgesarray = json_decode($selectedbadges, true);

$pdffile = $_FILES['pdfcv']['tmp_name'];
$pdffileorigname = $_FILES['pdfcv']['name'];

//echo $fulljsonarray["list"][0]["id"];
//echo $selectedbadgesarray[1];
$numberofbadges = count($fulljsonarray['list']);
$numberofselectedbadges = count($selectedbadgesarray);

// Include the main TCPDF library (search for installation path).

require_once('tcpdf_include.php');
require_once('./FPDI/fpdi.php');
// create new PDF document
$pdf = new FPDI(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);

// set document information
$pdf->SetCreator(PDF_CREATOR);
$pdf->SetAuthor('Polimi-Badgecraft');
$pdf->SetTitle('Badge CV');
$pdf->SetSubject('Badge CV');
$pdf->SetKeywords('Badge, PDF, CV');

// set default header data
$pdf->SetHeaderData(PDF_HEADER_LOGO, PDF_HEADER_LOGO_WIDTH, PDF_HEADER_TITLE, PDF_HEADER_STRING);

// set header and footer fonts
$pdf->setHeaderFont(Array(PDF_FONT_NAME_MAIN, '', PDF_FONT_SIZE_MAIN));
$pdf->setFooterFont(Array(PDF_FONT_NAME_DATA, '', PDF_FONT_SIZE_DATA));

// set default monospaced font
$pdf->SetDefaultMonospacedFont(PDF_FONT_MONOSPACED);

// set margins
$pdf->SetMargins(PDF_MARGIN_LEFT, PDF_MARGIN_TOP, PDF_MARGIN_RIGHT);
$pdf->SetHeaderMargin(PDF_MARGIN_HEADER);
$pdf->SetFooterMargin(PDF_MARGIN_FOOTER);




$pageCount = $pdf->setSourceFile($pdffile);
for ($pageNo = 1; $pageNo <= $pageCount; $pageNo++) {
    // import a page
    $templateId = $pdf->importPage($pageNo);
    // get the size of the imported page
    $size = $pdf->getTemplateSize($templateId);

    // create a page (landscape or portrait depending on the imported page size)
    if ($size['w'] > $size['h']) {
		$pdf->SetPrintHeader(false);
		$pdf->SetPrintFooter(false);
        $pdf->AddPage('L', array($size['w'], $size['h']));
    } else {
		$pdf->SetPrintHeader(false);
		$pdf->SetPrintFooter(false);
        $pdf->AddPage('P', array($size['w'], $size['h']));
    }
	
	// use the imported page
    $pdf->useTemplate($templateId);

  
}







// set auto page breaks
$pdf->SetAutoPageBreak(TRUE, PDF_MARGIN_BOTTOM);

// set image scale factor
$pdf->setImageScale(PDF_IMAGE_SCALE_RATIO);

// set some language-dependent strings (optional)
if (@file_exists(dirname(__FILE__).'/lang/eng.php')) {
	require_once(dirname(__FILE__).'/lang/eng.php');
	$pdf->setLanguageArray($l);
}

// ---------------------------------------------------------

// set font
$pdf->SetFont('helvetica', '', 10);

// add a page
$pdf->SetPrintHeader(true);
$pdf->AddPage();
$pdf->SetPrintHeader(true);
$pdf->SetPrintFooter(false);

/* NOTE:
 * *********************************************************
 * You can load external XHTML using :
 *
 * $html = file_get_contents('/path/to/your/file.html');
 *
 * External CSS files will be automatically loaded.
 * Sometimes you need to fix the path of the external CSS.
 * *********************************************************
 */

// define some HTML content with style
$css = <<<EOF
<!-- BADGE CSS STYLE -->
<style>
	.widget{
	width: 100%;	
}

.singleWidget{
	margin: 5px;
    background: #fff none repeat scroll 0 0;
    box-sizing: border-box;
    display: inline-block;
	text-align: center;
	
}

.singleP{
	margin-top: 0px;
	padding-top: 10px;
}

.descriptiondiv{
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
	text-align: center;
}

.titlelink{
font-size: 14px;
    line-height: 20px;
	color: #444;
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    font-weight: 400;
    margin: 0 0 15px;
    text-transform: none;

}

.badgedescrption {
display:block;
}
</style>

EOF;

$body = '<div id="listactivity" class="widget">';
for ($i=0; $i<$numberofselectedbadges; $i++ ){
	
		for ($k=0; $k<$numberofbadges; $k++){
			if(strcmp($selectedbadgesarray[$i],$fulljsonarray["list"][$k]["id"])==0){
			$body = $body . '<div class="singleWidget"><a id="'.$fulljsonarray["list"][$k]["id"].'" class="badgeimage" href="https://www.badgecraft.eu/en/user-badges/'.$fulljsonarray["list"][$k]["id"].'"><img width="223px" height="223px" src="https://www.badgecraft.eu'.$fulljsonarray["list"][$k]["badgeClass"]["picture"].'" alt="none"></a><div class="descriptiondiv"><a class="titlelink" href="https://www.badgecraft.eu/en/user-badges/'.$fulljsonarray["list"][$k]["id"].'">'.$fulljsonarray["list"][$k]["bName"].'</a><span class="badgedescrption">: '.$fulljsonarray["list"][$k]["badgeClass"]["description"].'</span></div></div>';
			
			}else{
			
			}
		}
}

$body = $body . '</div>';


$html = $css . $body;

// output the HTML content
$pdf->writeHTML($html, true, false, true, false, '');

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


// reset pointer to the last page
$pdf->lastPage();

// ---------------------------------------------------------

//Close and output PDF document


$pdf->Output('badgecraft_'.$pdffileorigname.'', 'I');


//============================================================+
// END OF FILE
//============================================================+
