let fs = require('fs');
let recursive = require("recursive-readdir");

//
//	This chain will generate a CloudFormation files from
//	all the small ones.
//
module.exports = function(container) {

	return new Promise(function(resolve, reject) {

		//
		//	Start the chain
		//
		get_the_description(container)
			.then(function(container) {

				return get_the_metadata(container);

			}).then(function(container) {

				return get_the_parameters(container);

			}).then(function(container) {

				return get_the_mappings(container);

			}).then(function(container) {

				return get_the_conditions(container);

			}).then(function(container) {

				return get_the_transform(container);

			}).then(function(container) {

				return get_the_resources(container);

			}).then(function(container) {

				return get_the_outputs(container);

			}).then(function(container) {

				return read_all_the_files(container);

			}).then(function(container) {

				return merge_all_in_to_one(container);

			}).then(function(container) {

				return save_to_disk(container);

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
//	Read the content of the Description folder.
//
function get_the_description(container)
{
	return new Promise(function(resolve, reject) {

		//
		//	1.	Skip this section if the folder dose not exists.
		//
		if(!fs.existsSync(container.dir.description))
		{
			//
			//	-> Move to the next chain
			//
			return resolve(container);
		}

		//
		//	2.	Read the content of the selected folder to get all the
		//		paths to the JSON files.
		//
		recursive(container.dir.description, container.skip, function (error, files) {

			//
			//	1.	Check for internal erros
			//
			if(error)
			{
				return reject(error);
			}
		
			//
			//	2.	Save the result in the container for the next promise.
			//
			container.files.description = files;

			//
			//	-> Move to the next chain
			//
			return resolve(container);

		});

	});
}

//
//	Read the content of the Metadata folder.
//
function get_the_metadata(container)
{
	return new Promise(function(resolve, reject) {

		//
		//	1.	Skip this section if the folder dose not exists.
		//
		if(!fs.existsSync(container.dir.metadata))
		{
			//
			//	-> Move to the next chain
			//
			return resolve(container);
		}

		//
		//	2.	Read the content of the selected folder to get all the
		//		paths to the JSON files.
		//
		recursive(container.dir.metadata, container.skip, function (error, files) {

			//
			//	1.	Check for internal erros
			//
			if(error)
			{
				return reject(error);
			}
		
			//
			//	2.	Save the result in the container for the next promise.
			//
			container.files.metadata = files;

			//
			//	-> Move to the next chain
			//
			return resolve(container);

		});

	});
}

//
//	Read the content of the Parameters folder.
//
function get_the_parameters(container)
{
	return new Promise(function(resolve, reject) {

		//
		//	1.	Skip this section if the folder dose not exists.
		//
		if(!fs.existsSync(container.dir.parameters))
		{
			//
			//	-> Move to the next chain
			//
			return resolve(container);
		}

		//
		//	2.	Read the content of the selected folder to get all the
		//		paths to the JSON files.
		//
		recursive(container.dir.parameters, container.skip, function (error, files) {

			//
			//	1.	Check for internal erros
			//
			if(error)
			{
				return reject(error);
			}
		
			//
			//	2.	Save the result in the container for the next promise.
			//
			container.files.parameters = files;

			//
			//	-> Move to the next chain
			//
			return resolve(container);

		});

	});
}

//
//	Read the content of the Mappings folder.
//
function get_the_mappings(container)
{
	return new Promise(function(resolve, reject) {

		//
		//	1.	Skip this section if the folder dose not exists.
		//
		if(!fs.existsSync(container.dir.mappings))
		{
			//
			//	-> Move to the next chain
			//
			return resolve(container);
		}

		//
		//	2.	Read the content of the selected folder to get all the
		//		paths to the JSON files.
		//
		recursive(container.dir.mappings, container.skip, function (error, files) {

			//
			//	1.	Check for internal erros
			//
			if(error)
			{
				return reject(error);
			}
		
			//
			//	2.	Save the result in the container for the next promise.
			//
			container.files.mappings = files;

			//
			//	-> Move to the next chain
			//
			return resolve(container);

		});

	});
}

//
//	Read the content of the Conditions folder.
//
function get_the_conditions(container)
{
	return new Promise(function(resolve, reject) {

		//
		//	1.	Skip this section if the folder dose not exists.
		//
		if(!fs.existsSync(container.dir.conditions))
		{
			//
			//	-> Move to the next chain
			//
			return resolve(container);
		}

		//
		//	2.	Read the content of the selected folder to get all the
		//		paths to the JSON files.
		//
		recursive(container.dir.conditions, container.skip, function (error, files) {

			//
			//	1.	Check for internal erros
			//
			if(error)
			{
				return reject(error);
			}
		
			//
			//	2.	Save the result in the container for the next promise.
			//
			container.files.conditions = files;

			//
			//	-> Move to the next chain
			//
			return resolve(container);

		});

	});
}

//
//	Read the content of the Transform folder.
//
function get_the_transform(container)
{
	return new Promise(function(resolve, reject) {

		//
		//	1.	Skip this section if the folder dose not exists.
		//
		if(!fs.existsSync(container.dir.transform))
		{
			//
			//	-> Move to the next chain
			//
			return resolve(container);
		}

		//
		//	2.	Read the content of the selected folder to get all the
		//		paths to the JSON files.
		//
		recursive(container.dir.transform, container.skip, function (error, files) {

			//
			//	1.	Check for internal erros
			//
			if(error)
			{
				return reject(error);
			}
		
			//
			//	2.	Save the result in the container for the next promise.
			//
			container.files.transform = files;

			//
			//	-> Move to the next chain
			//
			return resolve(container);

		});

	});
}

//
//	Read the content of the Resources folder.
//
function get_the_resources(container)
{
	return new Promise(function(resolve, reject) {

		//
		//	1.	Skip this section if the folder dose not exists.
		//
		if(!fs.existsSync(container.dir.resources))
		{
			//
			//	-> Move to the next chain
			//
			return resolve(container);
		}

		//
		//	2.	Read the content of the selected folder to get all the
		//		paths to the JSON files.
		//
		recursive(container.dir.resources, container.skip, function (error, files) {

			//
			//	1.	Check for internal erros
			//
			if(error)
			{
				return reject(error);
			}
		
			//
			//	2.	Save the result in the container for the next promise.
			//
			container.files.resources = files;

			//
			//	-> Move to the next chain
			//
			return resolve(container);

		});

	});
}

//
//	Read the content of the Outputs folder.
//
function get_the_outputs(container)
{
	return new Promise(function(resolve, reject) {

		//
		//	.	Skip this section if the folder dose not exists.
		//
		if(!fs.existsSync(container.dir.outputs))
		{
			//
			//	-> Move to the next chain
			//
			return resolve(container);
		}

		//
		//	2.	Read the content of the selected folder to get all the
		//		paths to the JSON files.
		//
		recursive(container.dir.outputs, container.skip, function (error, files) {

			//
			//	1.	Check for internal erros
			//
			if(error)
			{
				return reject(error);
			}
		
			//
			//	2.	Save the result in the container for the next promise.
			//
			container.files.outputs = files;

			//
			//	-> Move to the next chain
			//
			return resolve(container);

		});

	});
}

//
//	Now that we have the paths to all the files, we can read
//	their content.
//
function read_all_the_files(container)
{
	return new Promise(function(resolve, reject) {

		//
		//	1.	Loop over all the folders.
		//
		for(folder in container.files)
		{
			//
			//	1.	Loop over all the paths that we got for each folder
			//
			container.files[folder].forEach(function(file) {

				//
				//	1.	Read the content of all the JSON files that we got.
				//
				container.jsons[folder].push(require(file));

			});
		}

		//
		//	-> Move to the next chain
		//
		return resolve(container);

	});
}

//
//	Now that we have all the JSON data in to memory we can merge
//	all the Objects, in to the final file
//
function merge_all_in_to_one(container)
{
	return new Promise(function(resolve, reject) {

		for(folder in container.jsons)
		{
			for(index in container.jsons[folder])
			{
				for(key in container.jsons[folder][index])
				{
					container.final_json[capitalize_first_letter(folder)][key] = container.jsons[folder][index][key]
				}
			}
		}

		//
		//	-> Move to the next chain
		//
		return resolve(container);

	});
}

//
//	Save the final, big JS Object on to disk
//
function save_to_disk(container)
{
	return new Promise(function(resolve, reject) {

		//
		//	1.	Convert the JS Object in to a String, and add tabs indentation
		//		to have a nicelly formated file.
		//
		let file = JSON.stringify(container.final_json, null, "\t");

		//
		//	2.	Create a File Descriptor based on the path that we have.
		//
		let fd = fs.openSync(container.save_to, 'w')

		//
		//	3.	Write the file to disk.
		//
		fs.writeSync(fd, file, 0, file.length);

		//
		//	-> Move to the next chain
		//
		return resolve(container);

	});
}

//	 ______  _    _  _   _   _____  _______  _____  ____   _   _   _____ 
//	|  ____|| |  | || \ | | / ____||__   __||_   _|/ __ \ | \ | | / ____|
//	| |__   | |  | ||  \| || |        | |     | | | |  | ||  \| || (___  
//	|  __|  | |  | || . ` || |        | |     | | | |  | || . ` | \___ \ 
//	| |     | |__| || |\  || |____    | |    _| |_| |__| || |\  | ____) |
//	|_|      \____/ |_| \_| \_____|   |_|   |_____|\____/ |_| \_||_____/ 
//	

//
//	This function will capitalize the first character of a string
//
function capitalize_first_letter(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}