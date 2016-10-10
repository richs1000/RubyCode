		var title1= 'Define a Ruby class called Stock. Define getters and setters for three instance variables (symbol, price, shares) using attr_accessor'
		var initial = 'class Stock\n' +
                      '  attr_accessor :symbol, :price, :shares:\n' +
                      'end\n'
		
		
		var title2= 'Add an initialize method to Stock that takes three arguments (symbol, price, shares). Give  price and shares default values of 0.'
		var part2	= 'class Stock\n' +
                      '  def initialize(_symbol, _price=0, _shares=0)\n' +
					  '  	@symbol = _symbol\n' +
					  '  	@price = _price\n' +
					  '  	@shares = _shares\n' +
					  '  end\n' +
                      'end\n'
			

			
		var title3= 'Add a method value that returns the value of the stock (price x shares)'
		var part3 	= 'class Stock\n' +
					  '  def value\n'  +
					  '		@price * @shares\n'  +
					  '  end\n' +
                      'end\n'			  
		
		var title4= 'Add a method to_s that prints out symbol and the value of price x shares'
		var part4 	= 'class Stock\n' +
					  '  def to_s\n'  +
					  '		@symbol + " : " + value.to_s\n'  +
					  '  end\n' +
                      'end\n'	
		
		
		
		
		
		
		var title5= 'Bind an instance of class Stock to the variable appleStock with values: symbol = "AAPL", price = 100,shares = 5'
		var title5_1= 'Print the value of appleStock'
		var part5 	= 'appleStock = Stock.new("AAPL", 100, 5)\n' +
					  'puts appleStock\n'



		var title6= 'Define a Ruby class called Cash. Define getters and setters for one instance variable (value) using attr_accessor'
		var part6 	= 'class Cash\n' +
					  '  attr_accessor :value\n'  +
                      'end\n'	
					  
		
		var title7= 'Add an initialize method to Cash that takes one arguments (value). Give value a default value of 0.'
		var part7 	= 'class Cash\n' +
					  '  def initialize(_value = 0)\n'  +
					  '		@value = _value\n'  +
					  '  end\n' +
                      'end\n'	
		
		
		var title8= 'Add a method to_s that prints out "Cash" and the amount of cash'
		var part8 	= 'class Cash\n' +
					  '  def to_s\n'  +
					  '		"Cash : " + @value.to_s\n'  +
					  '  end\n' +
                      'end\n'	
		
		
		var title9= 'Bind an instance of class Cash to the variable myCash with value 200'
		var title9_1= 'Print the value of myCash'
		var part9 	= 'myCash = Cash.new(200)\n' +
					  'puts myCash\n'
		
		
		var title10= 'Add a compareValue method to Stock that takes one argument (_other). CompareValue returns true if the Stock object that receives the method call has a greater value than the _other argument and false otherwise'
		var part10 	= 'class Stock\n' +
					  '  def compareValue(_other)\n'  +
					  '		value > _other.value\n'  +
					  '  end\n' +
                      'end\n'	
					 
		var title11= '1)Bind an instance of class Stock to the variable ibmStock with values: symbol = "IBM", price = 30,shares = 10 '
		var title11_1= '2)Create an array called investmentArray with all four Stock objects and myCash'
		var title11_3= '3)Use the each method to print out all the Stock and Cash objects in investmentArray'
		var title11_4= '4)Use the select method to get an array of all the Stock and Cash objects in investmentArray with value greater than 300'
		var title11_5= '5)Use the inject method to calculate the total value of all the Stock and Cash objects investmentArray'
		var part11 	= 'fbStock = Stock.new("FB", 20, 8)\n' +
					  'investmentArray = [appleStock, ibmStock, googleStock, fbStock, myCash]\n' +
					  'investmentArray.each {|i| puts i }\n' +
					  'investmentArray.select {|i| i.value > 300 }\n' +
					  'investmentArray.inject(0) {|acc, i| acc + i.value }' 
		

		var jSONObject = {"test": [
        {"title": title1, "part": initial , "id": "1" },
        {"title": title2, "part": part2 , "id": "2" }
    ]
};
		
		
		
		
					  
        function displayErrors(fb) {
            if(fb.errors.length > 0) {
                alert(fb.errors[0]);
            }
        } 
		
		
		
		
		
		function createFields(mydiv,id){
			
			
			
			var data = "<h3 id='t"+id+"'></h3><br><div id='sortableTrash"+id+"' class='sortable-code'></div> <div id='sortable"+id+"' class='sortable-code'></div> <div style='clear:both;'></div><br><button class='btn btn-primary' href='#' id='feedbackLink"+id+"' style='margin-left:40%;'>Get feedback</button><br><br>";
			document.getElementById(mydiv).innerHTML += data;
			
			
			
			
			
		}
		
		
		
		var sizej=Object.keys(jSONObject.test).length;
		
		function populate(mydiv,title, part, id){
			
			var sortid="sortable"+id;
			var trash="sortableTrash"+id;
			var feed="#feedbackLink"+id;
			
			
			var parson = new ParsonsWidget({
                'sortableId': sortid,
                'trashId': trash,
                'max_wrong_lines': 1,
                'feedback_cb' : displayErrors
            });
			
			var next=document.getElementById("t"+id);
			
			if(next!=null){
				next.innerHTML=id+') '+title;
				 parson.init(part);
				 parson.shuffleLines();
				
				 $(feed).click(function(event){
						event.preventDefault();
						parson.getFeedback();
						if(parson.response==true){
					
					
					
							if(id==sizej){
								var cont=document.getElementById("container");
						cont.style.display="none";

						var subForm=document.getElementById("studentForm");
						var gr=document.getElementById("formGroup");
						subForm.style.display="block";
						gr.style.display="block";
							}
					
							document.getElementById("feedbackLink"+id).disabled = true;
							createNewQuestion(id);
						}
					
					});
			}else{
				
						var cont=document.getElementById("container");
						cont.style.display="none";

						var subForm=document.getElementById("studentForm");
						var gr=document.getElementById("formGroup");
						subForm.style.display="block";
						gr.style.display="block";
				
				
			}  
			
			
		}
		
		
		function createNewQuestion(numb){ 
			var temp=numb;
			createFields("container",(++temp));
			populate("questions",jSONObject.test[numb].title, jSONObject.test[numb].part, jSONObject.test[numb].id);
			
		}
		
		
		function checkInput(id,name){
			
			var input=$.trim($(id).val());
			
			if(input.length>0){
						return "";
			}
			
			return name;
			
		}
	
	
	
	

	
        $(document).ready(function(){
			

				createNewQuestion(0);
		
           
        });
		
		
		
		
		
		
		
		
	/*
	{"title": title1, "part": initial , "id": "1" },
        {"title": title2, "part": part2 , "id": "2" },
		        {"title": title3, "part": part3 , "id": "3" },
		{"title": title4, "part": part4 , "id": "4" },
        {"title": title5+"\n"+title5_1, "part": part5 , "id": "5" },
        {"title": title6, "part": part6 , "id": "6" },
		{"title": title7, "part": part7 , "id": "7"  },
        {"title": title8, "part": part8 , "id": "8" },
        {"title": title9+"\n"+title9_1, "part": part9 , "id": "9" },
		{"title": title10, "part": part10 , "id": "10" },
        {"title": title11+"\n"+title11_1+"\n"+title11_3+"\n"+title11_4+"\n"+title11_5, "part": part11, "id": "11" },

		{"title": "", "part":"", "id": "12" }*/
		
		
		
		
		