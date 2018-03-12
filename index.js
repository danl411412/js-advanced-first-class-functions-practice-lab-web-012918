// Code your solution in this file!
function logDriverNames(arr) {
  return arr.forEach(function(el) {
    console.log(el.name)
  })
}

function logDriversByHometown(arr, hometown) {
  return arr.forEach(function(el) {
    if(el.hometown == hometown) {
      console.log(el.name);
    }
  })
}

function driversByRevenue(arr) {
  return arr.slice().sort(function(a, b) {
    return a.revenue - b.revenue;
  });
}

function driversByName(arr) {
  return arr.slice().sort(function(a,b) {
    return a.name.localeCompare(b.name);
  });
}

function totalRevenue(arr) {
  return arr.reduce(function(total, rev1) {
    return total + rev1.revenue;
  }, 0);
}

function averageRevenue(arr) {
  var total = totalRevenue(arr);
  return total/arr.length;
}
