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

it("should pass my damn test", () => {
	expect(2+2).toEqual(4)
})

it("should include e ", () => {
	expect("hello").toInclude("e")
})

// it("add to local storage", () => {
// 	let lib = new Biblioteca();
// 	lib.add("shopping", "The hype")
// 	let arrJson = JSON.parse(localStorage.getItem("My_Notes"));
// 	expect(arrJson).toInclude({title: "shopping", content: "The hype"})
// })
