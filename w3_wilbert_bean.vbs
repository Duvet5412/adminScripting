'****************************************************************
'Program name: Folder Analyzer                                  *
'Author: Wilbert Bean III                                       *
'Purpose: to get the size, date created and name of a folder    *
'Description: Basic WSH script written in NotePad++             *
'How to run: cscript w3_wilbert_bean.vbs "C:\temp"              *
'Date Created:4/18/23                                           *
'****************************************************************

Wn = wscript.arguments(0)					' Wn is a variable argument
set Ws = createobject("scripting.filesystemobject")	' sets the file system
set folder = Ws.getfolder (Wn)				' sets the folder in the file system
set files = folder.files					' sets files in the folder
wscript.echo "files"						' creates the title
for each file in files						
wscript.echo "name: " & (file.name)				' & operator is concatenation operator to print the name of all files and strings together
wscript.echo "size: " & (file.size)				' & operator is concatenation operator to print the size of all files and strings together
wscript.echo "date: " & (file.datecreated)		' & operator is concatenation operator to print the date the file was created and strings together
next 
