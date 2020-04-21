var x = 60;
var y = typeof(x);
var arr1 = [1,'v',3,'n',5,6];
//var z = typeof(arr1[i]);
function text1()
{
    if(y == "number")
    {
        document.writeln("text1 string");
    } 
    if(y == "string")
    {
        document.writeln("text1 number");
    }  
}
function text2()
{
    switch(y)
    {
        case "number":
            document.writeln("text2 number");
            break;
        case "string":
            document.writeln("text2 string");
            break;
        default:
            break;
    }
}
function checkArr()
{
    for(var i = 0;i<5;i++)
    {
        document.writeln("checkArr" + " " + arr1[i]);
    }
}
function text3()
{
    var n1 = 0;
    var s1 = 0;
    for (var i = 0; i <= 5; i ++)
    {
        var z = typeof(arr1[i]);
        if(z == "number")
        {
            s1 = s1+1;
        }
        if(z == "string")
        {
            n1 = n1+1;
        }
    }
    var kieudulieu1 =
    {
        kieunumber: n1,
        kieustring: s1,
        hienthi1 : function()
        {
            return "kieu so" + " " + this.kieunumber + " " + "kieu chuoi" + " " + this.kieustring;
        }
    }
    document.writeln("text3" + " " + kieudulieu1.hienthi1());
}
function text4()
{
    var n2 = 0;
    var s2 = 0;
    for (var i = 0; i <= 5; i ++)
    {
        var z = typeof(arr1[i]);
        switch (z)
        {
            case "number":
                n2 = n2 + 1;
                break;
            case "string":
                s2 = s2 + 1;
                break;
            default:
                break;
        }
    }
    var kieudulieu2 =
    {
        kieunumber: n2,
        kieustring: s2,
        hienthi2 : function()
        {
            return "kieu so" + " " + this.kieunumber + " " + "kieu chuoi" + " " + this.kieustring;
        }
    }
    document.writeln("text4" + " " + kieudulieu2.hienthi2());
}
text1();
text2();
//checkArr();
text3();
text4();