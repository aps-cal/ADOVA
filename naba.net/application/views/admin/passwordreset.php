<DIV class="content">
   
   <p><a href="../public/home.php">Home</a> | 
   <a href="../admin/admin.php">Admin</a> | 
   <b>Password Reset</b></p>
   <H4>Password Reset</h4>
   <small>
   <style>
     table, tr, th,td {font-size:x-small;}
   </style>
   <form name="UserList" method="post">
   <input name="UserID" type="hidden" value="" />
   <input name="Status" type="hidden" value="" />
   <input name="ListOrder" type="hidden" value="<?=$ListOrder;?>" />
   <input name="PageMode" type="hidden" value="<?=$PageMode;?>" />
   <table class="report" width="60" width="100%">
      <tr>
         <th style="cursor:hand;" onclick="pageform.ListOrder.value = 'UserName'; pageform.submit();">Username</th>
         <th style="cursor:hand;" onclick="pageform.ListOrder.value = 'GivenName'; pageform.submit();">First&nbsp;Name</th>
         <th style="cursor:hand;" onclick="pageform.ListOrder.value = 'FamilyName'; pageform.submit();">Last&nbsp;Name</th>
         <th style="cursor:hand;" onclick="pageform.ListOrder.value = 'Email'; pageform.submit();">User&nbsp;Email</th>
         <th style="cursor:hand;" onclick="pageform.ListOrder.value = 'Status'; pageform.submit();">Status</th>
         <th style="cursor:hand;" onclick="pageform.ListOrder.value = 'Registered'; pageform.submit();">Registered</th>
         <th style="cursor:hand;" onclick="pageform.ListOrder.value = 'LastVisited'; pageform.submit();">Last&nbsp;Visited</th>
      </tr>
<?php foreach($results as $row):?>
      <tr>
         <td><?=$row['UserName'];?></td>
         <td nowrap><?=$row['FirstName'];?></td>
         <td nowrap><?=$row['LastName'];?></td>
         <td nowrap><?=$row['Email'];?></td>
         <td><Select onchange="if(this.value=='Delete'){
               if(!confirm('Delete user <?=$row['Email'];?>?')){
                  return(false);
               }
            }
            this.form.UserID.value = '<?=$row['UserID'];?>'; 
            this.form.Status.value = this.value;
            this.form.PageMode.value = 'Update';
            this.form.submit();">
            <option value="NewUser"<?php echo ($row['Status'] == "NewUser"?" Selected":"");?>>NewUser</option>
            <option value="Tutor"<?php echo ($row['Status'] == "Tutor"?" Selected":"");?>>Tutor</option>
            <option value="Manager"<?php echo ($row['Status'] == "Manager"?" Selected":"");?>>Manager</option>
            <option value="Admin"<?php echo ($row['Status'] == "Admin"?" Selected":"");?>>Admin</option>
            <option value="Register"<?php echo ($row['Status'] == "Register"?" Selected":"");?>>Register</option>
            <option value="Expired"<?php echo ($row['Status'] == "Expired"?" Selected":"");?>>Expired</option>
            <option value="Delete">Delete</option>
         </Select>
         </td>
         <td nowrap><?=$row['Registered'];?></td>
         <td nowrap><?=$row['LastVisited'];?></td>
      </tr>
<?php endforeach;?>
   </table>
   </form>
   </small>
</DIV> <!-- content -->
