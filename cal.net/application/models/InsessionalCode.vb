

Public Function GetSubmissions()
    ShowProgress (1 / 20) ' To show it has started
    On Error GoTo dbErrorHandler
    Dim sFieldList, sForms, FormID, cSQL, xmlDoc As String
    Dim aForms(10), pageURL As String
    Dim FormTotal, FormCount As Integer
    Dim cnn As ADODB.Connection
    Dim rsForms As ADODB.Recordset
    
    sFieldList = ""
    '
    ' Online forms containing Submissions are listed in the table "Online_Forms"
    '
    ' As each enrolment form is slightly different and my be changed in the future, there is
    ' an ordered list of fields for each form in table "Enrolment_Fields" and this is table is
    ' then used by the query/view "Enrolment_Field_Matrix" to map the fields in the submissions
    ' report received from SiteBuilder onto the correct field in the "InSessional_Submissions" table.
    Set cnn = New ADODB.Connection
    Set rsForms = New ADODB.Recordset
    cnn.Open "Provider=Microsoft.ACE.OLEDB.12.0; Data Source=" & CurrentDb.Name & ";"
    cSQL = "SELECT Form_ID, Form_URL " _
        & "FROM Online_Forms " _
        & "WHERE Programme = 'In-sessional' AND Form_Enabled " _
        & "ORDER BY Form_Name"
    rsForms.Open cSQL, cnn, adOpenKeyset, adLockOptimistic
    FormTotal = rsForms.RecordCount
    If FormTotal > 0 Then
        rsForms.MoveFirst
    End If
    FormCount = 1
    Do While Not rsForms.EOF
        pageURL = "https://sitebuilder.warwick.ac.uk/sitebuilder2/forms/submissions/download.xml?"
        pageURL = pageURL & "page=" & Trim(rsForms("Form_URL"))
    '    pageURL = pageURL & "&startDate=" & Format(Now() - 30, "dd/mm/yyyy") & "&endDate=01/12/2012&filter=&forceBasic=true"
        xmlDoc = GetXML(pageURL)
        xmlDoc = Replace(xmlDoc, "<filter/>", "<filter></filter>")
        XML2Record xmlDoc, rsForms("Form_ID")
        ShowProgress (FormCount / FormTotal)
        DoEvents
        FormCount = FormCount + 1
        rsForms.MoveNext
    Loop
    rsForms.Close
    cSQL = "UPDATE InSessional_Submissions S, Current_Values CV " _
        & "SET S.Academic_Year = CV.Academic_Year, S.Academic_Term = CV.Academic_Term " _
        & "WHERE S.Academic_Year IS NULL "
    DoCmd.SetWarnings (False)
    DoCmd.RunSQL (cSQL)
    DoCmd.SetWarnings (True)
    cnn.Close
    Set cnn = Nothing
    ShowProgress (1)
    DoEvents
    MsgBox ("Process Complete")
    ShowProgress (0)

Exit Function

dbErrorHandler:
    'Checks if key violation error. Cancels update if it is.
    If Err = -2147467259 Then ' Database locked
        MsgBox "Database locked - please try later"
        Resume Abort
    ElseIf Err = -2147352571 Then ' Type Mismatch (probably a date format)
        Resume Next
    Else
        MsgBox Err.Number & ": " & Err.Description
        Resume Next
    End If
Abort:
    MsgBox "Process Aborted"
    Set rsForms = Nothing
    'cnn.Rollback
    cnn.Close
    Set cnn = Nothing
End Function

Private Function GetXML(URL)
'   Dim xmlDoc As Object
'   Set xmlDoc = New DOMDocument
    Dim xmlHttpRequest As Object
    Dim Username, Password As String
    Username = "el-apiuser"
    Password = "TimKelly"
    Set xmlHttpRequest = New XMLhttp
    With xmlHttpRequest
        .Open "POST", URL & "&forcebasic=true", False, Username, Password
        .setRequestHeader "User-Agent", "Andrew P Smith, Language Centre, 07746412190, andrew.p.smith@warwick.ac.uk"
        .setRequestHeader "Content-Type", "application/x-www-form-urlencoded"
'        .setRequestHeader "If-Modified-Since:", "Tue, 11 Jul 2000 18:23:51 GMT"
        .Send
    End With
    'Waits for page to be received
    Do While xmlHttpRequest.readyState <> 4: DoEvents: Loop
    ' Return XML document
    GetXML = FixXML(xmlHttpRequest.responseText)
    ' Close objects
    Set xmlHttpRequest = Nothing
End Function

Private Function FixXML(xmlString)
    'Fixes the XML returned from formbuilder to be valid XML
    Dim reg As RegExp
    Dim lReplaceString As String
    Set reg = New RegExp
    reg.Multiline = False
    'Matches on xml and "<filter>" header in xml
    reg.Pattern = "<\?xml[\s\S]*</filter>"
    lReplaceString = "<formsbuider-submissions>"
    FixXML = reg.Replace(xmlString, lReplaceString)
End Function

Private Sub XML2Record(xmlString, Form_ID)
    On Error GoTo dbErrorHandler
    Dim xmlSelectString As String
    xmlSelectString = "/formsbuider-submissions/submission"
    
    'Initialise connection to database table
    Dim cnn As ADODB.Connection
    Dim rst As ADODB.Recordset
    Set cnn = New ADODB.Connection
    Set rst = New ADODB.Recordset
    cnn.Open "Provider=Microsoft.ACE.OLEDB.12.0; Data Source=" & CurrentDb.Name & ";"
    rst.Open "SELECT * FROM InSessional_Submissions", cnn, adOpenKeyset, adLockOptimistic
    
    'Loads Xml string into a DOMDocument so we can iterate through records
    Dim doc As DOMDocument60
    Set doc = New DOMDocument60
    doc.SetProperty "ProhibitDTD", False
    doc.SetProperty "ResolveExternals", False
    doc.SetProperty "ValidateOnParse", False
    doc.async = False
    
    doc.loadXML (xmlString)
    
    If (doc.parseError.errorCode <> 0) Then
      Dim myErr
      Set myErr = doc.parseError
      MsgBox ("You have error: " & myErr.reason)
    End If

  
    Dim nod As Object
    'Isolates submissions and loads node list into nolPrinc
    Set nolPrinc = doc.selectNodes(xmlSelectString)
    Processed = False
    For Each nod In nolPrinc
        rst.AddNew
        'For each submission, sets field list as list of child nodes
        Set nolChild = nod.childNodes
        ' Check XML for each node
