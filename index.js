#!/usr/bin/env node

let npm = require('./package.json');
let program = require('commander');

let init = require('./chains/init');
let build = require('./chains/build');

//   _____   ______   _______   _______   _____   _   _    _____    _____
//  / ____| |  ____| |__   __| |__   __| |_   _| | \ | |  / ____|  / ____|
// | (___   | |__       | |       | |      | |   |  \| | | |  __  | (___
//  \___ \  |  __|      | |       | |      | |   | . ` | | | |_ |  \___ \
//  ____) | | |____     | |       | |     _| |_  | |\  | | |__| |  ____) |
// |_____/  |______|    |_|       |_|    |_____| |_| \_|  \_____| |_____/
//

//
//	The CLI options for this app. At this moment we just support Version.
//
program
	.version(npm.version)
	.option('-s, --source [type]', 		'path to the folder to upload')
	.option('-b, --build [type]', 		'path to the folder to upload')
	.option('-i, --init [type]', 		'path to the folder to upload')

//
//	React when the user needs help.
//
program.on('--help', function() {

	//
	//	Just add an empty line at the end of the help to make the text more
	//	clear to the user.
	//
	console.log("");

});

//
//	Pass the user input to the module.
//
program.parse(process.argv);

//
//	Check if the user provided the dir source where to copy the file from.
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
//	all the data and keep it in one place.
//
let container = {
	//
	//	A list of all the dirrectories that we have to scan to get
	//	all the data.
	//
	dir: {
		description: 	process.cwd() + "/" + program.source + "/01_Description",
		metadata: 		process.cwd() + "/" + program.source + "/01_Metadata",
		parameters: 	process.cwd() + "/" + program.source + "/01_Parameters",
		mappings: 		process.cwd() + "/" + program.source + "/02_Mappings",
		conditions: 	process.cwd() + "/" + program.source + "/03_Conditions",
		transform: 		process.cwd() + "/" + program.source + "/04_Transform",
		resources: 		process.cwd() + "/" + program.source + "/04_Resources",
		outputs: 		process.cwd() + "/" + program.source + "/05_Output",
	},
	//
	//	The path where to save the end result
	//
	save_to: process.cwd() + "/" + program.source + "/CloudFormation.json",
	//
	//	Files that needs to be skiped when we read the content of the dirs
	//
	skip: [".DS_Store", "README.md"],
	//
	//	This object will hold all the dirrect paths to the files, that
	//	later on needs to be read.
	//
	files: {},
	//
	//	The content of all the files that we read
	//
	jsons: {
		description:[],
		metadata: 	[],
		parameters: [],
		mappings: 	[],
		conditions: [],
		transform: 	[],
		resources: 	[],
		outputs: 	[]
	},
	//
	//	This object is the final structure of the CloudFormation file.
	//
	final_json: {
		AWSTemplateFormatVersion: "2010-09-09",
		Description:{},
		Metadata: 	{},
		Parameters: {},
		Mappings: 	{},
		Conditions: {},
		Transform: 	{},
		Resources: 	{},
		Outputs: 	{}
	}
};

//
//	Start the chain.
//
cross_road(container)
	.then(function(container) {

		//
		//	->	Exit the app.
		//
		process.exit();

	}).catch(function(error) {

		//
		//	<>> Debug.
		//
		console.log(error);

		//
		//	->	Exit the app.
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
//	Decide what do to based on the parameters set by the user.
//
function cross_road(container)
{
	return new Promise(function(resolve, reject) {

		//
		//	1.	Check if we want to build the CloudFormation file.
		//
		if(program.build)
		{
			return build(container);
		}

		//
		//	2.	Check if we want to create a folder structure.
		//
		if(program.init)
		{
			return init(container);
		}

	});
}