var arr = ["cat", "cats", "dog", "frog", "cat"];

function count(arr) 
{
    let map = new Map();
    for (let k = 0; k < arr.length; k++) 
    {
        if (map.has(arr[k]) == false) {
            map.set(arr[k], 1);
        } else { let cur = map.get(arr[k]);
            cur += 1;
            map.set(arr[k], cur);}
    }
    let max_cur = 0,
        cur;
    for (let st of map.values()) { if (st > max_cur)
        { max_cur = st;}
                                 } 
    for (let key of map.keys()) {if (map.get(key) == max_cur) 
        {   return key;}
                                }
}
console.log(count(arr));