'        For n = 0 To nolChild.length - 1
'            MsgBox nolChild.Item(n).XML
'        Next
        'Iterates through child nodes and adds field data to table
        nIndex = 1
        For Each nodP In nolChild
            Processed = True
            ' Microsoft XML does not give access to the XML property name
            ' So it is necessary to strip the FieldName out of the raw XML
            nameStart = InStr(nodP.XML, "name=""") + 6
            nameStop = InStr(nameStart, nodP.XML, """>")
            FieldName = Mid(nodP.XML, nameStart, nameStop - nameStart)
            FieldName = Replace(Trim(FieldName), " ", "_")
'            MsgBox ("Form:" & Str(Form_ID) & "  Index:" & Str(nIndex) & "  Field:" & FieldName)
            If Len(nodP.Text) > 250 Then
                nodP.Text = Left(nodP.Text, 250)
            End If
            rst.Fields(FieldName) = nodP.Text
NextField:
            nIndex = nIndex + 1
        Next
        ' Saves fields to table. If duplicate record, error thrown and moves to next record.
        ' There is probably a better way of doing this to prevent trying to add submissions
        ' we've already saved but this will do for now.
        rst.Update
NextRecord:
    Next
'    If Not Processed Then
'        MsgBox ("This XML file did not process; " & xmlString)
'    End If
    ' Close objects
    rst.Close
    Set rst = Nothing
    'cnn.CommitTrans
    cnn.Close
    Set cnn = Nothing
    Set doc = Nothing
    Set nodP = Nothing
    Set nod = Nothing
    Set nolChild = Nothing
    Set nolPrinc = Nothing
Exit Sub
    
dbErrorHandler:
    'Checks if key violation error. Cancels update if it is.
    If Err = -2147217887 Then
        rst.CancelUpdate
        Resume NextRecord
    ElseIf Err = -2147352571 Then ' Type Mismatch (probably a date format)
        Resume Next
    ElseIf Err = 3265 Then 'Checks if xml field not matching InSessional_Submissions Table
        MsgBox "Enrolment Form (" & Form_ID & ") field """ & FieldName & """ is not in InSessional_Submissions table"
        Resume NextField
    ElseIf Err = -2147467259 Then ' Database locked
        MsgBox "Database locked - please try later"
        Resume Abort
    Else
        MsgBox Err.Number & ": " & Err.Description
        Resume Next
    End If
Abort:
    cnn.Close
    Set cnn = Nothing
    MsgBox "Process Aborted"
End Sub

Public Function UpdateOnlineLists()
    '
    ' NOTE to other coders
    '
    ' When uploading lists to the Internet, list values may not include special characters, especially &.
    ' So if a list appears short, look for illegal characters in the list values
      
    ' Clear Progress Meter
    ShowProgress (0)
    ShowProgress (1 / 20) ' To show it has started
    ' Special encoding of carriage return & line feed for use in a URL
    Dim URLCRLF As String
    URLCRLF = "%0d%0a"
    CRLF = Chr(13) & Chr(10)
    ' Initialise connection to database table
    Dim cnn As ADODB.Connection
    Dim rstList, rstVals As ADODB.Recordset
    Set cnn = New ADODB.Connection
    Set rstList = New ADODB.Recordset
    Set rstVals = New ADODB.Recordset
    cnn.Open "Provider=Microsoft.ACE.OLEDB.12.0; Data Source=" & CurrentDb.Name & ";"
    ' Component strings for building the POST URL.
    Dim sqlList, sqlValues, strValues As String
    sqlLists = "SELECT Form_URL, Element_ID, List_Name, List_Description, List_Query " _
        & "FROM Online_Forms F, Online_Lists L " _
        & "WHERE F.Form_ID = L.Form_ID AND L.List_Enabled "
    rstList.Open sqlLists, cnn, adOpenKeyset, adLockOptimistic
    ListCount = 0
    ListTotal = rstList.RecordCount()
    rstList.MoveFirst
    Do While Not rstList.EOF
        ListCount = ListCount + 1
        sqlValues = rstList("List_Query")
        rstVals.Open sqlValues, cnn, adOpenKeyset, adLockOptimistic
        strValues = ""
        Do While Not rstVals.EOF
            strValues = strValues & rstVals.Fields.Item(0) & CRLF
            rstVals.MoveNext
        Loop
        rstVals.Close
        If strValues <> "" Then
            httpPost2List rstList("Form_URL"), rstList("Element_ID"), rstList("List_Name"), strValues
        Else
            MsgBox "No Values Found in " & sqlValues
        End If
        ShowProgress (ListCount / ListTotal)

        rstList.MoveNext
    Loop
    rstList.Close
    cnn.Close
    Set cnn = Nothing
    ShowProgress (1)
    DoEvents
    MsgBox ("Process Complete")
    ShowProgress (0)

End Function


Private Sub httpPost2List(strPage, strElementID, strListName, strList, _
    Optional bRequired As Boolean, Optional bLabelOnTop As Boolean, _
    Optional strLabel As String)

    ' Configure HTML Request Object and log into the website
    Dim xmlHttpRequest, xmlDoc As Object
    Set xmlHttpRequest = New XMLhttp
    ' APIUser restricted access to these LC pages
    Dim strPageURL, strParame, strUsername, strPassword As String
    ' Build URL plus GET parameters
    strPageURL = "https://sitebuilder.warwick.ac.uk/sitebuilder2/forms/edit/editList.html?forcebasic=true"
    strPageURL = strPageURL & "&page=" & strPage
    strPageURL = strPageURL & "&elementId=" & strElementID
    ' Build parameter string with POST parameters
    StrParams = "name=" & strListName
    StrParams = StrParams & "&tmpDescription=" & URLEncode(strLabel)
    StrParams = StrParams & "&tmpDiscreteValues=" & strList
    If bLabelOnTop Then
        StrParams = StrParams & "&labelOnTop=true"
    End If
    If bRequired Then
        StrParams = StrParams & "&required=true"
    End If
    strUsername = "el-apiuser"
    strPassword = "TimKelly"
'    MsgBox ("GET String:" & Chr(13) & Chr(10) & strPageURL & Chr(13) & Chr(10) & "POST Values:" & Chr(13) & Chr(10) & strParams)
    xmlHttpRequest.Open "POST", strPageURL, True, strUsername, strPassword
    xmlHttpRequest.setRequestHeader "User-Agent", "Andrew P Smith, CAL, 07746412190, andrew.p.smith@warwick.ac.uk"
    xmlHttpRequest.setRequestHeader "Content-type", "application/x-www-form-urlencoded"
    xmlHttpRequest.setRequestHeader "Content-length", Len(Params)
    xmlHttpRequest.setRequestHeader "Connection", "close"
    xmlHttpRequest.Send (StrParams)
    Wait4Request xmlHttpRequest
    Set xmlHttpRequest = Nothing
End Sub

Private Sub httpPost2Comment(strPage, strElementID, strCommentName, strCommentText)

    ' Configure HTML Request Object and log into the website
    Dim xmlHttpRequest, xmlDoc As Object
    Set xmlHttpRequest = New XMLhttp
    ' APIUser restricted access to these LC pages
    Dim strPageURL, strParame, strUsername, strPassword As String
    ' Build URL plus GET parameters
    strPageURL = "https://sitebuilder.warwick.ac.uk/sitebuilder2/forms/edit/editList.html?forcebasic=true"
    strPageURL = strPageURL & "&page=" & strPage
    strPageURL = strPageURL & "&elementId=" & strElementID
    strPageURL = strPageURL & "&submit=Save"
    ' Build parameter string with POST parameters
    StrParams = "name=" & strCommentName
    StrParams = StrParams & "&tmpDescription=" & URLEncode(strCommentText)
    strUsername = "lc-apiuser"
    strPassword = "l4ngcntr91"
'    MsgBox ("GET String:" & Chr(13) & Chr(10) & strPageURL & Chr(13) & Chr(10) & "POST Values:" & Chr(13) & Chr(10) & strParams)
    xmlHttpRequest.Open "POST", strPageURL, True, strUsername, strPassword
    xmlHttpRequest.setRequestHeader "User-Agent", "Andrew P Smith, Language Centre, 02476528440, a.p.smith@warwick.ac.uk"
    xmlHttpRequest.setRequestHeader "Content-type", "application/x-www-form-urlencoded"
    xmlHttpRequest.setRequestHeader "Content-length", Len(Params)
    xmlHttpRequest.setRequestHeader "Connection", "close"
    xmlHttpRequest.Send (StrParams)
    Wait4Request xmlHttpRequest
    Set xmlHttpRequest = Nothing
End Sub



'Dim ProgressBar As Object
Private Function ShowProgress(percent)
    Dim frm As Form
    For Each frm In Forms
        For Each obj In frm
            If obj.Name = "ProgressBar" Then
                If TypeOf frm.ProgressBar Is Rectangle Then
                    frm.Progress (percent)
                End If
            End If
        Next
    Next
End Function


Public Function ImportTransactions()
    '
    ' Information on WorldPay is stored here http://go.warwick.ac.uk/onlinepayment
    ' Transactions are obtained from https://onlinepayment.warwick.ac.uk
    '
    'Payment refused
    '[c] Your payment has been refused - please contact your bank for further information
    'The details of this refused payment are shown below:
    'Description: Leisure Courses(Winter)
    'Amount: 182.0 (GBP)
    'Warwick Transaction ID: 094d736823271c9b0123280931f7642e
    'Payment Provider ID: 1330820979
    'If you would like to try again with different card details you can return to the website
 

    '
    '
    On Error GoTo dbErrorHandler
    ShowProgress (1 / 20) ' To show it has started
    Dim sText As String
    Dim sFile As String
    Dim nSourceFile As Integer
    Dim rMatch As match
    Dim rMatches As MatchCollection
    Dim templateFile As Office.FileDialog
    
    Dim reg As RegExp
    
    'initialises open dialog box
    Set templateFile = Application.FileDialog(msoFileDialogFilePicker)
    
    templateFile.AllowMultiSelect = False
    templateFile.Title = "Select HTML file containing transactions"
    templateFile.Filters.Add "HTML files", "*.htm;*.html", 1

    'reads filename of transaction html file
    If (templateFile.Show = -1) Then
         sFile = templateFile.SelectedItems(1)
    Else
         Exit Function
    End If
    
    'Reads in html file of transactions as string
    nSourceFile = FreeFile
    Open sFile For Input As #nSourceFile
    sText = Input$(LOF(1), 1)
    Close
    
    '
    ' Previously the download of transactions was manual
    ' but it should also be possible to do this automatically
    ' login permissions permitting
    ' for security reasons these will need to be collected each time
    ' unless it is possible to enable the API user for this task?
    '

    ' ATTEMPT ABORTED ... too many secure flow controls in HTTPS
    
    Dim fp, fp2 As Double ' Record & Field pointers
    Dim NumRows As Integer
    fp = 0
    Dim FieldValue As Variant
    ' Strip "&pound;" codes (or convert to "£")
    sText = Replace(sText, "&pound;", "") ' "£"
    sText = Replace(sText, Chr(13), "") ' CarriageReturn
    sText = Replace(sText, Chr(10), "") ' Linefeed
    sText = Replace(sText, Chr(9), "") ' Tab
    sText = Replace(sText, "class=""RefundLive""", "class=""Live""")
    sText = Replace(sText, "class=RefundLive", "class=""Live""")
    sText = Replace(sText, "class=""PurchaseLive""", "class=""Live""")
    sText = Replace(sText, "class=PurchaseLive", "class=""Live""")
    sText = Replace(sText, "<TD", "<td")
    sText = Replace(sText, "<TR", "<tr")
    'Initialise connection to database table
    Set cnn = New ADODB.Connection
    Set rst = New ADODB.Recordset
    cnn.Open "Provider=Microsoft.ACE.OLEDB.12.0; Data Source=" & CurrentDb.Name & ";"
    'cnn.BeginTrans
    rst.Open "SELECT * FROM Transactions", cnn, adOpenKeyset, adLockOptimistic
    ' Find position of last Transaction Tag
    fp = InStrRev(sText, "<tr class=""Live"">")
    fp2 = fp + 4
    fp = InStr(fp2, sText, "<td")
    fp = InStr(fp, sText, ">") + 1
    fp2 = InStr(fp, sText, "<")
    NumRows = Val(Trim(Mid(sText, fp, fp2 - fp)))
    ShowProgress (0)
    ' Find position of first Transaction Tag
    fp = InStr(sText, "<tr class=""Live"">")
    fp2 = fp + 4
'    MsgBox (Str(fp) & " - " & Str(NumRows))
    Do While fp > 0
        rst.AddNew
        fp = InStr(fp2, sText, "<td")
        fp = InStr(fp, sText, ">") + 1
        fp2 = InStr(fp, sText, "<")
        FieldValue = Trim(Mid(sText, fp, fp2 - fp))
        ShowProgress (Val(FieldValue) / NumRows)
'        MsgBox (Str(fp) & " - " & Str(fp2) & " => " & FieldValue)
        rst.Fields("Transaction_RowNum") = FieldValue
        fp = InStr(fp2, sText, "<td")
        fp = InStr(fp, sText, ">") + 1
        fp2 = InStr(fp, sText, "<")
        FieldValue = Trim(Mid(sText, fp, fp2 - fp))
'        MsgBox (Str(fp) & " - " & Str(fp2) & " => " & FieldValue)
        rst.Fields("Transaction_Account") = FieldValue
        fp = InStr(fp2, sText, "<td")
        fp = InStr(fp, sText, ">") + 1
        fp2 = InStr(fp, sText, "<")
        FieldValue = Trim(Mid(sText, fp, fp2 - fp))
'        MsgBox (Str(fp) & " - " & Str(fp2) & " => " & FieldValue)
        rst.Fields("TransactionID") = FieldValue
        fp = InStr(fp2, sText, "<td")
        fp = InStr(fp, sText, ">") + 1
        fp2 = InStr(fp, sText, "<")
        FieldValue = Trim(Mid(sText, fp, fp2 - fp))
'        MsgBox (Str(fp) & " - " & Str(fp2) & " => " & FieldValue)
        rst.Fields("Transaction_Status") = FieldValue
        fp = InStr(fp2, sText, "<td")
        fp = InStr(fp, sText, ">") + 1
        fp2 = InStr(fp, sText, "<")
        FieldValue = Trim(Mid(sText, fp, fp2 - fp))
'        MsgBox (Str(fp) & " - " & Str(fp2) & " => " & FieldValue)
        rst.Fields("Transaction_Time") = FieldValue
        fp = InStr(fp2, sText, "<td")
        fp = InStr(fp, sText, ">") + 1
        fp2 = InStr(fp, sText, "<")
        FieldValue = Trim(Mid(sText, fp, fp2 - fp))
'        MsgBox (Str(fp) & " - " & Str(fp2) & " => " & FieldValue)
        rst.Fields("Transaction_Type") = FieldValue
        fp = InStr(fp2, sText, "<td")
        fp = InStr(fp, sText, ">") + 1
        fp2 = InStr(fp, sText, "<")
        FieldValue = Trim(Mid(sText, fp, fp2 - fp))
'        MsgBox (Str(fp) & " - " & Str(fp2) & " => " & FieldValue)
        rst.Fields("Transaction_Reference") = FieldValue
        fp = InStr(fp2, sText, "<td")
        fp = InStr(fp, sText, ">") + 1
        fp2 = InStr(fp, sText, "<")
        FieldValue = Trim(Mid(sText, fp, fp2 - fp))
'        MsgBox (Str(fp) & " - " & Str(fp2) & " => " & FieldValue)
        rst.Fields("Transaction_Amount") = FieldValue
        rst.Update
NextRecord:
        fp = InStr(fp2, sText, "<tr class=""Live"">")
        If fp > 0 Then
            fp2 = InStr(fp, sText, ">")
        End If
        DoEvents
   Loop
    ' Close objects
    rst.Close
    Set rst = Nothing
    'cnn.CommitTrans
    cnn.Close
    Set cnn = Nothing
    ShowProgress (1)
    DoEvents
    MsgBox ("Process Complete")
    ShowProgress (0)
Exit Function
    
