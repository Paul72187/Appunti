
class FakeLocalStorage {

	constructor() { 
		this.memory = {}
	}

	getItem(key){
		if (this.memory[key] == undefined){
			return null
		}
		return this.memory[key]
	}
	setItem(key, value){
	this.memory[key] = value 

	}
}


it("should have no notes when start the first time", () => {
	const fakeLocalStorage = new FakeLocalStorage 
	const b = new Biblioteca(fakeLocalStorage);
	expect(b.storageArr.length).toEqual(0);
})

it("should have 3 notes when the user crete them ", () => {
	const fakeLocalStorage = new FakeLocalStorage 
	const b = new Biblioteca(fakeLocalStorage);
	b.add("shopping", "veggie")
	b.add("call", "hairdresser")
	b.add("meeting", "create a new project")
	expect(b.storageArr.length).toEqual(3)
})

it("should have a title that includes top and a content that includes mobile", () =>{
	const fakeLocalStorage = new FakeLocalStorage 
	const b = new Biblioteca(fakeLocalStorage);
	b.add("top up", "mobile and oister")
	console.log(b.storageArr)
	expect(b.storageArr[0].title).toInclude("top")
	expect(b.storageArr[0].content).toInclude("mobile")
})

it("check the memory storage", () => {
	const fakeLocalStorage = new FakeLocalStorage 
	const b = new Biblioteca(fakeLocalStorage);
	b.add("shopping", "veggie")
	console.log(fakeLocalStorage.memory)
	expect(fakeLocalStorage.memory["My_Notes"]).toEqual('[{"title":"shopping","content":"veggie"}]')
})