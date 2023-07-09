// Code your solution here
function findMatching(drivers, name){
    const filter = drivers.filter(driver=>driver.toLowerCase()==name.toLowerCase())
    return filter;
}
findMatching(drivers, "Bobby")
console.log(findMatching(drivers, "Bobby"));

function fuzzyMatch(drivers, name){
    const filter = drivers.filter(driver=>driver.slice(0,2)==name)
    return filter
}
console.log(fuzzyMatch(drivers, "Sa"));

function matchName(drivers, name){
    const filter = drivers.filter(driver=>driver.name===name)
    return filter
}
console.log(matchName(drivers, "Bobby"));