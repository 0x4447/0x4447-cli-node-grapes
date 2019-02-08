let fs = require('fs');

//
//	This chain will create the fodler structure
//
module.exports = function(container) {

	return new Promise(function(resolve, reject) {

		//
		//	Start the chain
		//
		folder_structure(container)
			.then(function(container) {

				return create_descriptin_file(container);

			}).then(function(container) {

				//
				//	->	Exit the chain
				//
				return resolve(container);

			}).catch(function(error) {

				//
				//	->	Boubble up the error
				//
				return reject(error);

			});

	});

}

//  _____    _____     ____    __  __   _____    _____   ______    _____
// |  __ \  |  __ \   / __ \  |  \/  | |_   _|  / ____| |  ____|  / ____|
// | |__) | | |__) | | |  | | | \  / |   | |   | (___   | |__    | (___
// |  ___/  |  _  /  | |  | | | |\/| |   | |    \___ \  |  __|    \___ \
// | |      | | \ \  | |__| | | |  | |  _| |_   ____) | | |____   ____) |
// |_|      |_|  \_\  \____/  |_|  |_| |_____| |_____/  |______| |_____/
//

//
//	Create the folder structure needed for this framework to work
//
function folder_structure(container)
{
	return new Promise(function(resolve, reject) {

		//
		//	1.	Loop over all the folder that we read, and create the whole
		//		structure.
		//
		for(folder in container.dir)
		{
			//
			//	1.	Check if the folder dose not exists
			//
			if(!fs.existsSync(container.dir[folder]))
			{
				//
				//	1.	Make the folder only when it is not present.
				//
				fs.mkdirSync(container.dir[folder]);
			}
		}

		//
		//	-> Move to the next chain
		//
		return resolve(container);

	});
}

//
//	Crate default description file to show how the description
//	section works
//
function create_descriptin_file(container)
{
	return new Promise(function(resolve, reject) {

		//
		//	1.	Default content of the description file, use as an
		//		example.
		//
		let string = "This is a default description made by Grapse. Sponsored by 0x4447.com";

		//
		//	2.	Create a File Descriptor based on the path that we made
		//		so the system knows where and how this file should behave
		//
		let fd = fs.openSync(container.dir.description + "/description.txt", 'w');

		//
		//	3.	Write the page on disk
		//
		fs.writeSync(fd, string, 0, string.length);

		//
		//	-> Move to the next chain
		//
		return resolve(container);

	});
}
