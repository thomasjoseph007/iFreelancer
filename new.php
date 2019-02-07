
<?php
include("connect.php");
if(isset($_POST["submit"]))
{
	$name=$_POST['name'];
	$age=$_POST['age'];
	$address=$_POST['hname'];
	$query="INSERT INTO tbl_register(rname,rage,rhname)VALUES('$name','$age','$address')";
	$obj=mysqli_query($db,$query);

}
?>
</!DOCTYPE html>
<html>
<head>
<title>New work</title>
</head>
<body>
	<br>
	<center>
<form method="post" action="#">
	<table>
<tr><td><label>Name</label></td>
<td><input type="text" name="name"></td></tr>
<tr><td><label>Age</label></td>
<td><input type="number" name="age"></td></tr>
<tr><td><label>Address</label></td>
<td><input type="text" name="hname"></td></tr>
<tr></tr>	
<tr><td></td><td><button  type="submit" name="submit">SUBMIT</button></td></tr>
</table>
</form>
</center>
</body>
</html>