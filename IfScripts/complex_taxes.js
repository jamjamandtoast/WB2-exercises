if(singlefile){
    taxrate = 0;
}
else{
    taxrate = 0;
}
4:10
if (singlefile){
if (annual < 12000) {
    taxrate = 0.05;
}
else if (annual <= 24999.99){
    taxrate = 0.10;
}
else if (annual <= 74999.99){
    taxrate = 0.15;
}
else{
    taxrate = 0.2;
}
}
else{
if (annual < 12000) {
    taxrate = 0.0;
}
else if (annual <= 24999.99){
    taxrate = 0.06;
}
else if (annual <= 74999.99){
    taxrate = 0.11;
}
else{
    taxrate = 0.2;
}
}