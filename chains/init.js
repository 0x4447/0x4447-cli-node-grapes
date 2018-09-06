let fs = require('fs');

//
//
//
module.exports = function(container) {

	return new Promise(function(resolve, reject) {

		//
		//	Start the chain
		//
		folder_structure(container)
			.then(function(container) {

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
//
//
function folder_structure(container)
{
	return new Promise(function(resolve, reject) {

		//
		//	-> Move to the next chain
		//
		return resolve(container);

	});
}