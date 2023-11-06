function distanceFromHqInBlocks(currentStreet) {
    const headquartersStreet = 42;
  
    if (currentStreet < 42) {
      return headquartersStreet - currentStreet;
    } else {
      return currentStreet - headquartersStreet;
    }
  }
  function distanceFromHqInFeet(currentStreet) {
    const feetPerBlock = 264;
    const blocks = distanceFromHqInBlocks(currentStreet);
    return blocks * feetPerBlock;
  }

  function distanceTravelledInFeet(startingPoint, destination) {
    const feetPerBlock = 264;
  
    let distanceInBlocks;
    if (destination < startingPoint) {
      distanceInBlocks = startingPoint - destination;
    } else {
      distanceInBlocks = destination - startingPoint;
    }
  
    const distanceInFeet = distanceInBlocks * feetPerBlock;
  
    return distanceInFeet;
  }
 

  function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
  
    if (distanceInFeet <= 400) {
      return 0;
    } else if (distanceInFeet <= 2000) {
      return (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
