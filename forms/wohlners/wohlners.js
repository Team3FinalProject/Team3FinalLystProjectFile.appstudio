wohlners.onshow=function(s){
drpWohlners.clear()
query = "SELECT * FROM lyst l INNER JOIN `wohlners` t on l.lyst_id = t.lyst_id ORDER BY `lyst_name`"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + "375groupa3" + "&query=" + query)
  if (req.status == 200) {
    console.log(`req.responseText is a JSON string that looks like this: ${req.responseText}`)
  results = JSON.parse(req.responseText)
  console.log(`The parsed JSON string is converted to a JS object (an array or arrays): ${results} where results[0] is ${results[0]}, the first array in the JS results object.`)
  if (results.length == 0)
    lblWohlners.value = "There are no LYSTs in the database"
  else {
  let message = ""
  for (i = 0; i < results.length; i++)
    drpWohlners.addItem(message + results[i][1] + "\n")
    }
  } else 
      lblWohlners.value = "Error Code:" + req.status
}

btnWohlnersNext.onclick=function(){
  ChangeForm(recipeConfirmation)
}