<?php
    require '../vendor/autoload.php';
    use PhpOffice\PhpSpreadsheet\Spreadsheet;
    use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

    $reader = new \PhpOffice\PhpSpreadsheet\Reader\Xlsx();    
    $spreadsheet = $reader->load("example1.xls");
    $sheetData = $spreadsheet->getActiveSheet()->toArray();
    $head = array();
    foreach( $sheetData[0] as $v => $value){
        $head[] = [$value];
    }
    $data = array(
        'thead' => $head,
        'tbody' => $sheetData
    );

    echo json_encode( $data );
?>