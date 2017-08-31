<?php
header('Access-Control-Allow-Origin: *');

   // Define database connection parameters
$host      = 'localhost';
$user      = 'root';
$password     = '';
$db      = 'meechok';
$cs      = 'utf8';

   // Set up the PDO parameters
$dsn  = "mysql:host=" . $host . ";port=3306;dbname=" . $db . ";charset=" . $cs;
$opt  = array(
   PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
   PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ,
   PDO::ATTR_EMULATE_PREPARES   => false,
   );
   // Create a PDO instance (connect to the database)
$pdo  = new PDO($dsn, $user, $password, $opt);

   // Retrieve specific parameter from supplied URL
$key  = strip_tags($_REQUEST['key']);
$data    = array();


   // Determine which mode is being requested
switch($key)
{

      // Add a new record to the technologies table
   case "create":

         // Sanitise URL supplied values 
   $id_card = filter_var($_REQUEST['id_card'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
   $name = filter_var($_REQUEST['name'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
   //$lname = filter_var($_REQUEST['lname'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
   $tel = filter_var($_REQUEST['tel'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
   $email = filter_var($_REQUEST['email'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
   $password = filter_var($_REQUEST['password'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);


         // Attempt to run PDO prepared statement
   try {
      $sql  = "INSERT INTO member(id_card, name , tel , email , password) VALUES(:id_card, :name, :tel , :email , md5(:password))";
      $stmt    = $pdo->prepare($sql);
      $stmt->bindParam(':id_card', $id_card, PDO::PARAM_STR);
      $stmt->bindParam(':name', $name, PDO::PARAM_STR);
      $stmt->bindParam(':tel', $tel, PDO::PARAM_STR);
      $stmt->bindParam(':email', $email, PDO::PARAM_STR);
      $stmt->bindParam(':password', $password, PDO::PARAM_STR);
      $stmt->execute();

      echo json_encode(array('message' => 'Congratulations the record ' . $name . ' was added to the database'));
   }
         // Catch any errors in running the prepared statement
   catch(PDOException $e)
   {
      echo $e->getMessage();
   }

   break;



      // Update an existing record in the technologies table
   case "update":
   $id_card = filter_var($_REQUEST['id_card'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
   $fname = filter_var($_REQUEST['fname'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
   $lname = filter_var($_REQUEST['lname'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
   $tel = filter_var($_REQUEST['tel'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
   $email = filter_var($_REQUEST['email'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
   $password = filter_var($_REQUEST['password'], FILTER_SANITIZE_STRING, FILTER_FLAG_ENCODE_LOW);
         // Sanitise URL supplied values
   $recordID      = filter_var($_REQUEST['recordID'], FILTER_SANITIZE_NUMBER_INT);

         // Attempt to run PDO prepared statement
   try {
      $sql  = "UPDATE member SET fname = :fname, lname = :lname, tel = :tel, email = :email, password = :password WHERE ser = :recordID";
      $stmt =  $pdo->prepare($sql);
      $stmt->bindParam(':id_card', $id_card, PDO::PARAM_STR);
      $stmt->bindParam(':fname', $fname, PDO::PARAM_STR);
      $stmt->bindParam(':lname', $lname, PDO::PARAM_STR);
      $stmt->bindParam(':tel', $tel, PDO::PARAM_STR);
      $stmt->bindParam(':email', $email, PDO::PARAM_STR);
      $stmt->bindParam(':password', $password, PDO::PARAM_STR);
      $stmt->bindParam(':recordID', $recordID, PDO::PARAM_INT);
      $stmt->execute();

      echo json_encode('Congratulations the record ' . $fname . ' ' . $lname . ' was updated');
   }
         // Catch any errors in running the prepared statement
   catch(PDOException $e)
   {
      echo $e->getMessage();
   }

   break;



      // Remove an existing record in the technologies table
   case "delete":

         // Sanitise supplied record ID for matching to table record
   $recordID   =  filter_var($_REQUEST['recordID'], FILTER_SANITIZE_NUMBER_INT);

         // Attempt to run PDO prepared statement
   try {
      $pdo  = new PDO($dsn, $user, $password);
      $sql  = "DELETE FROM member WHERE ser = :recordID";
      $stmt = $pdo->prepare($sql);
      $stmt->bindParam(':recordID', $recordID, PDO::PARAM_INT);
      $stmt->execute();

      echo json_encode('Congratulations the record ' . $fname . ' '. $lname .' was removed');
   }
         // Catch any errors in running the prepared statement
   catch(PDOException $e)
   {
      echo $e->getMessage();
   }

   break;
}

?>