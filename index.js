function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  console.log(saturdayFun());
  console.log(saturdayFun("watch movies"));
  
  const add = function (x, y) {
    return x + y;
  };
  
  console.log(add(2, 3));
  
  const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  
  console.log(mondayWork("work from home"));
  
  (function (baseNumber) { 
    console.log(baseNumber + 3);
  })(2);
  
  console.log(saturdayFun("watch movies"));
  
  console.log(mondayWork("work from home"));
  
  function wrapAdjective(visualFlair = "*") {
    return function (adjective) {
      return `You are ${visualFlair}${adjective}${visualFlair}!`;
    };
  }
  
  const encouragingPromptFunction = wrapAdjective("!!!");
  console.log(encouragingPromptFunction("a dedicated programmer"));
  