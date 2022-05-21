/*Write a loop that makes the following pattern using console.log():

    #
    ##
    ###
    ####
    #####
    ######
    ####### */

Ans:

    let arshse = '';
for (let i = 0; i < 7; i++) {
    arshse += '#';
    console.log(arshse)
}


/*Using loop print the following pattern

 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000 */

Ans:
    console.log('i i^2 I^3')
for (let i = 0; i < 10; i++) {
    console.log(i, i ** 2, i ** 3);
}