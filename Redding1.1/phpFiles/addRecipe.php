<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reciepe Added</title>
</head>
<body>
    <h1>Reciepe Added With Parameters:</h1>
 <?php 
 
 $receipe_name = $_GET["reciepeName"];
 $p_time = $_GET["preperationTime"];
 $category = $_GET["categories"];
 $ingrediants = $_GET["ingrediants"];
 $directions = $_GET["directions"];
 
 echo " Name". $receipe_name ."";
 echo " time".  $p_time ."";
 echo " Category".  $category."";
 echo " Ingrediants".  $ingrediants ."";
 echo " Directions".   $directions .""
 ?>
 
</body>
</html>