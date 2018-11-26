<h1>World Database Application : [Using Code Igniter]</h1>
<?php echo form_open('world',array('id' => 'world'));?>
<fieldset>
    <label for="ui_continent">Continent:</label>
    <?php $js = 'id="continents" onchange="form.submit();"';
        echo form_dropdown('ui_continent', $continents, $ui_continent,$js);?>
    <!--<input type="button" value="Get Regions" onclick="this.form.submit();"/></br>-->
    <label for="ui_region">Region:</label>
    <?php $js = 'id="continents" onchange="form.submit();"';
        echo form_dropdown('ui_region', $regions, $ui_region,$js);?>
    <!--<input type="button" value="Get Counties" onclick="this.form.submit();"/></br>-->
    <label for="ui_country">Country:</label>
    <?php $js = 'id="continents" onchange="form.submit();"';
        echo form_dropdown('ui_country', $countries, $ui_country,$js);?>
    <!--<input type="button" value="Get Details" onclick="this.form.submit();"/></br>-->
</fieldset>
<?php echo form_close();?>
<?php if(isset($ui_country)):?>
    <fieldset>
 <h4>Country Details for <?php echo $ui_country;?></h4>
   <table>
        <tr><td>Continent</td><td align="right"><?php echo $details['Continent'];?></td></tr>
        <tr><td>Region</td><td align="right"><?php echo $details['Region'];?></td></tr>
        <tr><td>Capital City</td><td align="right"><?php echo $details['Capital'];?></td></tr>
        <tr><td >Population (million)</td><td align="right"><?php echo $details['Population'];?></td></tr>
        <tr><td >Life Expectancy</td><td align="right"><?php echo $details['LifeExpectancy'];?></td></tr>
        <tr><td >GNP</td><td align="right"><?php echo $details['LifeExpectancy'];?></td></tr>
        
    </table>
 </fieldset>
<fieldset>
<h4>Major Cities</h4>
    <table>
        <tr><td><b>City</b></td><td><b>District</b></td><td><b>Population</b></td></tr>
<?php foreach($cities As $city){?>
        <tr>
            <td><?php echo $city['City'];?></td>
            <td><?php echo $city['District'];?></td>
            <td align="right"><?php echo $city['Population'];?></td>
        </tr>
<?php }?>        
    </table>
</fieldset>
<fieldset>
<h4>Main Languages</h4>
    <table>
        <tr><td><b>Language</b></td><td><b>Usage</b></td><td><b>Official</b></td></tr>
    <?php foreach($languages As $language){?>
        <tr>
            <td><?php echo $language['Language'];?></td>
            <td align="right"><?php echo $language['Percentage'];?></td>
            <td><?php echo $language['Official'];?></td>
            
        </tr>
<?php }?>  
    </table>
</fieldset>
<?php endif;?>