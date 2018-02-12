
int addCoin(int state, int dep) {
    switch(state) {
        case 0: 
            switch(dep) {
                case 5: 
                    return 5; 
                case 10:
                    return 10;
                case 25: 
                    return 25;
            }
            break;
        case 5: 
            switch(dep) {
                case 5: 
                    return 10; 
                case 10:
                    return 15;
                case 20: 
                    return 25;
            }
            break;
        case 10:
        case 15: 
        case 20: 
        case 25: 
    }
}
int main(void)
{
    int state = 0;
    while (state != 25) {
        state = addCoin(state, 10);
    }
}
