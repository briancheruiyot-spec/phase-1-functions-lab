// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  const headquaters = 42;
  return Math.abs(someValue-headquaters)
}
function distanceFromHqInFeet(someValue){
  distanceFromHqInBlocks(someValue);
  const feet = 264;
  return Math.abs(distanceFromHqInBlocks(someValue)*feet)
}

function distanceTravelledInFeet (start, destination) {
  const feetPerBlock = 264;
  return Math.abs(destination - start) * feetPerBlock;
  }

  function calculatesFarePrice(start, destination) {
    distanceTravelledInFeet(start, destination)
    if(distanceTravelledInFeet(start, destination) <= 400) {
      return 0;
    }else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <= 2000) {
      return(distanceTravelledInFeet(start, destination) - 400) *0.02;
    }else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <= 2500){
      return 25;
    }else if (distanceTravelledInFeet(start, destination)> 2500) {
      return "cannot travel that far";
    }
  }

