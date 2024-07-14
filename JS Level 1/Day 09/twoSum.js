

let arr=[1,2,3,3,4,5,6,2,-7,-8,1,1,3,2,2,1,3,2,1,5,6,8]
let target =6;

function twosum(arr,target){
    let ans =[]
    for(let i=0;i<=arr.length;i++){  
        for(let j=i+1;j<=arr.length;j++){
            for(let k=i+2;k<=arr.length;k++){
                if(arr[i]+arr[j]+arr[k]==target){
                    ans.push([i,j,k])
                }

            }
          
        }
        
    }

    return ans;
}

let rv=twosum(arr,target)
console.log(rv);


/*
l3 arr=ram=[1,2,3...]
l4 target=ram=6

l21 rught side 
twosum 
arr=[1]
target=6
l7 ans []
l8 i=ram=0
i<=-arr.length 0<=9 true
l9 j=i+1 0+1=1
j<=arr.length 1<=9 true
l10 arr[0]+arr[1]=1+2==6 false
j++ j=1+1=2
j<=arr.leg 2<=9 true
l10 arr[i]+arr[j]==6
arr[0]
+arr[2]

1+3==6 false
j++ j=3
j<=arr.length 3<=9 true
l10 arr[i]+arr[3]
1+3==6 fa;lse



*/