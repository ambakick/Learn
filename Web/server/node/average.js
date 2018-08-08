function average(arr1){
    var sum=0;
    for(var i=0;i<arr1.length;i++)
    {
        sum+=arr1[i];
    }
    console.log(sum/arr1.length);
}

var scores = [90,100,95,95,100];
average(scores);