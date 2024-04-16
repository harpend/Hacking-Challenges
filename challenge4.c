#include <stdio.h>
#include <string.h>

int main(int argc, char *argv[]){
    char buf1[8], buf2[8];

    strcpy(buf1, "buf1");
    strcpy(buf2, "buf2");
    

    printf("buf1 is at %p and contains %s\n", buf1, buf1);
    printf("buf2 is at %p and contains %s\n", buf2, buf2);
       
    strcpy(buf1, argv[1]);

    printf("buf1 is at %p and contains %s\n", buf1, buf1);
    printf("buf2 is at %p and contains %s\n", buf2, buf2);

    if (!strcmp(buf2, "Donkey")){
        printf("Yippeeeeeee!!!!!\n");
    }
}