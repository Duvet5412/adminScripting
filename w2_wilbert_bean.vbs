'******************************************************
'Program name:Sum and Average Calculator              *
'Author: Wilbert Bean III                             *
'Purpose: to get a sum and average of 3 #s            *
'Discription: Basic WSH script written in NotePad++   *
'How to run: cscript w2_wilbert_bean.vbs 1 2 3        *
'Date Created:4/18/23                                 *
'******************************************************

Wnum =  cint(WScript.arguments(0))		'Wnumb is a variable container
Bnum =  cint(WScript.arguments(1))		'Bnumb is a variable container
Inum =  cint(WScript.arguments(2))		'Inumb is a Vairable container
total = Wnum + Bnum + Inum				'total is a variable
wscript.echo ("The total =" & total)	' & operator is concatenation operator to print number and strings together
average = total / 3						'averge is a variable
wscript.echo ("The Average =" & average)' & operator is concatenation operator to print number and strings together