# 🍇 Grapes

The Grapes CLI tool was created after we experienced increasing frustration as we worked with massive CloudFormation files. We're amazed by what AWS CloudFormation can do and the way it helps with managing the AWS infrastructure, but working with one gigantic file is too labor intensive and prone to countless errors and endless frustration.

We decided to do something about this. The end result is Grapes, a simple CLI tool that cuts the amount of time spent creating a stack in half. It makes the entire process more enjoyable, in addition to making it easy to organize and extend.

Grapes enables you to break down the entire CloudFormation file structure into smaller chunks so it becomes much easier to reason about it. You can literally organize the folder structure in any way that makes sense to you – no constraints.

We use Grapes almost every day, and we hope you will too.

# Examples

- [0x4447_product_s3_email](https://github.com/0x4447/0x4447_product_s3_email)

# How to Install

```
] sudo npm install -g @0x4447/grapes
```

# How to Use

```
] grapes -s PATH_TO_FOLDER
```

# Where to get Help

```
] grapes -h
```

# What to expect

### The build feature

Every time you run the command, a `CloudFormation.json` file appears in the folder you pointed to using the `-s` parameter. The file contains the final CloudFormation file, which you can then upload straight to AWS for deployment. This file is overwritten every time you run Grapes.

### The init feature

The initialization command creates a complete folder structure in the path you specified. The end result is the exact structure that Grapes expects when building the final file. The only requirement for the tool is that you never change the root folder names. Anything inside those folders is up to you. You can name your files anything you like and organize them in whatever folder structure makes sense to you.

# The End

If you enjoyed this project, please consider giving it a 🌟. And check out our [0x4447 GitHub account](https://github.com/0x4447), where you'll find additional resources you might find useful or interesting.

## Sponsor 🎊

This project is brought to you by 0x4447 LLC, a software company specializing in building custom solutions on top of AWS. Follow this link to learn more: https://0x4447.com. Alternatively, reach out through our [contact page](https://0x4447.com/contact/).
