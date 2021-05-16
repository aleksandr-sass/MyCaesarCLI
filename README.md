# MyCaesarCLI

Hello, Rolling Scopes School! This is my first task - My_Caesar_CLI.

How to use it:

Install Node.JS from official site (https://nodejs.org/ru/download/);
Create a folder (like "C:\test" for Windows, or "/home/test" for Linux)
Then download all '.JS' and '.TXT' files on your computer;
Then copy those files to a folder that was created at step #2;
Then open "Command Line" (in Windows) or "Terminal" (on Linux);
At first cmd.exe and Terminal will be opened at your Home directory, so you have to change it to the directory, which was created on step #2. To do that, please, type: cd (like "C:\test" for Windows, or "/home/test" for Linux).
In order to encode a text, which is situated in some file with a Caesar Cipher you should type next commands:
node //this is the name of runtime for JavaScript code;
my_caesar_cli.js //this the name of main JavaScript module;
-a //action
encode //for encoding text
-s //shift
<some_number> // 0..26 - it can be positive or negative, or even zero - on this number text will be shifted
-i //input
<path_to_input_file> // for example "./input.txt"
-o //output
<path_to_output_file> // for example "./output.txt" So as you can see there are ten required arguments. So, if number of arguments will not be actually ten (or less or bigger, for example) you will get an error message like this one: ================ !!!ERROR:Not enough data. Please, try to type:
node my_caesar_cli.js -a encode -s 7 -i "./input.txt" -o "./output.txt"

================

If you want to try this Command Line Tool, I can advice you two ways:
node my_caesar_cli.js -a encode -s 7 -i "./input.txt" -o "./output.txt"
node my_caesar_cli.js -a decode -s 7 -i "./output.txt" -o "./input.txt"
P.S. Реализован чисто текстовый режим (в input.txt - вставляем 'This is secret. Message about "" symbol!', код запускаем, затем JS-код в конец файла output.txt дописывает) 'Aopz pz zljyla. Tlzzhnl hivba "" zftivs!'. P.P.S. Честно говоря, это мой первый опыт работы в github. Возможно, в процессе проверки Вами моего решения что-то может "не пойти". Если такие моменты всё-же есть, Вы можете написать мне об этом: ВК: https://vk.com/aleksandr.sass email: a.sass@tut.by Viber/telegram: +375298237919 (МТС Беларусь)
