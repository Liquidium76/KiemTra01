function kiemtraif()
{
    document.writeln("kiemtraif ");
    for(var i = 0; i<=5; i++)
    {
        var arr = [60,15,30,45,75];
        var a = arr[i] / 3;
        var b = arr[i] / 5;
        document.writeln(arr[i] + " chia cho 3 " + " bang " + a)
        document.writeln(arr[i] + " chia cho 5 " + " bang " + b)
    }

}
kiemtraif();