dbErrorHandler:
    
    If Err = -2147217887 Then
        ' Key violation error -> Cancel update
        rst.CancelUpdate
        Resume NextRecord
    ElseIf Err = -2147467259 Then ' Database locked
        MsgBox "Database locked - please try later"
        Resume Abort
    ElseIf Err = -2147352571 Then
        ' Data type mismatch -> Continue
        Resume Next
    ElseIf Err = -2147467259 Then
        MsgBox Err.Number & ": " & Err.Description
        Resume Abort
    ElseIf Err = 3709 Then
        MsgBox Err.Number & ": " & Err.Description
        Resume Abort
    ElseIf Err = 3265 Then
        MsgBox Err.Number & ": " & Err.Description
        Resume Abort
    ElseIf Err = 3704 Then
        MsgBox Err.Number & ": " & Err.Description
        Resume Abort
    Else
        MsgBox Err.Number & ": " & Err.Description
        Resume Next
    End If
Abort:
    rst.Close
    Set rst = Nothing
    'cnn.Rollback
    cnn.Close
    Set cnn = Nothing
    MsgBox ("Process Aborted")
End Function

Public Function ProcessTransactions()
    Dim rst1 As ADODB.Recordset
    Dim rst2 As ADODB.Recordset
    ShowProgress (1 / 20) ' To show it has started
'    On Error GoTo dbErrorHandler
    Dim cnn As ADODB.Connection
    Set cnn = New ADODB.Connection
    Dim cmd As New ADODB.Command
    cnn.Open "Provider=Microsoft.ACE.OLEDB.12.0; Data Source=" & CurrentDb.Name & ";"
'    cnn.BeginTrans
    cmd.ActiveConnection = cnn
    ' Mark Submissions Payment "Received" where transactionID is "CAPTURED"
    cmd.CommandText = "UPDATE InSessional_Submissions AS S, Transactions AS T " _
        & "SET S.Payment_Status = 'Received' " _
        & "WHERE S.TransactionID = T.TransactionID " _
        & "AND T.Transaction_Type='PurchaseLive' " _
        & "AND T.Transaction_Status='CAPTURED' " _
        & "AND (S.Payment_Status='Pending' OR S.Payment_Status='Failed');"
    cmd.Execute
    ShowProgress (1 / 6)
    DoEvents
    ' Mark Submissions Payment "Received" where a value has been added in Receipt"
    cmd.CommandText = "UPDATE InSessional_Submissions AS S " _
        & "SET S.Payment_Status = 'Received' " _
        & "WHERE S.Receipt Is Not Null " _
        & "AND (S.Payment_Status='Pending' OR S.Payment_Status='Failed') "
    cmd.Execute
    ShowProgress (2 / 6)
    DoEvents
    ' Mark Submissions Payment "Failed" when an online payment has not been confirmed after 7 days"
    cmd.CommandText = "UPDATE InSessional_Submissions AS S, Transactions AS T " _
        & "SET S.Payment_Status = 'Failed' " _
        & "WHERE S.TransactionID is not null " _
        & "AND S.Submission_Time + 7 < Now() " _
        & "AND S.Payment_Status='Pending';"
    cmd.Execute
    ShowProgress (3 / 6)
    DoEvents
    ' Check for refunds
    cmd.CommandText = "UPDATE InSessional_Submissions AS S, Transactions AS T " _
        & "SET S.Payment_Status = 'Refunded' " _
        & "WHERE S.TransactionID = T.TransactionID " _
        & "AND T.Transaction_Type = 'RefundLive' " _
        & "AND T.Transaction_Status = 'OK' "
    cmd.Execute
    ShowProgress (5 / 6)
    DoEvents

'    ' Where Students have made more than one submission for the same course,
'    ' where there have been issues with credit card payments for example,
'    ' then make sure that the submission/transaction that has been paid
'    ' is the one that is recorded in Register.
'    Set rst1 = New ADODB.Recordset
'    cSQL = "SELECT Student_ID, Class_ID, Submission_Time " _
'        & "FROM Insessional_Registers " _
'        & "WHERE (Payment_Status = 'Pending' OR Payment_Status = 'Failed') " _
'        & "AND Class_ID IS NOT NULL AND Student_ID IS NOT NULL "
'    rst1.Open cSQL, cnn, adOpenKeyset, adLockOptimistic
'    rst1.MoveFirst
'    Do While Not rst1.EOF
'        Set rst2 = New ADODB.Recordset
'        cSQL = "SELECT S1.Submission_Time " _
'            & "FROM InSessional_Submissions AS S1, (" _
'            & "   SELECT S3.Student_ID, S3.Class_ID, S3.Payment_Status, max(S3.submission_time) AS Submission_Time " _
'            & "   FROM InSessional_Submissions AS S3 " _
'            & "   GROUP BY S3.Student_ID, S3.Class_ID, S3.Payment_Status " _
'            & "   HAVING S3.Payment_Status='Received' " _
'            & ") AS S2 " _
'            & "WHERE S1.Student_ID = S2.Student_ID " _
'            & "AND S1.Class_ID = S2.Class_ID " _
'            & "AND S1.Submission_Time = S2.Submission_Time " _
'            & "AND S1.Student_ID = " & rst1("Student_ID") & " " _
'            & "AND S1.Class_ID = " & rst1("Class_ID") & " "
'        rst2.Open cSQL, cnn, adOpenDynamic, adLockReadOnly
'        If Not (rst2.BOF And rst2.EOF) Then
'            rst1("Submission_Time") = rst2("Submission_Time")
''            MsgBox "Student " & rst1("Student_ID") & " / Class " & rst1("Class_ID") & " Submission Time Updated!"
'            rst1.Update
'        End If
'        rst2.Close
'        Set rst2 = Nothing
'        rst1.MoveNext
'    Loop
'    rst1.Close
'    Set rst1 = Nothing
'    ShowProgress (3 / 6)
    DoEvents
    ' Update the payment status in the Registers from the InSessional_Submissions table
'    cmd.CommandText = "UPDATE Insessional_Registers AS R, InSessional_Submissions AS S " _
'        & "SET R.Payment_Status = 'Received', R.Payment_Received = TRUE " _
'        & "WHERE S.Payment_Status = 'Received' " _
'        & "AND (R.Payment_Status = 'Pending' OR R.Payment_Status = 'Failed') " _
'        & "AND R.Student_ID = S.Student_ID " _
'        & "AND R.Class_ID = S.Class_ID  " _
'        & "AND R.Submission_Time = S.Submission_Time "
'    cmd.Execute
'    ShowProgress (4 / 6)
    ' Update Registers with refunds
'    cmd.CommandText = "UPDATE Insessional_Registers AS R, InSessional_Submissions AS S " _
'        & "SET R.Payment_Status = 'Refunded', R.Payment_Received = TRUE " _
'        & "WHERE S.Payment_Status = 'Refunded' " _
'        & "AND R.Payment_Status = 'Received' " _
'        & "AND R.Payment_Received " _
'        & "AND R.Refund_Payment " _
'        & "AND R.Student_ID = S.Student_ID " _
'        & "AND R.Class_ID = S.Class_ID  " _
'        & "AND R.Submission_Time = S.Submission_Time "
'    cmd.Execute
    ShowProgress (6 / 6)
    DoEvents
 '   MsgBox ("Process Complete")
    ShowProgress (0)
    Set cmd = Nothing
    Set rst = Nothing
'    cnn.CommitTrans
    cnn.Close
    Set cnn = Nothing
    ShowProgress (1)
    DoEvents
    MsgBox ("Process Complete")
    ShowProgress (0)

Exit Function

dbErrorHandler:
'    If Err = -2147217887 Then
'        ' Key violation error -> Cancel update
'        rst.CancelUpdate
'        Resume NextRecord
'    Else
    If Err = -2147352571 Then
        ' Data type mismatch -> Continue
        Resume Next
    ElseIf Err = -2147217913 Then
        ' Data type mismatch -> Continue
        Resume Next
'    ElseIf Err = -2147217904 Then
'       ' Data type mismatch -> Continue
'        Resume Next
    ElseIf Err = -2147467259 Then ' Database locked
        MsgBox "Database locked - please try later"
        Resume Abort
    ElseIf Err = -2147467259 Then
        MsgBox Err.Number & ": " & Err.Description
        Resume Abort
    ElseIf Err = 3709 Then
        MsgBox Err.Number & ": " & Err.Description
        Resume Abort
    ElseIf Err = 3265 Then
        MsgBox Err.Number & ": " & Err.Description
        Resume Abort
    ElseIf Err = 3704 Then
        MsgBox Err.Number & ": " & Err.Description
        Resume Abort
    Else
        MsgBox Err.Number & ": " & Err.Description
        Resume Next
    End If
Abort:
    MsgBox ("Process Aborted")
    Set cmd = Nothing
'    cnn.Rollback
    cnn.Close
    Set cnn = Nothing
    ShowProgress (0)
End Function





''''''''''''''''''''''''''''''''''''
' SAMPLE CODE MAY BE DELETED LATER '
''''''''''''''''''''''''''''''''''''









Public Function DownloadTransactions()
    ' Create internet explorer object
'    Dim xmlHttpRequest As Object
'    Dim Username, Password As String
'    Username = "lc-apiuser"
'    Password = "l4ngcntr91"
'
'    FollowHyperlink "https://onlinepayment.warwick.ac.uk", True
'    Set xmlHttpRequest = New XMLhttp
'    With xmlHttpRequest
'        .Open "POST", "https://onlinepayment.warwick.ac.uk", False, Username, Password
'        .setRequestHeader "User-Agent", "Andrew P Smith, Language Centre, 02476672903, a.p.smith@warwick.ac.uk"
'        .setRequestHeader "Content-Type", "application/x-www-form-urlencoded"
''        .setRequestHeader "If-Modified-Since:", "Tue, 11 Jul 2000 18:23:51 GMT"
'        .send
'    End With
'    'Waits for page to be received
'    Do While xmlHttpRequest.readyState <> 4: DoEvents: Loop
'        MsgBox (xmlHttpRequest.responseText)
'    ' Return XML document
'    'GetXML = FixXML(xmlHttpRequest.responseText)
'    ' Close objects
'    Set xmlHttpRequest = Nothing


    ' Displays IE window for logging into Warwick site.
'    With IExp
'        .Height = 328
'        .Width = 521
'        .Left = 0
'        .Top = 0
'        .MenuBar = 0
'        .statusbar = 0
'        .Toolbar = 0
''        .navigate "https://websignon.warwick.ac.uk/origin/slogin?shire=https%3A%2F%2Fwww2.warwick.ac.uk%2Fsitebuilder2%2Fshire-read&providerId=urn%3Awww2.warwick.ac.uk%3Asitebuilder2%3Aread%3Aservice&target=http%3A%2F%2Fwww2.warwick.ac.uk%2Finsite%2F"
'        .navigate "https://onlinepayment.warwick.ac.uk"
'        Do While .Busy: DoEvents: Loop
'        Do While .readyState <> 4: DoEvents: Loop
'        .Visible = True
'        MsgBox "Please login and click OK to continue.", vbOKOnly, "Login"
'        .Visible = True
'    End With
End Function

