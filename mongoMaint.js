var funcObjFind = function(fullObj) {
  
   for (i = 0; i < 7000; i++)  {

	  var SomeObj = db.Collection.findOne({
					 ToDelete: "Yes",   
					 CreateDatedUtc:  {$gt : ISODate("2015-05-01T00:00:00Z"), $lt : ISODate("2015-08-24T00:00:00Z")}
		}, { _id: 1, CreateDatedUtc: 1 }
	  );
				 
				 
	  if(SomeObj != null && SomeObj._id != null) {
		db.Collection.remove({ _id : SomeObj._id});
		print(i + "Deleting: " ) + printjson(SomeObj);
				  }
				 
 
	if(SomeObj == null){
		print("No messages matched the criteria")
		break;
				  }
   
   };
};

funcObjFind();
