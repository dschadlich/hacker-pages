Meteor.methods({
  'hackers.insert': function(newHackerObject) {

    Hackers.insert(newHackerObject, function (error, result) {
      console.log (error);
      // if (error !== null){
      //   alert("OPERATION FAILED.");
      // }else{
      //   alert("OPERATION SUCCESSFUL.");
      // }
    });

  }
});