Public Function EmailPaymentQuery()
    ShowProgress (1 / 20) ' To show it has started
   ' On Error GoTo dbErrorHandler
    Dim cnn As ADODB.Connection
    Dim rsMailList, rsEmails As ADODB.Recordset
    Dim MyOutlook As Outlook.Application
    Dim MyOutbox As Outlook.Folder
    Dim MyMail As Outlook.MailItem
    Dim SubjText, BodyText, cSQL As String
    Dim EmailCount, EmailTotal As Integer
    '
    ' NOTE:
    ' Although it would be possible to confirm module places entirely within the InSessional_Submissions table,
    ' record in this table have not yet been reconciled with students or registers and therefore
    ' have not contributed to number of places available on any given module. Therefore, it is best
    ' to only confirm places once they have been transferred to the module registers and the place
    ' itself is confirmed. Also the submissions file may be deleted but registers should be more
    ' permanent so less chance of resending confirmations.
    '
    Set MyOutlook = New Outlook.Application
    Set cnn = New ADODB.Connection
    Set rsMailList = New ADODB.Recordset
    Set rsEmails = New ADODB.Recordset
    cnn.Open "Provider=Microsoft.ACE.OLEDB.12.0; Data Source=" & CurrentDb.Name & ";"
    'cnn.BeginTrans
    ' Module_Occurrences MO
    ' AND MO.Class_ID = R.Class_ID
    cSQL = "SELECT R.Student_ID, R.Class_ID, R.Place_Confirmed, R.Payment_Method, R.Payment_Status, " _
        & "B.Language_Course_Selection, B.Submission_Time, " _
        & "B.Title, B.Forenames, B.Surname, B.Email " _
        & "FROM Insessional_Registers R, Insessional_Students S, InSessional_Submissions B " _
        & "WHERE S.Student_ID = R.Student_ID " _
        & "AND B.Student_ID = R.Student_ID AND B.Class_ID = R.Class_ID " _
        & "AND R.Payment_Method = 'Credit/Debit Card' " _
        & "AND R.Payment_Status = 'Pending' " _
        & "AND R.Submission_Time < now() - 2 " _
        & "AND NOT R.Place_Confirmed " _
        & "AND B.Email IS NOT NULL "
    rsMailList.Open cSQL, cnn, adOpenKeyset, adLockOptimistic
    rsEmails.Open "select * from Emails", cnn, adOpenKeyset, adLockOptimistic
    EmailTotal = rsMailList.RecordCount
    If EmailTotal > 0 Then
        EmailCount = 1
        Do While Not rsMailList.EOF
            ShowProgress (EmailCount / EmailTotal)
            Set MyMail = MyOutlook.CreateItem(olMailItem)
            Forename = rsMailList("Forenames")
            Forename = Trim(IIf(InStr(Forename, " ") > 0, Left(Forename, InStr(Forename, " ")), Forename))
            MyMail.To = rsMailList("Email")
            MyMail.Subject = "Payment Query for Language Module Enrolment"
            MyMail.Body = MyBodyText
            MyMail.HTMLBody = "<p>Dear " & Forename & ",<br/></p> " _
            & "<p>I am sorry to inform you that there appears to have been a problem " _
            & "with your Credit/Debit Card payment for the following language course;<br/></p>" _
            & "<p><B>" & rsMailList("Language_Course_Selection") & "</b><br/></p>" _
            & "<p>Would you please contact the Language as soon as possible, " _
            & "as if we do not hear from you or receive payment by some means, " _
            & "then we may have to release you place on this course to someone else.<br/></p>" _
            & "<p>We would rather resolve this with you, as you enrolled first.<br/></P>" _
            & "<p>Best wishes,<br/></p>" _
            & "<p><b>The Language Centre</b><br/><i>Phone: 02476 523462</i><br/><i>Language.Enquiries@warwick.ac.uk</i></p>"
            rsMailList("Payment_Status") = "Failed"
            rsMailList.Update
            ' Track Emails
            rsEmails.AddNew
            rsEmails("Student_ID") = rsMailList("Student_ID")
            rsEmails("Class_ID") = rsMailList("Class_ID")
            rsEmails("Sent_to") = rsMailList("Email")
            rsEmails("Subject") = MyMail.Subject
            rsEmails("Sent") = Now()
            rsEmails.Update
            MyMail.Send
            rsMailList.MoveNext
        Loop
    End If
    rsEmails.Close
    Set Emails = Nothing
    rsMailList.Close
    Set rsMailList = Nothing
    'cnn.CommitTrans
    cnn.Close
    Set cnn = Nothing
    Set MyOutlook = Nothing
    ShowProgress (0)
Exit Function

dbErrorHandler:
    If Err = -2147467259 Then ' Database locked
        MsgBox "Database locked - please try later"
        Resume Abort
    Else
        MsgBox Err.Number & ": " & Err.Description
        Resume Next
    End If
Abort:
    'cnn.Rollback
    cnn.Close
    Set cnn = Nothing
    ShowProgress (0)
    MsgBox ("Process Aborted")
End Function

Public Function EmailPlaceConfirmation()
    ShowProgress (1 / 20) ' To show it has started
'    On Error GoTo dbErrorHandler
    Dim cnn As ADODB.Connection
    Dim rsCV, rsMailList, rsEmails As ADODB.Recordset
    Dim MyOutlook As Outlook.Application
    Dim MyOutbox As Outlook.Folder
    Dim MyMail As Outlook.MailItem
    Dim SubjText, BodyText, cSQL As String
    Dim EmailCount, EmailTotal As Integer
    Dim New_Term_Week_Commencing, CRLF As String
    CRLF = Chr(13) & Chr(10)
    '
    ' NOTE:
    ' Although it would be possible to confirm module places entirely within the InSessional_Submissions table,
    ' record in this table have not yet been reconciled with students or registers and therefore
    ' have not contributed to number of places available on any given module. Therefore, it is best
    ' to only confirm places once they have been transferred to the module registers and the place
    ' itself is confirmed. Also the submissions file may be deleted but registers should be more
    ' permanent so less chance of resending confirmations.
    '
    Set MyOutlook = New Outlook.Application
    Set cnn = New ADODB.Connection
    Set rsMailList = New ADODB.Recordset
    Set rsEmails = New ADODB.Recordset
    Set rsCV = New ADODB.Recordset
    cnn.Open "Provider=Microsoft.ACE.OLEDB.12.0; Data Source=" & CurrentDb.Name & ";"
    
    cSQL = "Select Week_Commencing, Latest_Cancellation from Current_Values"
    rsCV.Open cSQL, cnn, adOpenKeyset, adLockOptimistic
    If Not rsCV.EOF Then
        New_Term_Week_Commencing = rsCV("Week_Commencing")
        Latest_Cancellation_Date = rsCV("Latest_Cancellation")
    Else
        New_Term_Week_Commencing = "e.g. 26 April 2010"
        Latest_Cancellation_Date = "1 October"
    End If
    
    rsCV.Close
    Set rsCV = Nothing
    New_Term_Week_Commencing = InputBox("Please enter the date of the beginning" & CRLF & "of the week that all courses recommence", "Courses start week commencing ....", New_Term_Week_Commencing)

    
    'cnn.BeginTrans
    ' Module_Occurrences MO
    ' AND MO.Class_ID = R.Class_ID
    cSQL = "SELECT R.Student_ID, R.Class_ID, R.Place_Confirmed, " _
        & "B.Language_Course_Selection, B.Submission_Time, " _
        & "B.Title, B.Forenames, B.Surname, B.Email " _
        & "FROM Insessional_Registers R, Insessional_Students S, InSessional_Submissions B " _
        & "WHERE S.Student_ID = R.Student_ID " _
        & "AND B.Student_ID = R.Student_ID AND B.Class_ID = R.Class_ID " _
        & "AND R.Payment_Status = 'Received' AND NOT R.Place_Confirmed " _
        & "AND B.Email IS NOT NULL "
    rsMailList.Open cSQL, cnn, adOpenKeyset, adLockOptimistic
    rsEmails.Open "select * from Emails", cnn, adOpenKeyset, adLockOptimistic
    EmailTotal = rsMailList.RecordCount
    If EmailTotal > 0 Then
        EmailCount = 1
        Do While Not rsMailList.EOF
            ShowProgress (EmailCount / EmailTotal)
            Set MyMail = MyOutlook.CreateItem(olMailItem)
            Forename = rsMailList("Forenames")
            Forename = Trim(IIf(InStr(Forename, " ") > 0, Left(Forename, InStr(Forename, " ")), Forename))
            MyMail.To = rsMailList("Email")
            MyMail.Subject = "Confirmation of Language Module Enrolment"
            MyMail.Body = MyBodyText
            MyMail.HTMLBody = "<p>Dear " & Forename & ",<br/></p> " _
                & "<p>We are pleased to inform you that your place has been confirmed on the following language course;<br/></p> " _
                & "<p><B>" & rsMailList("Language_Course_Selection") & "</b><br/></p>" _
                & "<p>For information about your class location and required text books, please check the Language Centre website closer to the start of term. <br/></p>" _
                & "<a href=""http://www2.warwick.ac.uk/fac/arts/languagecentre/lifelonglearning/"">http://www2.warwick.ac.uk/fac/arts/languagecentre/lifelonglearning/</a><br/></p>" _
                & "<P><B>PLEASE NOTE</b>, we operate a NO REFUND policy, except in the following cases: " _
                & "If we have to cancel a class; If you are unable to attend and you notify us before October 1st 2010; " _
                & "In very special circumstances, such as medical reasons (proof required) or extenuating personal matters. </p>" _
                & "<p>All our courses start week commencing " & New_Term_Week_Commencing & ".<br/></p>" _
                & "<p>If you have any queries please do not hesitate to contact us.<br/></p><p>Best wishes,<br/></p>" _
                & "<p><b>The Language Centre</b><br/><i>Phone: 02476 523462</i><br/><i>Language.Enquiries@warwick.ac.uk</i></p>"
            rsMailList("Place_Confirmed") = True
            rsMailList.Update
            ' Track Emails
            rsEmails.AddNew
            rsEmails("Student_ID") = rsMailList("Student_ID")
            rsEmails("Class_ID") = rsMailList("Class_ID")
            rsEmails("Sent_to") = rsMailList("Email")
            rsEmails("Subject") = MyMail.Subject
            rsEmails("Sent") = Now()
            rsEmails.Update
            MyMail.Send
            rsMailList.MoveNext
        Loop
    End If
    rsEmails.Close
    Set Emails = Nothing
    rsMailList.Close
    Set rsMailList = Nothing
    'cnn.CommitTrans
    cnn.Close
    Set cnn = Nothing
    Set MyOutlook = Nothing
    ShowProgress (0)
Exit Function

dbErrorHandler:
    If Err = -2147467259 Then ' Database locked
        MsgBox "Database locked - please try later"
        Resume Abort
    ElseIf Err = 287 Then ' Outlook not open
        MsgBox "OUTLOOK is not ready to send emails" & Chr(13) & Chr(10) & Chr(13) & Chr(10) _
            & "Please open OUTLOOK and Log-in. " & Chr(13) & Chr(10) & Chr(13) & Chr(10) _
            & "Then try again."
        Resume Abort
    Else
        MsgBox Err.Number & ": " & Err.Description
        Resume Next
    End If
Abort:
    MsgBox ("Process Aborted")
    'cnn.Rollback
    cnn.Close
    Set cnn = Nothing
    ShowProgress (0)
End Function





