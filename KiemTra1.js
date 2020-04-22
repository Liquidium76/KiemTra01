var arr1 = [1,'v',3,'n',5,6];
function buoc1if()
{
    var x = 60;
    var y = typeof(x);
    document.writeln("buoc 1 if");
    if(y == "number")
    {
        document.writeln(" string");
    } 
    if(y == "string")
    {
        document.writeln(" number");
    }  
}
function buoc1sw()
{
    var x = 60;
    var y = typeof(x);
    document.writeln("buoc 1 switch");
    switch(y)
    {
        case "number":
            document.writeln(" number");
            break;
        case "string":
            document.writeln(" string");
            break;
        default:
            break;
    }
}
function buoc2if()
{
    var n1 = 0;
    var s1 = 0;
    document.writeln("buoc 2 if");
    for (var i = 0; i <= 5; i ++)
    {
        var z = typeof(arr1[i]);
        if(z == "number")
        {
            document.writeln(" string");
            s1 = s1+1;
        }
        if(z == "string")
        {
            document.writeln(" number");
            n1 = n1+1;
        }
    }
    var kieudulieu1 =
    {
        kieunumber: n1,
        kieustring: s1, 
    }
}
function buoc2sw()
{
    var n2 = 0;
    var s2 = 0;
    document.writeln("buoc 2 switch");
    for (var i = 0; i <= 5; i ++)
    {
        var z = typeof(arr1[i]);
        switch (z)
        {
            case "number":
                n2 = n2 + 1;
                document.writeln(" number");
                break;
            case "string":
                s2 = s2 + 1;
                document.writeln(" string");
                break;
            default:
                break;
        }
    }
    var kieudulieu2 =
    {
        kieunumber: n2,
        kieustring: s2,
    }
}
buoc1if();
buoc1sw();
buoc2if();
buoc2sw();