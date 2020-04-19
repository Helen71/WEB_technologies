var static_arr = {
    red: 7,orange: 66,yellow: 555,green: 4444,blue: 33333,dark_blue: 222222,
    violet: 1111111,rainbow: 28,class: ['constructor','destructor', 'fields', 'methods']
};

var empty = {};
var arr = [];

function fill_arr(data) {
    if (data !== undefined) {
        arr = Object.entries(data);
        console.log(arr);
    } else {
        console.log(arr);
    }

}

fill_arr(static_arr);
fill_arr(empty);