Public Function ProcessSubmissions()
    ShowProgress (1 / 20) ' To show it has started
    'On Error GoTo dbErrorHandler
    ' In order to process enrolment submissions the received records need to be pass through various stages
    ' these stages will be recorded in the Enrol_Status field in the InSessional_Submissions table
    ' 1. Student Found
    ' 2. Student_Added
    ' 3. Student_Updated
    ' 4. Module_Found
    ' 5. Student_Registered
    ' 6. Payment_Confirmed
    ' 7. Enrolment_Cancelled
    ' 8. Payment_Refunded
    
    ' Initialise connection to database table
    Dim cnn As ADODB.Connection
    Set cnn = New ADODB.Connection
    Dim cmd As New ADODB.Command
    
    
    Set rst = New ADODB.Recordset
    cnn.Open "Provider=Microsoft.ACE.OLEDB.12.0; Data Source=" & CurrentDb.Name & ";"
    'cnn.BeginTrans
    cmd.ActiveConnection = cnn
    ' In order to improve the accuracy of matching records it is important to ensure that
    ' fields are formatted correctly
    cmd.CommandText = "UPDATE Insessional_Submissions Su SET " _
        & "Su.Email = iif(Su.Email is Null,Null,LCase(Su.Email)) , " _
        & "Su.Staff_Email = iif(Su.Staff_Email is Null,Null,LCase(Su.Staff_Email)) , " _
        & "Su.Student_Email = iif(Su.Student_Email is Null,Null,LCase(Su.Student_Email)) , " _
        & "Su.Last_Name = UCase(Su.Last_Name) " _
        & "WHERE NOT Su.Last_Name = UCase(Su.Last_Name) "
    cmd.Execute
    ShowProgress (1 / 2)
    DoEvents
    cmd.CommandText = "INSERT INTO Insessional_Students ( " _
        & "Academic_Year, Academic_Term, University_ID, Last_Name, First_Name, Email, Status, " _
        & "Department, Skills_Reqd, Skills, English_Level, Attendance, Referrer, " _
        & "Staff_Name, Staff_Dept, Staff_Email, Student_Name, Student_Dept, Student_Email, " _
        & "Writing, Speaking, Pronunc, Culture, Erasmus, Partners, " _
        & "Submission_ID, Submission_time ) " _
        & "SELECT " _
        & "S.Academic_Year, S.Academic_Term, S.University_ID, UCASE(S.Last_Name), S.First_Name, S.Email, S.Status, " _
        & "S.Department, S.Skills_Reqd, S.Skills, S.English_Level, S.Attendance, S.Referrer, " _
        & "S.Staff_Name, S.Staff_Dept, S.Staff_Email, S.Student_Name, S.Student_Dept, S.Student_Email, " _
        & "iif(InStr(S.Skills_Reqd,'Writing')>0, TRUE, FALSE), " _
        & "iif(InStr(S.Skills_Reqd,'Speaking')>0, TRUE, FALSE), " _
        & "iif(InStr(S.Skills_Reqd,'Pronunc')>0, TRUE, FALSE), " _
        & "iif(InStr(S.Skills_Reqd,'cultural')>0, TRUE, FALSE), " _
        & "iif(InStr(S.Skills_Reqd,'Erasmus')>0, TRUE, FALSE), " _
        & "iif(InStr(S.Skills_Reqd,'Partner')>0, TRUE, FALSE), " _
        & "S.Submission_ID, Submission_time " _
        & "FROM InSessional_Submissions AS S " _
        & "WHERE NOT EXISTS (" _
        & " SELECT 1 " _
        & " FROM Insessional_Students St " _
        & " WHERE St.Submission_ID = S.Submission_ID) " '_
        '& "AND IsNull(S.Accepted_Date) = False "

        '
    cmd.Execute
    ShowProgress (2 / 2)
    DoEvents
    MsgBox ("Process Complete")
    ShowProgress (0)
    Set cmd = Nothing
    Set rst = Nothing
    'cnn.CommitTrans
    cnn.Close
    Set cnn = Nothing
Exit Function

dbErrorHandler:
'    If Err = -2147217887 Then
'        ' Key violation error -> Cancel update
'        rst.CancelUpdate
'        Resume NextRecord
'    Else
    If Err = -2147352571 Then
        ' Data type mismatch -> Continue
        Resume Next
    ElseIf Err = -2147217913 Then
        ' Data type mismatch -> Continue
        Resume Next
'    ElseIf Err = -2147217904 Then
'       ' Data type mismatch -> Continue
'        Resume Next
    ElseIf Err = -2147467259 Then ' Database locked
        MsgBox "Database locked - please try later"
        Resume Abort
    ElseIf Err = -2147467259 Then
        MsgBox Err.Number & ": " & Err.Description
        Resume Abort
    ElseIf Err = 3709 Then
        MsgBox Err.Number & ": " & Err.Description
        Resume Abort
    ElseIf Err = 3265 Then
        MsgBox Err.Number & ": " & Err.Description
        Resume Abort
    ElseIf Err = 3704 Then
        MsgBox Err.Number & ": " & Err.Description
        Resume Abort
    Else
        MsgBox Err.Number & ": " & Err.Description
        Resume Next
    End If
Abort:
    MsgBox ("Process Aborted")
    Set cmd = Nothing
    Set rst = Nothing
    'cnn.Rollback
    cnn.Close
    Set cnn = Nothing
    ShowProgress (0)
End Function

Public Function UpdateNewCourseLists()
    'On Error GoTo dbErrorHandler
    ShowProgress (1 / 20) ' To show it has started
    ' Special encoding of carriage return & line feed for use in a URL
    Dim URLCRLF, CRLF As String
    URLCRLF = "%0d%0a"
    CRLF = Chr(13) & Chr(10)
    
    ' Initialise connection to database table
    Dim cnn As ADODB.Connection
    Set cnn = New ADODB.Connection
    Set rsForms = New ADODB.Recordset
    Set rsLists = New ADODB.Recordset
    cnn.Open "Provider=Microsoft.ACE.OLEDB.12.0; Data Source=" & CurrentDb.Name & ";"
    'cnn.BeginTrans
    Dim SQL, Form_ID, Form_URL, Form_Index, CourseList, List_Name As String
    Dim nForm, nForms As Integer
    nForms = 9
    nForm = 1
    ' SQL to create course lists is stored in the database against each form "Enrolment_Forms"
    ' Index positions of the Course lists in each Enrolment form stored in "Enrolment_Lists"
    ' WARNING: Course_List_SQL field is not long enough to hold full string so need to add Course_List_SQL2
    SQL = "SELECT EF.Form_URL, EF.Form_ID, EF.Course_List_SQL, EF.Course_List_SQL2, EL.Form_Index, EL.List_Name, EL.elementID " _
        & "FROM Enrolment_Forms EF, Enrolment_Lists EL " _
        & "WHERE EF.Form_ID = EL.Form_ID " _
        & "AND EF.Form_Enabled AND EL.Enabled " _
        & "AND EL.List_Name = 'Language_Course_Selection' "
    rsForms.Open SQL, cnn, adOpenKeyset, adLockOptimistic
    Do While Not rsForms.EOF
        Form_URL = rsForms("Form_URL")
        Form_ID = rsForms("Form_ID")
        Form_Index = rsForms("Form_Index")
        List_Name = rsForms("List_Name")
        elementID = rsForms("elementID")
        SQL = rsForms("Course_List_SQL") & " " & rsForms("Course_List_SQL2")
        rsLists.Open SQL, cnn, adOpenKeyset, adLockOptimistic
        CourseList = ""
        Do While Not rsLists.EOF
            CourseList = CourseList & rsLists("Course_Details") & CRLF
            rsLists.MoveNext
        Loop
        If CourseList = "" Then
            CourseList = URLEncode("*** For details of available modules please contact the office ***")
        End If
        rsLists.Close
        '
        ' New version of httpPost2Form needed
        '
'        Formsbuilder = False
'       If Formsbuilder Then
'            httpPost2Form Form_ID, Form_Index, CourseList, True, True, "<b>Select appropriate Language Course</b>"
'        Else
            httpPost2List Form_URL, elementID, List_Name, CourseList, True, True, "<b>Select appropriate Language Course</b>"
'        End If
        ShowProgress (nForm / nForms)
        DoEvents
        nForm = nForm + 1
        rsForms.MoveNext
    Loop
    rsForms.Close
    ShowProgress (1)
    Set rsForms = Nothing
    Set rsLists = Nothing
    'cnn.CommitTrans
    cnn.Close
    Set cnn = Nothing
    ShowProgress (0)
Exit Function

dbErrorHandler:
'    If Err = -2147217887 Then
'        ' Key violation error -> Cancel update
'        rst.CancelUpdate
'        Resume NextRecord
'    Else
    If Err = -2147352571 Then
        ' Data type mismatch -> Continue
        Resume Next
    ElseIf Err = -2147217913 Then
        ' Data type mismatch -> Continue
        Resume Next
'    ElseIf Err = -2147217904 Then
'       ' Data type mismatch -> Continue
'        Resume Next
    ElseIf Err = -2147467259 Then ' Database locked
        MsgBox "Database locked - please try later"
        Resume Abort
    ElseIf Err = -2147467259 Then
        MsgBox Err.Number & ": " & Err.Description
        Resume Abort
    ElseIf Err = 3709 Then
        MsgBox Err.Number & ": " & Err.Description
        Resume Abort
    ElseIf Err = 3265 Then
        MsgBox Err.Number & ": " & Err.Description
        Resume Abort
    ElseIf Err = 3704 Then
        MsgBox Err.Number & ": " & Err.Description
        Resume Abort
'    Else
'        MsgBox Err.Number & ": " & Err.Description
'        Resume Next
    End If
Abort:
    'cnn.Rollback
    cnn.Close
    Set cnn = Nothing
    ShowProgress (0)
End Function

Public Function URLEncode(StringToEncode As String, Optional _
    UsePlusRatherThanHexForSpace As Boolean = False) As String
    Dim TempAns As String
    Dim CurChr As Integer
    CurChr = 1
    Do Until CurChr - 1 = Len(StringToEncode)
        Select Case Asc(Mid(StringToEncode, CurChr, 1))
            Case 48 To 57, 65 To 90, 97 To 122
                TempAns = TempAns & Mid(StringToEncode, CurChr, 1)
            Case 32
                If UsePlusRatherThanHexForSpace = True Then
                    TempAns = TempAns & "+"
                Else
                    TempAns = TempAns & "%" & Hex(32)
                End If
            Case Else
                TempAns = TempAns & "%" & _
                Format(Hex(Asc(Mid(StringToEncode, _
                CurChr, 1))), "00")
        End Select
        CurChr = CurChr + 1
    Loop
    URLEncode = TempAns
End Function



Private Sub DownloadData()

    'url and form parameters
    Dim strURL As String: strURL = "http://www.bmreports.com/servlet/com.logica.neta.bwp_SspSbpServlet"
    Dim strParam2 As String: strParam2 = "2003-10-01"
    'technical stuff for getting the result back
    Dim strRequest
    Dim XMLhttp: Set XMLhttp = CreateObject("msxml2.xmlhttp")
    Dim strResult As String
    'where to save the file
    Dim strPath As String: strPath = "c:\temp\data.csv"

    'get the page
    strRequest = "param2=" & strParam2
    XMLhttp.Open "POST", strURL, False
    XMLhttp.setRequestHeader "Content-Type", "application/x-www-form-urlencoded"
    XMLhttp.Send strRequest
    strResult = XMLhttp.responseText

    'extract "csv data" and clean up the results
    strResult = Right(strResult, Len(strResult) - InStr(strResult, "HDR") + 1)
    strResult = Left(strResult, InStr(strResult, "FTR") + 2)
    strResult = Replace(strResult, "\n", Chr(13))

    'save
    Open strPath For Output As #1
    Print #1, , strResult
    Close
