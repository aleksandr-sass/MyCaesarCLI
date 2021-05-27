# MyCaesarCLI

Hello, Rolling Scopes School! This is my first task - My_Caesar_CLI.

How to use it:

1) Install Node.JS from official site (https://nodejs.org/ru/download/);
2) Create a folder (like "C:\test" for Windows, or "/home/test" for Linux);
3) Then download all '.JS' and '.TXT' files on your computer;
4) Then copy those files to a folder that was created at step #2;
5) Then open "Command Line" (in Windows) or "Terminal" (on Linux);
6) At first cmd.exe and Terminal will be opened at your Home directory, so you have to change it to the directory, which was created on step #2. To do that, please, type: cd (like "C:\test" for Windows, or "/home/test" for Linux).
7) In order to try it out you can type the next command with TEN ARGUMENTS REQUIRED:

# node my_caesar_cli.js -a encode -s 7 -i "./input.txt" -o "./output.txt"

where:

I) node //this is the name of runtime for JavaScript code;

II) my_caesar_cli.js //this the name of main JavaScript module;

III) -a //action

IV) encode //for encoding text

V) -s //shift

VI) <some_number> // 0..26 - it can be positive or negative, or even zero - on this number text will be shifted

VII) -i //input

VIII) <path_to_input_file> // for example "./input.txt"

IX) -o //output

X) <path_to_output_file> // for example "./output.txt"

# IMPORTANT: if the number of arguments will not be actually ten (or less or more, for example) you will get an error message like this one:
================

# !!!ERROR:Not enough data.

# Please, try to type: node my_caesar_cli.js -a encode -s 7 -i "./input.txt" -o "./output.txt"

================

Also I can advice you the next two commands:

node my_caesar_cli.js -a encode -s 7 -i "./input.txt" -o "./output.txt"

node my_caesar_cli.js -a decode -s 7 -i "./output.txt" -o "./input.txt"

P.S. Реализован чисто файловый режим

(в input.txt - вставляем 'This is secret. Message about "" symbol!',

код запускаем, затем JS-код в конец файла output.txt дописывает)

'Aopz pz zljyla. Tlzzhnl hivba "" zftivs!'.

