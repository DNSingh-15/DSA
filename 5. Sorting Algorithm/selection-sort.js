//  selection sort -- hum array me minimum element ko dhoorte hai aur use starting me leke ate hai -- fir 2nd minimum element ko dhoorte hai aur use next position pe fix krte hai --- same for every element 

// 1. 1st itteration me 1st element minimum hoga --aur minimum se baki elements ko compare krenge agr koi usse chhota mila toh swap kr denge   ---------  2nd itteration me 2nd element minimum hoga  -- aur 2nd minimum se baki elements ko compare krenge agr koi usse chhota mila toh swap kr denge  ------------   and same


let arr = [8, 0, 7, 1, 3, 5]

for (i = 0; i < arr.length; i++) {
    let min = i;                           // consider 1st element is a minimum element                
    for (j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[min]) {
            min = j;                    // swap index
        }
    }
    // console.log(arr[min])                    
    if (min != i) {                               
        let tmp = arr[i];
        arr[i] = arr[min];
        arr[min] = tmp;
    }
}
console.log(arr)
