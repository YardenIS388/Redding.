<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
  <?php
   
   $item = $_GET["item"];
   echo "You Added " . $item . "To Your Inventory";

   $amount = $_GET["amount"];
   echo "You Added " . $amount . "of The Item To Your Inventory";

   $Pdate = $_GET["date"];
   echo "The Purchase Date is:" . $Pdate . "";
  ?>

</body>
</html>