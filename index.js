// Code your solution in this file!


function distanceFromHqInBlocks (pickuploaction){
return Math.abs(42 - pickuploaction)
}
console.log (distanceFromHqInBlocks(50))

function distanceFromHqInFeet(pickupLocation) {
    let blocks = distanceFromHqInBlocks(pickupLocation);
    return blocks * 264;  
  }
  console.log(distanceFromHqInFeet(50));

  function distanceTravelledInFeet( x, y){
    return Math.abs((x - y)*264)
  }
  console.log (distanceTravelledInFeet (48,43))
  console.log (distanceTravelledInFeet (50,60))

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0; 
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        return 25; 
    } else {
        return "cannot travel that far"; 
    }
}