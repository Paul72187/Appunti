function expect(actual){
	return{
		toEqual: function(expected){
			if(actual == expected){
				console.log("Passed")
			}else{
				console.log("Failed")
			}
		},
		toBe: function(expected){
			if(actual === expected){
				console.log("Passed")
			}else{
				console.log("Failed")
			}
		},
		//can be used on Arrays and Strings
		toInclude: function(expected){
			console.log(expected)
			if(actual.includes(expected)){
				console.log("Passed")
			}else{
				console.log("Failed")
			}
		}
	}
}
function it(label, callback){
	console.log(`Test: ${label}`)
	callback();
}


// it("should have no notes when start the first time", () => {
// 	const b = new Biblioteca();
// 	expect(b.storageArr.length).toEqual(0);
// })

// it("should have 3 notes when the user crete them ", () => {
// 	const b = new Biblioteca();
// 	b.add("shopping", "veggie")
// 	b.add("call", "hairdresser")
// 	b.add("meeting", "create a new project")
// 	expect(b.storageArr.length).toEqual(3)
// })

// it("should have a title of top up and a content mobile and oister", () =>{
// 	const b = new Biblioteca();
// 	b.add("top up", "mobile and oister")
// 	expect(b.storageArr[3].title).toEqual("top up")
// 	expect(b.storageArr[3].content).toEqual("mobile and oister")
// })