End Sub






Private Sub RecordXML(xmlString, fieldList, persontype)
    On Error GoTo dbErrorHandler
    Dim xmlSelectString As String
    xmlSelectString = "/formsbuider-submissions/submission"
    
    'Initialise connection to database table
    Set cnn = New ADODB.Connection
    Set rst = New ADODB.Recordset
    cnn.Open "Provider=Microsoft.ACE.OLEDB.12.0; Data Source=" & CurrentDb.Name & ";"
    'cnn.BeginTrans
    rst.Open "SELECT * FROM InSessional_Submissions", cnn, adOpenKeyset, adLockOptimistic
    
    'Loads Xml string into a DOMDocument so we can iterate through records
    Set doc = New DOMDocument
    doc.async = False
    doc.loadXML (xmlString)
    
    'Isolates submissions and loads node list into nolPrinc
    Set nolPrinc = doc.selectNodes(xmlSelectString)
    For Each nod In nolPrinc
        'For each submission, sets field list as list of child nodes
        Set nolChild = nod.childNodes
        rst.AddNew
        i = 0
        'Iterates through child nodes and adds field data to table
        For Each nodP In nolChild
            If fieldList(i) > 0 Then
                rst.Fields(fieldList(i) - 1) = nodP.Text
            End If
          i = i + 1
        Next
     '   rst.Fields(16) = personType
        ' Saves fields to table. If duplicate record, error thrown and moves to next record.
        ' There is probably a better way of doing this to prevent trying to add submissions
        ' we've already saved but this will do for now.
        ' NOTE TO SELF
        ' InSessional_Submissions table used to have a Primary Key of Submission_time & Surname
        ' This has been removed for testing, but an equivalent primary key may be needed

        rst.Update
        
NextRecord:
    Next
    ' Close objects
    rst.Close
    Set rst = Nothing
    'cnn.CommitTrans
    cnn.Close
    Set cnn = Nothing
    Set doc = Nothing
    
    Set nodP = Nothing
    Set nod = Nothing
    Set nolChild = Nothing
    Set nolPrinc = Nothing
Exit Sub
    
dbErrorHandler:
    
    If Err = -2147217887 Then ' Key violation error.
        rst.CancelUpdate
        Resume NextRecord
    ElseIf Err = -2147467259 Then ' Database locked
        MsgBox "Database locked - please try later"
        Resume Abort
    Else
        MsgBox Err.Number & ": " & Err.Description
        Resume Next
    End If
    
Abort:
    'cnn.Rollback
    cnn.Close
    Set cnn = Nothing
    MsgBox ("Process Aborted")
End Sub

Private Sub Wait4Request(xmlReq)
    dtStart = Now
    Dim responseMessage As String
    
    Do While xmlReq.readyState <> 4
        DoEvents
        TimeOut = DateDiff("s", dtStart, Now)
        If TimeOut >= 120 Then 'Wait 60 seconds
           Exit Do
        End If
    Loop
    responseMessage = Trim(xmlReq.responseText)
    responseMessage = Replace(responseMessage, " ", "")
    responseMessage = Replace(responseMessage, Chr(13), "")
    responseMessage = Replace(responseMessage, Chr(10), "")
    responseMessage = Replace(responseMessage, Chr(9), "")
    If xmlReq.readyState = 4 Then
        If xmlReq.Status = 0 Or xmlReq.Status = 200 Then
'            MsgBox "Upload Successful", vbOKOnly, "Updating Drop-down List"
'            MsgBox xmlReq.responseText, vbOKOnly
        Else
          MsgBox Str(xmlReq.readyState) & "/" & Str(xmlReq.Status) & responseMessage, vbOKOnly, "ERROR updating Drop-down List"
        End If
    Else
        MsgBox Str(xmlReq.readyState) & "/" & Str(xmlReq.Status) & responseMessage, vbOKOnly, "ERROR updating Drop-down List"
    End If
End Sub
'
' Old version of function written for FormsBuilder
'
'Private Sub httpPost2Form(strForm, strIndex, strList, _
'    Optional bRequired As Boolean, Optional bLabelOnTop As Boolean, _
'    Optional strLabel As String)
'
'    ' Configure HTML Request Object and log into the website
'    Dim xmlHttpRequest, xmlDoc As Object
'    Set xmlHttpRequest = New XMLhttp
'    ' APIUser restricted access to these LC pages
'    Dim strPageURL, strUsername, strPassword As String
'    strPageURL = "https://formsbuilder.warwick.ac.uk/formsbuilder/editList.html?forcebasic=true"
'    If bRequired Then
'        strPageURL = strPageURL & "&required=true"
'    End If
'    If bLabelOnTop Then
'        strPageURL = strPageURL & "&labelOnTop=true"
'    End If
'    strPageURL = strPageURL & "&tmpDescription=" & URLEncode(strLabel)
'    strUsername = "lc-apiuser"
'    strPassword = "l4ngcntr91"
'    strForm = "&elementId=" & strForm
'    strIndex = "&index=" & strIndex
'    strParams = "tmpDiscreteValues=" & strList
'    xmlHttpRequest.Open "POST", strPageURL & strForm & strIndex, True, strUsername, strPassword
'    xmlHttpRequest.setRequestHeader "User-Agent", "Andrew P Smith, Language Centre, 02476672903, a.p.smith@warwick.ac.uk"
'    xmlHttpRequest.setRequestHeader "Content-type", "application/x-www-form-urlencoded"
'    xmlHttpRequest.setRequestHeader "Content-length", Len(Params)
'    xmlHttpRequest.setRequestHeader "Connection", "close"
'    xmlHttpRequest.send (strParams)
'    Wait4Request xmlHttpRequest
'    Set xmlHttpRequest = Nothing
'End Sub
'
' New version of function written for SiteBuilder2
'
Private Sub httpPost2Listx(strPage, strElementID, strListName, strList, _
    Optional bRequired As Boolean, Optional bLabelOnTop As Boolean, _
    Optional strLabel As String)

    ' Configure HTML Request Object and log into the website
    Dim xmlHttpRequest, xmlDoc As Object
    Set xmlHttpRequest = New XMLhttp
    ' APIUser restricted access to these LC pages
    Dim strPageURL, strParame, strUsername, strPassword As String
    ' Build URL plus GET parameters
    strPageURL = "https://sitebuilder.warwick.ac.uk/sitebuilder2/forms/edit/editList.html?forcebasic=true"
    strPageURL = strPageURL & "&page=" & strPage
    strPageURL = strPageURL & "&elementId=" & strElementID
    ' Build parameter string with POST parameters
    StrParams = "name=" & strListName
    StrParams = StrParams & "&tmpDescription=" & URLEncode(strLabel)
    StrParams = StrParams & "&tmpDiscreteValues=" & strList
    If bLabelOnTop Then
        StrParams = StrParams & "&labelOnTop=true"
    End If
    If bRequired Then
        StrParams = StrParams & "&required=true"
    End If
    strUsername = "lc-apiuser"
    strPassword = "l4ngcntr91"
'    MsgBox ("GET String:" & Chr(13) & Chr(10) & strPageURL & Chr(13) & Chr(10) & "POST Values:" & Chr(13) & Chr(10) & strParams)
    xmlHttpRequest.Open "POST", strPageURL, True, strUsername, strPassword
    xmlHttpRequest.setRequestHeader "User-Agent", "Andrew P Smith, Language Centre, 02476528440, a.p.smith@warwick.ac.uk"
    xmlHttpRequest.setRequestHeader "Content-type", "application/x-www-form-urlencoded"
    xmlHttpRequest.setRequestHeader "Content-length", Len(Params)
    xmlHttpRequest.setRequestHeader "Connection", "close"
    xmlHttpRequest.Send (StrParams)
    Wait4Request xmlHttpRequest
    Set xmlHttpRequest = Nothing
End Sub
Private Sub httpPost2Commentx(strPage, strElementID, strCommentName, strCommentText)

    ' Configure HTML Request Object and log into the website
    Dim xmlHttpRequest, xmlDoc As Object
    Set xmlHttpRequest = New XMLhttp
    ' APIUser restricted access to these LC pages
    Dim strPageURL, strParame, strUsername, strPassword As String
    ' Build URL plus GET parameters
    strPageURL = "https://sitebuilder.warwick.ac.uk/sitebuilder2/forms/edit/editList.html?forcebasic=true"
    strPageURL = strPageURL & "&page=" & strPage
    strPageURL = strPageURL & "&elementId=" & strElementID
    strPageURL = strPageURL & "&submit=Save"
    ' Build parameter string with POST parameters
    StrParams = "name=" & strCommentName
    StrParams = StrParams & "&tmpDescription=" & URLEncode(strCommentText)
    strUsername = "lc-apiuser"
    strPassword = "l4ngcntr91"
'    MsgBox ("GET String:" & Chr(13) & Chr(10) & strPageURL & Chr(13) & Chr(10) & "POST Values:" & Chr(13) & Chr(10) & strParams)
    xmlHttpRequest.Open "POST", strPageURL, True, strUsername, strPassword
    xmlHttpRequest.setRequestHeader "User-Agent", "Andrew P Smith, Language Centre, 02476528440, a.p.smith@warwick.ac.uk"
    xmlHttpRequest.setRequestHeader "Content-type", "application/x-www-form-urlencoded"
    xmlHttpRequest.setRequestHeader "Content-length", Len(Params)
    xmlHttpRequest.setRequestHeader "Connection", "close"
    xmlHttpRequest.Send (StrParams)
    Wait4Request xmlHttpRequest
    Set xmlHttpRequest = Nothing
End Sub

Public Function UpdateOnlineListsx()
    '
    ' NOTE to other coders
    '
    ' When uploading lists to the Internet, list values may not include special characters, especially &.
    ' So if a list appears short, look for illegal characters in the list values
  
    
    ' Clear Progress Meter
    ShowProgress (0)
    ShowProgress (1 / 20) ' To show it has started
    ' Special encoding of carriage return & line feed for use in a URL
    Dim URLCRLF As String
    URLCRLF = "%0d%0a"
    CRLF = Chr(13) & Chr(10)
    ' Initialise connection to database table
    Dim cnn As ADODB.Connection
    Dim rst As ADODB.Recordset
    Set cnn = New ADODB.Connection
    Set rst = New ADODB.Recordset
    cnn.Open "Provider=Microsoft.ACE.OLEDB.12.0; Data Source=" & CurrentDb.Name & ";"
    'cnn.BeginTrans
    ShowProgress (1 / 8)
     
    ' Component strings for building the POST URL.
    Dim sqlList, strList, sqlForms As String
    '
    ' Nationality
    '
    sqlList = "SELECT Nat_Ref, Nat_Name FROM coresys_NATIONALITY_TABLE ORDER BY Nat_Name "
    rst.Open sqlList, cnn, adOpenKeyset, adLockOptimistic
    strList = ""
    Do While Not rst.EOF
