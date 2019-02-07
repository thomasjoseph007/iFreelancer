<?php
include("connect.php");
?>
</!DOCTYPE html>
<html>
<head>
<title>NewView</title>
</head>
<body>
<table>
<tr>
        <th>NAME</th>
        <th>AGE</th>
        <th>ADDRESS</th>
        </tr>
        <?php 
$qury="select * from tbl_register";
$result=mysqli_query($conn,$qury) or die("error");                      
      while($row=mysqli_fetch_array($result))
    {
      ?>
       <tr>
        <td><?php echo $row[1] ?></td>
        <td><?php echo$row[2]?></td>
        <td><?php echo$row[3]?></td>
         </td>
      </tr>
  </table>
</body>
</html>