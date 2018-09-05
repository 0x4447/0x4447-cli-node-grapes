#!/usr/bin/env node

let fs = require('fs');
let npm = require('./package.json');
let program = require('commander');
let recursive = require("recursive-readdir");

//   _____   ______   _______   _______   _____   _   _    _____    _____
//  / ____| |  ____| |__   __| |__   __| |_   _| | \ | |  / ____|  / ____|
// | (___   | |__       | |       | |      | |   |  \| | | |  __  | (___
//  \___ \  |  __|      | |       | |      | |   | . ` | | | |_ |  \___ \
//  ____) | | |____     | |       | |     _| |_  | |\  | | |__| |  ____) |
// |_____/  |______|    |_|       |_|    |_____| |_| \_|  \_____| |_____/
//

//
//	The CLI options for this app. At this moment we just support Version
//
program
	.version(npm.version)
	.option('-s, --source [type]', 		'path to the folder to upload')
	.option('-b, --build [type]', 		'path to the folder to upload')
	.option('-i, --init [type]', 		'path to the folder to upload')

//
//	React when the user needs help
//
program.on('--help', function() {

	//
	//	Just add an empty line at the end of the help to make the text more
	//	clear to the user
	//
	console.log("");

});

//
//	Pass the user input to the module
//
program.parse(process.argv);

//
//	Check if the user provided the dir source where to copy the file from
//
if(!program.source)
{
	console.log('Missing source');
	process.exit(0);
}

//	 __  __              _____   _   _
//	|  \/  |     /\     |_   _| | \ | |
//	| \  / |    /  \      | |   |  \| |
//	| |\/| |   / /\ \     | |   | . ` |
//	| |  | |  / ____ \   _| |_  | |\  |
//	|_|  |_| /_/    \_\ |_____| |_| \_|
//

//
//	The main container that will be passed around in each chain to collect
//	all the data and keep it in one place
//
let container = {
	//
	//
	//
	dir: {
		parameters: process.cwd() + "/" + program.source + "/01_Parameters",
		conditions: process.cwd() + "/" + program.source + "/02_Conditions",
		resources: 	process.cwd() + "/" + program.source + "/03_Resources",
		outputs: 	process.cwd() + "/" + program.source + "/04_Output",
	},
	//
	//
	//
	save_to: process.cwd() + "/" + program.source + "/CloudFormation.json",
	//
	//
	//
	skip: [".DS_Store", "README.md"],
	//
	//
	//
	files: {},
	//
	//
	//
	jsons: {
		parameters: [],
		conditions: [],
		resources: 	[],
		outputs: 	[]
	},
	//
	//
	//
	final_json: {
		Parameters: {},
		Conditions: {},
		Resources: 	{},
		Outputs: 	{}
	}
};

//
//	Start the chain
//
get_the_parameters(container)
	.then(function(container) {

		return get_the_conditions(container);

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
		//	->	Exit the app
		//
		process.exit();

	}).catch(function(error) {

		//
		//	<>> Debug
		//
		console.log(error);

		//
		//	->	Exit the app
		//
		process.exit(-1);

	});

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
function get_the_parameters(container)
{
	return new Promise(function(resolve, reject) {

		recursive(container.dir.parameters, container.skip, function (err, files) {

			//
			//
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
//
//
function get_the_conditions(container)
{
	return new Promise(function(resolve, reject) {

		recursive(container.dir.conditions, container.skip, function (err, files) {

			//
			//
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
//
//
function get_the_resources(container)
{
	return new Promise(function(resolve, reject) {

		recursive(container.dir.resources, container.skip, function (err, files) {

			//
			//
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
//
//
function get_the_outputs(container)
{
	return new Promise(function(resolve, reject) {

		recursive(container.dir.outputs, container.skip, function (err, files) {

			//
			//
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
//
//
function read_all_the_files(container)
{
	return new Promise(function(resolve, reject) {

		for(folder in container.files)
		{
			//
			//
			//
			container.files[folder].forEach(function(file) {

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
//
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
//
//
function save_to_disk(container)
{
	return new Promise(function(resolve, reject) {

		//
		//	1.	
		//
		let file = JSON.stringify(container.final_json, null, "\t");

		//
		//	3.	Create a File Descriptor based on the path that we made
		//		so the system knows where and how this file should behave
		//
		let fd = fs.openSync(container.save_to, 'w')

		//
		//	4.	Write the page on disk
		//
		fs.writeSync(fd, file, 0, file.length);

		//
		//	-> Move to the next chain
		//
		return resolve(container);

	});
}


function capitalize_first_letter(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}