'        strList = strList & rst("Nat_Ref") & "|"
        strList = strList & rst("Nat_Name") & CRLF
        rst.MoveNext
    Loop
    rst.Close
    ' Post to all appropriate online forms
    'sqlForms = "SELECT Form_ID, Form_Index FROM Enrolment_Lists Where List_Name = 'Nationality' And Enabled"
    sqlForms = "SELECT Form_URL, List_Name, elementID " _
        & "FROM Enrolment_Forms EF, Enrolment_Lists EL " _
        & "WHERE EF.Form_ID = EL.Form_ID " _
        & "AND EL.List_Name = 'Nationality' AND Enabled "
    rst.Open sqlForms, cnn, adOpenKeyset, adLockOptimistic
    Do While Not rst.EOF
        'httpPost2Form rst("Form_ID"), rst("Form_Index"), strList, True, False, "Nationality"
        httpPost2List rst("Form_URL"), rst("elementID"), rst("List_Name"), strList, True, False, "Nationality"
        rst.MoveNext
    Loop
    rst.Close
    ShowProgress (2 / 8)
    '
    ' Ethnicity
    '
    sqlList = "SELECT Eth_Code, Eth_Name FROM coresys_ETHNICITY_TABLE ORDER BY Eth_Code "
    rst.Open sqlList, cnn, adOpenKeyset, adLockOptimistic
    strList = ""
    Do While Not rst.EOF
'        strList = strList & rst("Eth_Code") & "|"
        strList = strList & rst("Eth_Name") & CRLF
        rst.MoveNext
    Loop
    rst.Close
    ' Post to all appropriate online forms
    'sqlForms = "SELECT Form_ID, Form_Index FROM Enrolment_Lists Where List_Name = 'Ethnicity' And Enabled"
    sqlForms = "SELECT Form_URL, List_Name, elementID " _
        & "FROM Enrolment_Forms EF, Enrolment_Lists EL " _
        & "WHERE EF.Form_ID = EL.Form_ID " _
        & "AND List_Name = 'Ethnic_Origin' And Enabled"
    rst.Open sqlForms, cnn, adOpenKeyset, adLockOptimistic
    Do While Not rst.EOF
        'httpPost2Form rst("Form_ID"), rst("Form_Index"), strList, True, False, "Ethnic Origin"
        httpPost2List rst("Form_URL"), rst("elementID"), rst("List_Name"), strList, True, False, "Ethnic Origin"
        rst.MoveNext
    Loop
    rst.Close
    ShowProgress (3 / 8)
    '
    ' Disability
    '
    sqlList = "SELECT Dis_Code, Dis_Name FROM coresys_DISABILITY_TABLE ORDER BY Dis_Code "
    rst.Open sqlList, cnn, adOpenKeyset, adLockOptimistic
    strList = ""
    Do While Not rst.EOF
'        strList = strList & rst("Dis_Code") & "|"
        strList = strList & rst("Dis_Name") & CRLF
        rst.MoveNext
    Loop
    rst.Close
    ' Post to all appropriate online forms
    'sqlForms = "SELECT Form_ID, Form_Index FROM Enrolment_Lists Where List_Name = 'Disability' And Enabled"
    sqlForms = "SELECT Form_URL, List_Name, elementID " _
        & "FROM Enrolment_Forms EF, Enrolment_Lists EL " _
        & "WHERE EF.Form_ID = EL.Form_ID " _
        & "AND List_Name = 'Disability' And Enabled"
    rst.Open sqlForms, cnn, adOpenKeyset, adLockOptimistic
    Do While Not rst.EOF
        'httpPost2Form rst("Form_ID"), rst("Form_Index"), strList, True, True, "Disability / Special Needs"
        httpPost2List rst("Form_URL"), rst("elementID"), rst("List_Name"), strList, True, True, "Disability / Special Needs"
        rst.MoveNext
    Loop
    rst.Close
    ShowProgress (4 / 8)

    '
    ' Qualifications
    '
'    sqlList = "SELECT Qua_HESA_ID, Qua_Name FROM QUALIFICATIONS_TABLE ORDER BY Qua_HESA_ID "
'    sqlList = "SELECT Qual_Level_Code, Qualification_Level FROM Qualification_Levels ORDER BY List_Order"
    sqlList = "SELECT QL.HESA_Code3 AS Qual_Level_Code, QL.Qualification_Level " _
        & "FROM Qualification_Levels QL, Current_Values CV " _
        & "WHERE QL.Qual_List_Year = '20' & CV.Academic_Year " _
        & "ORDER BY QL.List_Order "
    rst.Open sqlList, cnn, adOpenKeyset, adLockOptimistic
    strList = ""
    Do While Not rst.EOF
        strList = strList & rst("Qual_Level_Code") & "|"
        strList = strList & rst("Qual_Level_Code") & ": "
        strList = strList & rst("Qualification_Level") & CRLF
        rst.MoveNext
    Loop
    rst.Close
    ' Post to all appropriate online forms
    'sqlForms = "SELECT Form_ID, Form_Index FROM Enrolment_Lists Where List_Name = 'Qualifications' And Enabled"
    sqlForms = "SELECT Form_URL, List_Name, elementID " _
        & "FROM Enrolment_Forms EF, Enrolment_Lists EL " _
        & "WHERE EF.Form_ID = EL.Form_ID " _
        & "AND List_Name = 'Acad_Study_Level' And Enabled"
    rst.Open sqlForms, cnn, adOpenKeyset, adLockOptimistic
    Do While Not rst.EOF
        'httpPost2Form rst("Form_ID"), rst("Form_Index"), strList, True, True, "Highest level of academic qualification achieved to date"
        httpPost2List rst("Form_URL"), rst("elementID"), rst("List_Name"), strList, True, True, "Highest level of academic qualification achieved to date"
        rst.MoveNext
    Loop
    rst.Close

    
    ShowProgress (5 / 8)
    '
    ' Domicile
    '
    sqlList = "SELECT DOM_ID, DOM_Name FROM coresys_DOMICILE_TABLE_NEW ORDER BY DOM_NAME "
    rst.Open sqlList, cnn, adOpenKeyset, adLockOptimistic
    strList = ""
    Do While Not rst.EOF
'        strList = strList & rst("DOM_ID") & "|"
        strList = strList & rst("DOM_Name") & CRLF
        rst.MoveNext
    Loop
    rst.Close
    ' Post to all appropriate online forms
    'sqlForms = "SELECT Form_ID, Form_Index FROM Enrolment_Lists Where List_Name = 'Domicile' And Enabled"
    sqlForms = "SELECT Form_URL, List_Name, elementID " _
        & "FROM Enrolment_Forms EF, Enrolment_Lists EL " _
        & "WHERE EF.Form_ID = EL.Form_ID " _
        & "AND List_Name = 'Domicile' And Enabled"
    rst.Open sqlForms, cnn, adOpenKeyset, adLockOptimistic
    Do While Not rst.EOF
        'httpPost2Form rst("Form_ID"), rst("Form_Index"), strList, True, True, "Domicile / Current country of residence"
        httpPost2List rst("Form_URL"), rst("elementID"), rst("List_Name"), strList, True, True, "Domicile / Current country of residence"
        rst.MoveNext
    Loop
    rst.Close
    ShowProgress (6 / 8)

    '
    ' Course_Times
    '
'    sqlList = "SELECT Course_Times " _
'        & "FROM qry_Current_Course_Times " _
'        & "ORDER BY [Language], Course_times "
'    rst.Open sqlList, cnn, adOpenKeyset, adLockOptimistic
'    strList = "<UL>" & CRLF
'    Do While Not rst.EOF
'        strList = strList & "<LI>" & rst("Course_Times") & "</LI>" & CRLF
'        rst.MoveNext
'    Loop
'    strList = strList & "</UL>" & CRLF
'    rst.Close
'    ' Post to all appropriate online forms
'    'sqlForms = "SELECT Form_ID, Form_Index FROM Enrolment_Lists Where List_Name = 'Domicile' And Enabled"
'    sqlForms = "SELECT Form_URL, List_Name, elementID " _
'        & "FROM Enrolment_Forms EF, Enrolment_Lists EL " _
'        & "WHERE EF.Form_ID = EL.Form_ID " _
'        & "AND List_Name = 'Course_Times'"
'    rst.Open sqlForms, cnn, adOpenKeyset, adLockOptimistic
''    If Not rst.EOF Then
''        MsgBox (strList)
''    End If
   
'    Do While Not rst.EOF
'        'httpPost2Form rst("Form_ID"), rst("Form_Index"), strList, True, True, "Domicile / Current country of residence"
'        httpPost2List rst("Form_URL"), rst("elementID"), "Class_Times", strList
''        httpPost2Comment rst("Form_URL"), rst("elementID"), "Course_Times", strList
'        rst.MoveNext
''        MsgBox (strList)
'    Loop
'    rst.Close
'    ShowProgress (7 / 8)

    '
    ' Departments
    '
    sqlList = "SELECT Department FROM Departments ORDER BY Department "
    rst.Open sqlList, cnn, adOpenKeyset, adLockOptimistic
    strList = ""
    Do While Not rst.EOF
        strList = strList & rst("Department") & CRLF
        rst.MoveNext
    Loop
    rst.Close
    ' Post to all appropriate online forms
    sqlForms = "SELECT Form_URL, List_Name, elementID " _
        & "FROM Enrolment_Forms EF, Enrolment_Lists EL " _
        & "WHERE EF.Form_ID = EL.Form_ID " _
        & "AND List_Name = 'Department' And Enabled"
    rst.Open sqlForms, cnn, adOpenKeyset, adLockOptimistic
    Do While Not rst.EOF
        httpPost2List rst("Form_URL"), rst("elementID"), "Department", strList
'         httpPost2Form rst("Form_ID"), rst("Form_Index"), strList, True, False, "University Department"
        rst.MoveNext
    Loop
    rst.Close
    ShowProgress (8 / 8)
'
'End If



     
    ShowProgress (1)

    Set rst = Nothing
    'cnn.CommitTrans
    cnn.Close
    Set cnn = Nothing
    ShowProgress (0)

End Function


Public Function CalcMarks(Module)
    Dim cSQL As String
    cSQL = "SELECT * FROM Factors F, Current_Values CV " _
        & "WHERE F.Module = '" & Module & "' " _
        & "AND F.Academic_Year = CV.Academic_Year "
    
    Set cnn = New ADODB.Connection
    Set rsCalc = New ADODB.Recordset
    cnn.Open "Provider=Microsoft.ACE.OLEDB.12.0; Data Source=" & CurrentDb.Name & ";"
    'MsgBox cSQL
    cSQL = "SELECT * FROM Factors AS F, Current_Values AS CV WHERE F.Module = 'HI270F' AND F.Academic_Year = CV.Academic_Year"
    rsCalc.Open cSQL, cnn, adOpenKeyset, adLockOptimistic
    If Not rsCalc.EOF Then
        Exam1.Value = IIf(IsNull(Listening1.Value), 0, Listening1.Value) * rsCalc("Exam1Listen1") _
            + IIf(IsNull(RWG1.Value), 0, RWG1.Value) * rsCalc("RWG1")
        Exam2.Value = IIf(IsNull(Listening2.Value), 0, Listening2.Value) * rsCalc("Exam1Listen2") _
            + IIf(IsNull(RWG2.Value), 0, RWG2.Value) * rsCalc("RWG2")
        Module_Mark.Value = IIf(IsNull(Exam1.Value), 0, Exam1.Value) * rsCalc("FinalExam1") _
            + IIf(IsNull(Exam2.Value), 0, Exam2.Value) * rsCalc("FinalExam2") _
            + IIf(IsNull(Exam3.Value), 0, Exam3.Value) * rsCalc("FinalExam3") _
            + IIf(IsNull(Exam4.Value), 0, Exam4.Value) * rsCalc("FinalExam4")
    End If
    rsCalc.Close
    Set rsCalc = Nothing
    cnn.Close
    Set cnn = Nothing
End Function


'-----------------------------------------------------------
' Functions involved in setting up subsequent LLL/Lfp Terms
'-----------------------------------------------------------

' Copy currently running MODULE_OCCURRENCES from one term to the next
Function CopyTerm(AY1, AT1, AY2, AT2)
    Dim cSQL As String
    ShowProgress (1 / 5) ' To show it has started
    ' Initialise connection to database table
    Dim cnn As ADODB.Connection
    Set cnn = New ADODB.Connection
    Dim cmd As New ADODB.Command
    Set rst = New ADODB.Recordset
    cnn.Open "Provider=Microsoft.ACE.OLEDB.12.0; Data Source=" & CurrentDb.Name & ";"
    'cnn.BeginTrans
    cmd.ActiveConnection = cnn
    ' Insert New class in new term for each module occurrence in the previous term
    cSQL = "INSERT INTO MODULE_OCCURRENCES " _
        & "   (Module, Academic_Year, Academic_Term, Occurrence, Group_Type, Class_Size, Module_Ref) " _
        & "SELECT MO.Module, '" & AY2 & "' As Academic_Year, '" & AT2 & "' as Academic_Term, MO.Occurrence, " _
        & "   MO.Group_Type, MO.Class_Size, MO.Module & '" & AT2 & "' as Module_Ref " _
        & "FROM MODULES M, MODULE_OCCURRENCES MO " _
        & "WHERE MO.Module = M.Module AND (M.Programme = 'LLL' or M.Programme = 'LfP') " _
        & "AND MO.Academic_Year = '" & AY1 & "' AND MO.Academic_Term = '" & AT1 & "' " _
        & "AND NOT EXISTS ( " _
        & "   SELECT 1 FROM MODULE_OCCURRENCES MO2 " _
        & "   WHERE MO2.Module_Ref = MO.Module & '" & AT2 & "' " _
        & "   AND MO2.Occurrence = MO.Occurrence " _
        & "   AND MO2.Academic_Year = MO.Academic_Year " _
        & ") "
    cmd.CommandText = cSQL
    cmd.Execute
    ShowProgress (2 / 5)
    DoEvents
    ' Copy all active students from old term class to new term class
    cSQL = "INSERT INTO Insessional_Registers " _
        & "   (Class_ID, Student_ID, Surname, Forenames, Enrolment_Ref, Person_type, " _
        & "    Lang_Study_Before, Lang_Study_Where, Lang_Study_Year, Lang_Study_Length, " _
        & "    Lang_Study_Informal, Lang_Study_Other, Mother_Tongue, Date_Created) " _
        & "SELECT T.New_Class_ID, R.Student_ID, R.Surname, R.Forenames, R.Enrolment_Ref, R.Person_type, " _
        & "    R.Lang_Study_Before, R.Lang_Study_Where, R.Lang_Study_Year, R.Lang_Study_Length, " _
        & "    R.Lang_Study_Informal, R.Lang_Study_Other, R.Mother_Tongue, Now() " _
        & "FROM Insessional_Registers R, (" _
        & "   SELECT T1.Class_ID as Old_Class_ID, T2.Class_ID as New_Class_ID " _
        & "   FROM Module_Occurrences T1 " _
        & "      LEFT JOIN Module_Occurrences T2 " _
        & "      ON T1.Module = T2.Module AND T1.Occurrence = T2.Occurrence " _
        & "   WHERE T1.Academic_Year = '" & AY1 & "' AND T1.Academic_Term = '" & AT1 & "' " _
        & "     AND T2.Academic_Year = '" & AY2 & "' AND T2.Academic_Term = '" & AT2 & "') T " _
        & "WHERE R.Class_ID = T.Old_Class_ID AND NOT R.Place_Cancelled " _
        & "AND NOT EXISTS ( " _
        & "   SELECT 1 FROM Insessional_Registers R2 " _
        & "   WHERE R2.Class_ID = T.New_Class_ID " _
        & "   AND R2.Student_ID = R.Student_ID " _
        & ") "
    cmd.CommandText = cSQL
    cmd.Execute
    ShowProgress (2 / 5)
    DoEvents
    
    ' Copy Module_Occurrence_Times from old term to new term so that classes can be rescheduled
    cSQL = "INSERT INTO MODULE_OCCURRENCE_TIMES " _
        & "   (Class_ID, Day, StartTime, FinishTime, Module, Occurrence, Academic_Year) " _
        & "SELECT T.New_Class_ID, MOT.Day, MOT.StartTime, MOT.FinishTime, MOT.Module, MOT.Occurrence, MOT.Academic_Year " _
        & "FROM MODULE_OCCURRENCE_TIMES as MOT, ( " _
        & "    SELECT T1.Class_ID AS Old_Class_ID, T2.Class_ID AS New_Class_ID " _
        & "    FROM Module_Occurrences AS T1 " _
        & "   LEFT JOIN Module_Occurrences AS T2 " _
        & "      ON (T1.Module=T2.Module) AND (T1.Occurrence=T2.Occurrence) " _
        & "   WHERE T1.Academic_Year='" & AY1 & "' And T1.Academic_Term=" & AT1 & "' " _
        & "     And T2.Academic_Year='" & AY2 & "' And T2.Academic_Term=" & AT2 & "' " _
        & ")  AS T " _
        & "WHERE MOT.Class_ID=T.Old_Class_ID " _
        & "AND NOT Exists ( " _
        & "   SELECT 1 FROM MODULE_OCCURRENCE_TIMES MOT2 " _
        & "   WHERE MOT2.Class_ID = T.New_Class_ID " _
        & "     AND MOT2.Day = MOT.Day AND MOT2.StartTime = MOT.StartTime " _
        & ") "
    cmd.CommandText = cSQL
    cmd.Execute
    ShowProgress (3 / 5)
    DoEvents

    ' Copy Module_Occurrence_Rooms from old term to new term
    cSQL = "INSERT INTO MODULE_OCCURRENCE_ROOMS ( Class_ID, Time_ID,Room_ID, Day, StartTime, FinishTime) " _
        & "SELECT T.New_Class_ID, MOT.Time_ID, MOR.Room_ID, MOR.Day, MOR.StartTime, MOR.FinishTime " _
        & "FROM MODULE_OCCURRENCE_ROOMS as MOR, MODULE_OCCURRENCE_TIMES as MOT, ( " _
        & "   SELECT T1.Class_ID AS Old_Class_ID, T2.Class_ID AS New_Class_ID " _
        & "   FROM Module_Occurrences AS T1 " _
        & "   LEFT JOIN Module_Occurrences AS T2 " _
        & "      ON (T1.Module=T2.Module) AND (T1.Occurrence=T2.Occurrence) " _
        & "   WHERE T1.Academic_Year='" & AY1 & "' And T1.Academic_Term=" & AT1 & "' " _
        & "     And T2.Academic_Year='" & AY2 & "' And T2.Academic_Term=" & AT2 & "' " _
        & ")  AS T " _
        & "WHERE MOR.Class_ID = T.Old_Class_ID And MOT.Class_ID = T.New_Class_ID " _
        & "AND MOT.Day = MOR.Day AND MOT.StartTime = MOR.StartTime " _
        & "AND NOT Exists ( " _
        & "   SELECT 1 FROM MODULE_OCCURRENCE_ROOMS MOR2 " _
        & "   WHERE MOR2.Class_ID = T.New_Class_ID " _
        & "     AND MOR2.Time_ID = MOT.Time_ID " _
        & "     AND MOR2.Room_ID = MOR.Room_ID " _
        & ")"
    cmd.CommandText = cSQL
    cmd.Execute
    ShowProgress (4 / 5)
    DoEvents
    
    
    
    
    ' Copy Module_Occurrence_Tutors from old Term to new term
    cSQL = "INSERT INTO MODULE_OCCURRENCE_TUTORS ( Class_ID, Tutor_ID) " _
        & "SELECT T.New_Class_ID, MOT.Tutor_ID " _
        & "FROM MODULE_OCCURRENCE_TUTORS as MOT, ( " _
        & "   SELECT T1.Class_ID AS Old_Class_ID, T2.Class_ID AS New_Class_ID " _
        & "   FROM Module_Occurrences AS T1 " _
        & "   LEFT JOIN Module_Occurrences AS T2 " _
        & "      ON (T1.Module=T2.Module) AND (T1.Occurrence=T2.Occurrence) " _
        & "   WHERE T1.Academic_Year='" & AY1 & "' And T1.Academic_Term=" & AT1 & "' " _
        & "     And T2.Academic_Year='" & AY2 & "' And T2.Academic_Term=" & AT2 & "' " _
        & ")  AS T " _
        & "WHERE MOT.Class_ID = T.Old_Class_ID AND MOT.Status = 'Teaching' " _
        & "AND NOT Exists ( " _
        & "   SELECT 1 FROM MODULE_OCCURRENCE_TUTORS MOT2 " _
        & "   WHERE MOT2.Class_ID = T.New_Class_ID " _
        & "     AND MOT2.Tutor_ID = MOT.Tutor_ID " _
        & ") "
    cmd.CommandText = cSQL
    cmd.Execute
    ShowProgress (4 / 5)
    DoEvents

    
    ' Copy all active students from old term class to new term class
    cSQL = "INSERT INTO Insessional_Registers " _
        & "   (Class_ID, Student_ID, Surname, Forenames, Enrolment_Ref, Person_type, " _
        & "    Lang_Study_Before, Lang_Study_Where, Lang_Study_Year, Lang_Study_Length, " _
        & "    Lang_Study_Informal, Lang_Study_Other, Mother_Tongue) " _
        & "SELECT T.New_Class_ID, R.Student_ID, R.Surname, R.Forenames, R.Enrolment_Ref, R.Person_type, " _
        & "    R.Lang_Study_Before, R.Lang_Study_Where, R.Lang_Study_Year, R.Lang_Study_Length, " _
        & "    R.Lang_Study_Informal, R.Lang_Study_Other, R.Mother_Tongue " _
        & "FROM Insessional_Registers R, (" _
        & "   SELECT T1.Class_ID Old_Class_ID, T2.Class_ID New_Class_ID " _
        & "   FROM Module_Occurrences T1 " _
        & "      LEFT JOIN Module_Occurrences T2 " _
        & "      ON T1.Module = T2.Module AND T1.Occurrence = T2.Occurrence " _
        & "   WHERE T1.Academic_Year = '" & AY1 & "' AND T1.Academic_Term = '" & AT1 & "' " _
        & "     AND T2.Academic_Year = '" & AY2 & "' AND T2.Academic_Term = '" & AT2 & "') T " _
        & "WHERE R.Class_ID = T.Old_Class_ID AND NOT R.Place_Cancelled "
    cmd.CommandText = cSQL
    cmd.Execute
    ShowProgress (2 / 5)
    DoEvents
    
        
        
    
End Function






